import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, CheckCircle, Package, Truck, XCircle } from "lucide-react";
import { useOrders, OrderStatus } from "@/contexts/OrderContext";

const statusConfig: Record<OrderStatus, { label: string; color: string; icon: React.ReactNode }> = {
  pending: { label: "Pending", color: "bg-yellow-100 text-yellow-800", icon: <Package className="w-3.5 h-3.5" /> },
  paid: { label: "Paid", color: "bg-green-100 text-green-800", icon: <CheckCircle className="w-3.5 h-3.5" /> },
  shipped: { label: "Shipped", color: "bg-blue-100 text-blue-800", icon: <Truck className="w-3.5 h-3.5" /> },
  delivered: { label: "Delivered", color: "bg-emerald-100 text-emerald-800", icon: <CheckCircle className="w-3.5 h-3.5" /> },
  cancelled: { label: "Cancelled", color: "bg-red-100 text-red-800", icon: <XCircle className="w-3.5 h-3.5" /> },
};

const allStatuses: OrderStatus[] = ["pending", "paid", "shipped", "delivered", "cancelled"];

export default function AdminOrdersPage() {
  const { orders, updateOrderStatus } = useOrders();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-4 lg:px-8 py-8">
      <h1 className="font-heading text-3xl font-bold text-foreground mb-6">Orders</h1>

      {orders.length === 0 ? (
        <p className="text-muted-foreground">No orders yet.</p>
      ) : (
        <div className="space-y-3">
          {orders.map((order) => {
            const expanded = expandedId === order.id;
            const sc = statusConfig[order.status];
            return (
              <motion.div
                key={order.id}
                layout
                className="bg-card border border-border rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setExpandedId(expanded ? null : order.id)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="font-mono text-sm font-medium text-foreground">{order.id}</span>
                    <span className="text-sm text-muted-foreground">{order.customerName}</span>
                    <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${sc.color}`}>
                      {sc.icon} {sc.label}
                    </span>
                    <span className="text-sm font-medium text-foreground">€{order.total.toFixed(2)}</span>
                  </div>
                  {expanded ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                </button>

                {expanded && (
                  <div className="px-4 pb-4 border-t border-border pt-4 space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Email</p>
                        <p className="text-foreground">{order.customerEmail}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Address</p>
                        <p className="text-foreground">{order.address}, {order.postalCode} {order.city}, Finland</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Date</p>
                        <p className="text-foreground">{new Date(order.createdAt).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Payment</p>
                        <p className="text-foreground capitalize">{order.paymentMethod.replace("_", " ")}</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Products</p>
                      <div className="space-y-2">
                        {order.items.map((item) => (
                          <div key={item.id} className="flex items-center gap-3">
                            <img src={item.image} alt={item.name} className="w-10 h-10 rounded object-cover bg-secondary" />
                            <span className="text-sm text-foreground flex-1">{item.name}</span>
                            <span className="text-sm text-muted-foreground">×{item.quantity}</span>
                            <span className="text-sm font-medium text-foreground">€{(item.price * item.quantity).toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {order.paymentMethod === "bank_transfer" && order.status === "pending" && (
                      <div className="bg-secondary/50 border border-border rounded-md p-3">
                        <p className="text-sm text-muted-foreground mb-2">Bank transfer — awaiting confirmation</p>
                        {order.paymentProofUrl && (
                          <p className="text-xs text-primary mb-2">Payment proof uploaded ✓</p>
                        )}
                        <button
                          onClick={() => updateOrderStatus(order.id, "paid")}
                          className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90"
                        >
                          Mark as Paid
                        </button>
                      </div>
                    )}

                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Update Status</p>
                      <div className="flex flex-wrap gap-2">
                        {allStatuses.map((s) => (
                          <button
                            key={s}
                            disabled={order.status === s}
                            onClick={() => updateOrderStatus(order.id, s)}
                            className={`text-xs px-3 py-1.5 rounded-md border transition-colors ${
                              order.status === s
                                ? "bg-primary text-primary-foreground border-primary"
                                : "border-border text-muted-foreground hover:bg-secondary"
                            }`}
                          >
                            {statusConfig[s].label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
