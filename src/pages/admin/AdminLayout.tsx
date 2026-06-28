import { Link, useLocation, Outlet } from "react-router-dom";
import { Package, ShoppingBag, Users, LayoutDashboard } from "lucide-react";

const adminLinks = [
  { label: "Orders", to: "/admin/orders", icon: ShoppingBag },
  { label: "Products", to: "/admin/products", icon: Package },
  { label: "Customers", to: "/admin/customers", icon: Users },
];

export default function AdminLayout() {
  const location = useLocation();

  return (
    <div className="min-h-[80vh]">
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-6 overflow-x-auto py-3">
            <div className="flex items-center gap-2 text-sm font-medium text-primary">
              <LayoutDashboard className="w-4 h-4" />
              Admin
            </div>
            {adminLinks.map((link) => {
              const Icon = link.icon;
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`inline-flex items-center gap-1.5 text-sm font-medium py-2 border-b-2 transition-colors ${
                    active ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
