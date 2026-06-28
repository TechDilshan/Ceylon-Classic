import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "customer";
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  isAdmin: boolean;
  isLoggedIn: boolean;
  login: (email: string, password: string) => { success: boolean; error?: string };
  signup: (name: string, email: string, password: string) => { success: boolean; error?: string };
  logout: () => void;
  allUsers: User[];
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const ADMIN_EMAIL = "admin@ceylonclassic.fi";
const ADMIN_PASSWORD = "admin123";

function getStoredUsers(): (User & { password: string })[] {
  const raw = localStorage.getItem("cc_users");
  if (!raw) {
    // Seed admin
    const admin = {
      id: "admin-1",
      name: "Admin",
      email: ADMIN_EMAIL,
      password: ADMIN_PASSWORD,
      role: "admin" as const,
      createdAt: new Date().toISOString(),
    };
    localStorage.setItem("cc_users", JSON.stringify([admin]));
    return [admin];
  }
  return JSON.parse(raw);
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const raw = localStorage.getItem("cc_session");
    return raw ? JSON.parse(raw) : null;
  });

  useEffect(() => {
    if (user) localStorage.setItem("cc_session", JSON.stringify(user));
    else localStorage.removeItem("cc_session");
  }, [user]);

  const login = (email: string, password: string) => {
    const users = getStoredUsers();
    const found = users.find((u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    if (!found) return { success: false, error: "Invalid email or password" };
    const { password: _, ...safeUser } = found;
    setUser(safeUser);
    return { success: true };
  };

  const signup = (name: string, email: string, password: string) => {
    const users = getStoredUsers();
    if (users.find((u) => u.email.toLowerCase() === email.toLowerCase())) {
      return { success: false, error: "Email already registered" };
    }
    const newUser = {
      id: `user-${Date.now()}`,
      name,
      email,
      password,
      role: "customer" as const,
      createdAt: new Date().toISOString(),
    };
    users.push(newUser);
    localStorage.setItem("cc_users", JSON.stringify(users));
    const { password: _, ...safeUser } = newUser;
    setUser(safeUser);
    return { success: true };
  };

  const logout = () => setUser(null);

  const allUsers = getStoredUsers().map(({ password: _, ...u }) => u);

  return (
    <AuthContext.Provider value={{ user, isAdmin: user?.role === "admin", isLoggedIn: !!user, login, signup, logout, allUsers }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
