import { Flame, Menu, X, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-fire-dark/95 backdrop-blur-sm border-b border-fire-dark-foreground/10">
      <div className="container max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <Flame className="w-6 h-6 text-primary" />
          <span className="font-heading text-lg uppercase text-fire-dark-foreground tracking-wider">
            KFOF
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-heading text-sm uppercase tracking-wider text-fire-dark-foreground/70 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => setIsCartOpen(true)} className="relative text-fire-dark-foreground/70 hover:text-accent transition-colors">
            <ShoppingCart className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-heading">
                {totalItems}
              </span>
            )}
          </button>
          <button
            className="md:hidden text-fire-dark-foreground"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-fire-dark border-t border-fire-dark-foreground/10 px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 font-heading text-sm uppercase tracking-wider text-fire-dark-foreground/70 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
