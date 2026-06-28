import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Save, X } from "lucide-react";
import { products as defaultProducts, Product } from "@/data/products";

function getStoredProducts(): (Product & { available: boolean })[] {
  const raw = localStorage.getItem("cc_products");
  if (!raw) {
    const initial = defaultProducts.map((p) => ({ ...p, available: true }));
    localStorage.setItem("cc_products", JSON.stringify(initial));
    return initial;
  }
  return JSON.parse(raw);
}

export default function AdminProductsPage() {
  const [products, setProducts] = useState(getStoredProducts);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", price: "", description: "", shortDescription: "" });

  useEffect(() => {
    localStorage.setItem("cc_products", JSON.stringify(products));
  }, [products]);

  const startEdit = (p: Product & { available: boolean }) => {
    setEditingId(p.id);
    setForm({ name: p.name, price: p.price.toString(), description: p.description, shortDescription: p.shortDescription });
  };

  const saveEdit = (id: string) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, name: form.name, price: parseFloat(form.price) || p.price, description: form.description, shortDescription: form.shortDescription }
          : p
      )
    );
    setEditingId(null);
  };

  const toggleAvailability = (id: string) => {
    setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, available: !p.available } : p)));
  };

  return (
    <div className="container mx-auto px-4 lg:px-8 py-8">
      <h1 className="font-heading text-3xl font-bold text-foreground mb-6">Products</h1>

      <div className="space-y-4">
        {products.map((product) => (
          <motion.div key={product.id} layout className="bg-card border border-border rounded-lg p-4">
            {editingId === product.id ? (
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Name</label>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Price (€)</label>
                  <input
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                    type="number"
                    step="0.01"
                    className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Short Description</label>
                  <input
                    value={form.shortDescription}
                    onChange={(e) => setForm({ ...form, shortDescription: e.target.value })}
                    className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Description</label>
                  <textarea
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    rows={3}
                    className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div className="flex gap-2">
                  <button onClick={() => saveEdit(product.id)} className="inline-flex items-center gap-1 text-sm bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90">
                    <Save className="w-3.5 h-3.5" /> Save
                  </button>
                  <button onClick={() => setEditingId(null)} className="inline-flex items-center gap-1 text-sm border border-border px-4 py-2 rounded-md hover:bg-secondary">
                    <X className="w-3.5 h-3.5" /> Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <img src={product.image} alt={product.name} className="w-16 h-16 rounded-md object-cover bg-secondary" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading text-lg font-semibold text-foreground">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">€{product.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleAvailability(product.id)}
                    className={`text-xs px-3 py-1.5 rounded-full font-medium ${
                      product.available ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}
                  >
                    {product.available ? "Available" : "Unavailable"}
                  </button>
                  <button
                    onClick={() => startEdit(product)}
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    Edit
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
