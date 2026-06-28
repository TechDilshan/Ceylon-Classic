import { motion } from "framer-motion";
import { Package, CheckCircle, Truck, XCircle } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useOrders, OrderStatus } from "@/contexts/OrderContext";

const statusConfig: Record<OrderStatus, { label: string; color: string; icon: React.ReactNode }> = {
  pending: { label: "Pending", color: "bg-yellow-100 text-yellow-800", icon: <Package className="w-3.5 h-3.5" /> },
  paid: { label: "Paid", color: "bg-green-100 text-green-800", icon: <CheckCircle className="w-3.5 h-3.5" /> },
  shipped: { label: "Shipped", color: "bg-blue-100 text-blue-800", icon: <Truck className="w-3.5 h-3.5" /> },
  delivered: { label: "Delivered", color: "bg-emerald-100 text-emerald-800", icon: <CheckCircle className="w-3.5 h-3.5" /> },
  cancelled: { label: "Cancelled", color: "bg-red-100 text-red-800", icon: <XCircle className="w-3.5 h-3.5" /> },
};

export default function MyOrdersPage() {
  const { user } = useAuth();
  const { getOrdersByUser } = useOrders();
  const myOrders = user ? getOrdersByUser(user.id) : [];

  return (
    <div className="container mx-auto px-4 lg:px-8 py-8 md:py-12">
      <h1 className="font-heading text-3xl font-bold text-foreground mb-6">My Orders</h1>

      {myOrders.length === 0 ? (
        <p className="text-muted-foreground">You haven't placed any orders yet.</p>
      ) : (
        <div className="space-y-4">
          {myOrders.map((order) => {
            const sc = statusConfig[order.status];
            return (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card border border-border rounded-lg p-4"
              >
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-medium text-foreground">{order.id}</span>
                    <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${sc.color}`}>
                      {sc.icon} {sc.label}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">{new Date(order.createdAt).toLocaleDateString()}</span>
                </div>
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
                <div className="flex justify-between mt-3 pt-3 border-t border-border">
                  <span className="text-sm text-muted-foreground capitalize">{order.paymentMethod.replace("_", " ")}</span>
                  <span className="font-heading text-lg font-bold text-foreground">€{order.total.toFixed(2)}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
