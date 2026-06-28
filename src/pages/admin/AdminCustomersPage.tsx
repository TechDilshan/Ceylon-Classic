import { motion } from "framer-motion";
import { Mail, ShoppingBag } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useOrders } from "@/contexts/OrderContext";

export default function AdminCustomersPage() {
  const { allUsers } = useAuth();
  const { orders } = useOrders();

  const customers = allUsers.filter((u) => u.role === "customer");

  return (
    <div className="container mx-auto px-4 lg:px-8 py-8">
      <h1 className="font-heading text-3xl font-bold text-foreground mb-6">Customers</h1>

      {customers.length === 0 ? (
        <p className="text-muted-foreground">No customers yet.</p>
      ) : (
        <div className="space-y-3">
          {customers.map((customer) => {
            const customerOrders = orders.filter((o) => o.userId === customer.id);
            const totalSpent = customerOrders.reduce((s, o) => s + o.total, 0);
            return (
              <motion.div
                key={customer.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card border border-border rounded-lg p-4"
              >
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">{customer.name}</h3>
                    <p className="text-sm text-muted-foreground">{customer.email}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Joined {new Date(customer.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>{customerOrders.length} orders</span>
                      </div>
                      <p className="text-sm font-medium text-foreground">€{totalSpent.toFixed(2)}</p>
                    </div>
                    {customerOrders.length > 1 && (
                      <span className="text-xs font-medium bg-spice-turmeric/20 text-spice-turmeric px-2 py-0.5 rounded-full">
                        Repeat
                      </span>
                    )}
                    <a
                      href={`mailto:${customer.email}`}
                      className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                    >
                      <Mail className="w-3.5 h-3.5" /> Email
                    </a>
                  </div>
                </div>

                {customerOrders.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-2">Recent Orders</p>
                    <div className="flex flex-wrap gap-2">
                      {customerOrders.slice(0, 5).map((o) => (
                        <span key={o.id} className="text-xs font-mono bg-secondary px-2 py-1 rounded">
                          {o.id}
                        </span>
                      ))}
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
