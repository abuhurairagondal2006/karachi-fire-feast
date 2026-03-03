import { createContext, useContext, useState, ReactNode } from "react";

export interface CartItem {
  name: string;
  price: string;
  quantity: number;
  category: string;
}

interface CartContextType {
  items: CartItem[];
  deliveryMode: "pickup" | "delivery";
  setDeliveryMode: (mode: "pickup" | "delivery") => void;
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (name: string) => void;
  updateQuantity: (name: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | null>(null);

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};

const parsePrice = (price: string) => Number(price.replace(/,/g, ""));

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [deliveryMode, setDeliveryMode] = useState<"pickup" | "delivery">("pickup");
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addItem = (item: Omit<CartItem, "quantity">) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.name === item.name);
      if (existing) {
        return prev.map((i) => i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeItem = (name: string) => setItems((prev) => prev.filter((i) => i.name !== name));

  const updateQuantity = (name: string, quantity: number) => {
    if (quantity <= 0) return removeItem(name);
    setItems((prev) => prev.map((i) => i.name === name ? { ...i, quantity } : i));
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + parsePrice(i.price) * i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, deliveryMode, setDeliveryMode, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice, isCartOpen, setIsCartOpen }}>
      {children}
    </CartContext.Provider>
  );
};
