import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type OrderStatus = "pending" | "paid" | "shipped" | "delivered" | "cancelled";

export interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Order {
  id: string;
  userId: string;
  customerName: string;
  customerEmail: string;
  address: string;
  postalCode: string;
  city: string;
  items: OrderItem[];
  total: number;
  paymentMethod: "paypal" | "bank_transfer";
  status: OrderStatus;
  paymentProofUrl?: string;
  createdAt: string;
}

interface OrderContextType {
  orders: Order[];
  placeOrder: (order: Omit<Order, "id" | "createdAt" | "status">) => Order;
  updateOrderStatus: (orderId: string, status: OrderStatus) => void;
  getOrdersByUser: (userId: string) => Order[];
  uploadPaymentProof: (orderId: string, url: string) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function OrderProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useState<Order[]>(() => {
    const raw = localStorage.getItem("cc_orders");
    return raw ? JSON.parse(raw) : [];
  });

  useEffect(() => {
    localStorage.setItem("cc_orders", JSON.stringify(orders));
  }, [orders]);

  const placeOrder = (data: Omit<Order, "id" | "createdAt" | "status">) => {
    const order: Order = {
      ...data,
      id: `ORD-${Date.now().toString(36).toUpperCase()}`,
      status: data.paymentMethod === "paypal" ? "paid" : "pending",
      createdAt: new Date().toISOString(),
    };
    setOrders((prev) => [order, ...prev]);
    return order;
  };

  const updateOrderStatus = (orderId: string, status: OrderStatus) => {
    setOrders((prev) => prev.map((o) => (o.id === orderId ? { ...o, status } : o)));
  };

  const getOrdersByUser = (userId: string) => orders.filter((o) => o.userId === userId);

  const uploadPaymentProof = (orderId: string, url: string) => {
    setOrders((prev) => prev.map((o) => (o.id === orderId ? { ...o, paymentProofUrl: url } : o)));
  };

  return (
    <OrderContext.Provider value={{ orders, placeOrder, updateOrderStatus, getOrdersByUser, uploadPaymentProof }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  const ctx = useContext(OrderContext);
  if (!ctx) throw new Error("useOrders must be used within OrderProvider");
  return ctx;
}
