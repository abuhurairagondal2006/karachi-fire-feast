import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, Trash2, Truck, Store, MessageCircle, Banknote, CreditCard, Smartphone } from "lucide-react";
import { useState } from "react";

type PaymentMethod = "cod" | "jazzcash" | "easypaisa";

const paymentMethods = [
  { id: "cod" as const, label: "Cash on Delivery", icon: Banknote },
  { id: "jazzcash" as const, label: "JazzCash", icon: Smartphone },
  { id: "easypaisa" as const, label: "EasyPaisa", icon: CreditCard },
];

const CartDrawer = () => {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeItem, clearCart, totalItems, totalPrice, deliveryMode, setDeliveryMode } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("cod");

  const sendWhatsApp = () => {
    const orderLines = items.map((i) => `${i.quantity}x ${i.name} - Rs${i.price}`).join("%0A");
    const mode = deliveryMode === "delivery" ? "🚚 Delivery" : "🏪 Pickup";
    const payment = paymentMethod === "cod" ? "💵 Cash on Delivery" : paymentMethod === "jazzcash" ? "📱 JazzCash" : "📱 EasyPaisa";
    const total = `Total: Rs${totalPrice.toLocaleString()}`;
    const msg = `Hi! I'd like to order:%0A%0A${orderLines}%0A%0A${mode}%0A${payment}%0A${total}`;
    window.open(`https://wa.me/?text=${msg}`, "_blank");
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="bg-fire-dark border-fire-dark-foreground/10 text-fire-dark-foreground flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-heading uppercase text-fire-dark-foreground">
            Your Cart ({totalItems})
          </SheetTitle>
        </SheetHeader>

        {/* Delivery Toggle */}
        <div className="flex gap-2 my-4">
          <button
            onClick={() => setDeliveryMode("pickup")}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg border font-heading text-sm uppercase transition-colors ${
              deliveryMode === "pickup" ? "bg-primary text-primary-foreground border-primary" : "border-fire-dark-foreground/20 text-fire-dark-foreground/60"
            }`}
          >
            <Store className="w-4 h-4" /> Pickup
          </button>
          <button
            onClick={() => setDeliveryMode("delivery")}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg border font-heading text-sm uppercase transition-colors ${
              deliveryMode === "delivery" ? "bg-primary text-primary-foreground border-primary" : "border-fire-dark-foreground/20 text-fire-dark-foreground/60"
            }`}
          >
            <Truck className="w-4 h-4" /> Delivery
          </button>
        </div>

        {items.length === 0 ? (
          <p className="text-fire-dark-foreground/50 text-center mt-10">Your cart is empty</p>
        ) : (
          <div className="flex-1 overflow-y-auto space-y-3">
            {items.map((item) => (
              <div key={item.name} className="bg-fire-dark-foreground/5 border border-fire-dark-foreground/10 rounded-lg p-3">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-heading text-sm uppercase">{item.name}</h4>
                    <p className="text-xs text-fire-dark-foreground/50">{item.category}</p>
                  </div>
                  <span className="text-primary font-heading text-sm">Rs{item.price}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button onClick={() => updateQuantity(item.name, item.quantity - 1)} className="w-7 h-7 rounded-full border border-fire-dark-foreground/20 flex items-center justify-center hover:border-primary transition-colors">
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="font-heading text-sm w-6 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.name, item.quantity + 1)} className="w-7 h-7 rounded-full border border-fire-dark-foreground/20 flex items-center justify-center hover:border-primary transition-colors">
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                  <button onClick={() => removeItem(item.name)} className="text-fire-dark-foreground/40 hover:text-primary transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {items.length > 0 && (
          <div className="border-t border-fire-dark-foreground/10 pt-4 space-y-3">
            {/* Payment Method */}
            <div>
              <h4 className="font-heading text-xs uppercase text-fire-dark-foreground/60 mb-2">Payment Method</h4>
              <div className="space-y-2">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setPaymentMethod(method.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg border text-sm font-heading uppercase transition-colors ${
                      paymentMethod === method.id
                        ? "bg-primary/10 border-primary text-primary"
                        : "border-fire-dark-foreground/10 text-fire-dark-foreground/60 hover:border-fire-dark-foreground/30"
                    }`}
                  >
                    <method.icon className="w-4 h-4" />
                    {method.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between font-heading text-lg uppercase">
              <span>Total</span>
              <span className="text-primary">Rs{totalPrice.toLocaleString()}</span>
            </div>
            <Button onClick={sendWhatsApp} className="w-full bg-green-600 hover:bg-green-700 text-white font-heading uppercase gap-2">
              <MessageCircle className="w-4 h-4" /> Order via WhatsApp
            </Button>
            <button onClick={clearCart} className="w-full text-fire-dark-foreground/40 text-xs hover:text-primary transition-colors">
              Clear Cart
            </button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
