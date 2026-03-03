import { Flame, Plus, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const categories = ["Bar BQ", "Fish & Prawns", "Tandoor"] as const;

interface MenuItem {
  name: string;
  description: string;
  price: string;
  ingredients: string[];
}

const menuItems: Record<typeof categories[number], MenuItem[]> = {
  "Bar BQ": [
    { name: "Chicken Reshmi Kabab", description: "Soft, creamy chicken marinated in spices & grilled for a rich silky flavored", price: "899", ingredients: ["Chicken", "Yogurt", "Cream", "Ginger Garlic Paste", "Green Chilies", "Spices", "Butter"] },
    { name: "Balochi Tikka Full", description: "Full Plate", price: "1,099", ingredients: ["Chicken", "Balochi Spice Mix", "Yogurt", "Lemon", "Papaya Paste", "Red Chili", "Salt"] },
    { name: "Malai Boti Half", description: "Half (One Seekh)", price: "650", ingredients: ["Chicken", "Cream", "Cheese", "Yogurt", "Mild Spices", "Cardamom"] },
    { name: "Chicken Seekh Kebab Full Plate", description: "Full Plate", price: "899", ingredients: ["Minced Chicken", "Onions", "Green Chilies", "Coriander", "Ginger", "Spices"] },
    { name: "Chicken Reshmi Kebab Half", description: "Half (One Seekh)", price: "450", ingredients: ["Chicken", "Yogurt", "Cream", "Ginger Garlic Paste", "Spices"] },
    { name: "Balochi Tikka Half", description: "Half (One Seekh)", price: "550", ingredients: ["Chicken", "Balochi Spice Mix", "Yogurt", "Lemon", "Red Chili"] },
    { name: "Chandan Kabab", description: "Tender kabab with a beef, chicken blend & richly spiced", price: "1,099", ingredients: ["Beef", "Chicken", "Onions", "Spices", "Herbs", "Egg", "Gram Flour"] },
    { name: "Smoky Beef Gola Kabab", description: "Soft, flavorful beef kabab made with seasoned mince & cooker wet charcoal", price: "1,099", ingredients: ["Beef Mince", "Charcoal", "Onions", "Green Chilies", "Spices", "Coriander"] },
    { name: "Malai Boti Full", description: "Juicy chicken cubes marinated in creamy yogurt, cheese, mild spices, grilled for a soft & melt in the mouth flavored", price: "1,299", ingredients: ["Chicken", "Cream", "Cheese", "Yogurt", "Mild Spices", "Cardamom", "Butter"] },
  ],
  "Fish & Prawns": [
    { name: "Grilled Rahu 0.5 Kg", description: "Grilled Rahu", price: "1,400", ingredients: ["Rahu Fish", "Lemon", "Garlic", "Salt", "Black Pepper", "Herbs"] },
    { name: "Fry Rahu 1 Kg", description: "Fry Rahu", price: "2,600", ingredients: ["Rahu Fish", "Gram Flour", "Spices", "Red Chili", "Turmeric", "Oil"] },
    { name: "Fry Rahu 0.5 Kg", description: "Fry Rahu", price: "1,400", ingredients: ["Rahu Fish", "Gram Flour", "Spices", "Red Chili", "Turmeric", "Oil"] },
  ],
  "Tandoor": [
    { name: "Roghni Naan", description: "Roghni Naan", price: "150", ingredients: ["Flour", "Yeast", "Milk", "Butter", "Sesame Seeds"] },
    { name: "Cheese Naan", description: "Cheese Naan", price: "800", ingredients: ["Flour", "Cheese", "Butter", "Yeast", "Milk"] },
    { name: "Plain Roti", description: "Plain Roti", price: "50", ingredients: ["Whole Wheat Flour", "Water", "Salt"] },
    { name: "Qandhari Naan", description: "Qandhari Naan", price: "150", ingredients: ["Flour", "Yeast", "Dry Fruits", "Sesame", "Butter"] },
  ],
};

const MenuSection = () => {
  const [active, setActive] = useState<typeof categories[number]>("Bar BQ");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const { addItem, setIsCartOpen } = useCart();

  const handleAddToCart = (item: MenuItem, category: string) => {
    addItem({ name: item.name, price: item.price, category });
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <section id="menu" className="py-20 bg-fire-dark">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-12 bg-accent" />
          <Flame className="w-5 h-5 text-accent" />
          <div className="h-px w-12 bg-accent" />
        </div>
        <h2 className="font-heading text-4xl md:text-5xl uppercase text-fire-dark-foreground text-center mb-8">
          Our Menu
        </h2>

        {/* Category Tabs */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-heading uppercase text-sm md:text-base px-5 py-2 rounded-full border transition-colors ${
                active === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-fire-dark-foreground/20 text-fire-dark-foreground/70 hover:border-primary/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems[active].map((item) => (
            <div
              key={item.name}
              className="bg-fire-dark-foreground/5 border border-fire-dark-foreground/10 rounded-lg p-6 hover:border-primary/50 transition-colors group cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-heading text-xl uppercase text-fire-dark-foreground group-hover:text-accent transition-colors">
                  {item.name}
                </h3>
                <span className="font-heading text-xl text-primary shrink-0 ml-3">Rs{item.price}</span>
              </div>
              <p className="text-fire-dark-foreground/60 text-sm mb-3">{item.description}</p>
              <Button
                size="sm"
                onClick={(e) => { e.stopPropagation(); handleAddToCart(item, active); }}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading uppercase text-xs gap-1"
              >
                <Plus className="w-3 h-3" /> Add to Cart
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Item Detail Dialog */}
      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
        <DialogContent className="bg-fire-dark border-fire-dark-foreground/10 text-fire-dark-foreground max-w-md">
          {selectedItem && (
            <>
              <DialogHeader>
                <DialogTitle className="font-heading text-2xl uppercase text-fire-dark-foreground">
                  {selectedItem.name}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-heading text-2xl text-primary">Rs{selectedItem.price}</span>
                </div>
                <p className="text-fire-dark-foreground/70">{selectedItem.description}</p>
                <div>
                  <h4 className="font-heading uppercase text-sm text-accent mb-2">Ingredients</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.ingredients.map((ing) => (
                      <span key={ing} className="text-xs px-3 py-1 rounded-full border border-fire-dark-foreground/20 text-fire-dark-foreground/70">
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
                <Button
                  onClick={() => { handleAddToCart(selectedItem, active); setSelectedItem(null); }}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading uppercase gap-2"
                >
                  <ShoppingCart className="w-4 h-4" /> Add to Cart
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default MenuSection;
