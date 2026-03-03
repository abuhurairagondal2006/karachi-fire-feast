import { Flame, Plus, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import dealBbqFeast from "@/assets/deals/deal-bbq-feast.jpg";
import dealSeafoodPlatter from "@/assets/deals/deal-seafood-platter.jpg";
import dealCoupleCombo from "@/assets/deals/deal-couple-combo.jpg";

const deals = [
  {
    id: "bbq-feast",
    name: "BBQ Feast Deal",
    description: "Balochi Tikka Full + Chicken Seekh Kebab Full + 2 Roghni Naan",
    items: ["Balochi Tikka Full", "Chicken Seekh Kebab Full Plate", "Roghni Naan x2"],
    originalPrice: 2298,
    dealPrice: "1,899",
    dealPriceNum: 1899,
    image: dealBbqFeast,
    badge: "SAVE Rs399",
  },
  {
    id: "seafood-platter",
    name: "Family Seafood Platter",
    description: "Grilled Rahu 0.5 Kg + Fry Rahu 0.5 Kg + 4 Roghni Naan",
    items: ["Grilled Rahu 0.5 Kg", "Fry Rahu 0.5 Kg", "Roghni Naan x4"],
    originalPrice: 3400,
    dealPrice: "2,799",
    dealPriceNum: 2799,
    image: dealSeafoodPlatter,
    badge: "SAVE Rs601",
  },
  {
    id: "couple-combo",
    name: "Couple Combo",
    description: "Malai Boti Full + Chicken Reshmi Kabab + 2 Cheese Naan",
    items: ["Malai Boti Full", "Chicken Reshmi Kabab", "Cheese Naan x2"],
    originalPrice: 3798,
    dealPrice: "2,999",
    dealPriceNum: 2999,
    image: dealCoupleCombo,
    badge: "BEST VALUE",
  },
];

const DealsSection = () => {
  const { addItem, setIsCartOpen } = useCart();

  const handleAddDeal = (deal: typeof deals[0]) => {
    addItem({ name: deal.name, price: deal.dealPrice, category: "Deals" });
    toast.success(`${deal.name} added to cart!`);
  };

  return (
    <section id="deals" className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-12 bg-accent" />
          <Tag className="w-5 h-5 text-accent" />
          <div className="h-px w-12 bg-accent" />
        </div>
        <h2 className="font-heading text-4xl md:text-5xl uppercase text-foreground text-center mb-3">
          Hot Deals
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          Combo deals — save more, eat more!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="group relative rounded-xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={deal.image}
                  alt={deal.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <span className="absolute top-3 right-3 bg-primary text-primary-foreground font-heading text-xs uppercase px-3 py-1 rounded-full">
                  {deal.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-heading text-xl uppercase text-card-foreground mb-2">
                  {deal.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">{deal.description}</p>
                <ul className="text-xs text-muted-foreground/70 mb-4 space-y-1">
                  {deal.items.map((item) => (
                    <li key={item} className="flex items-center gap-1">
                      <Flame className="w-3 h-3 text-primary" /> {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-muted-foreground/50 line-through text-sm mr-2">
                      Rs{deal.originalPrice.toLocaleString()}
                    </span>
                    <span className="font-heading text-2xl text-primary">Rs{deal.dealPrice}</span>
                  </div>
                </div>
                <Button
                  onClick={() => handleAddDeal(deal)}
                  className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground font-heading uppercase text-sm gap-1"
                >
                  <Plus className="w-4 h-4" /> Add Deal
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
