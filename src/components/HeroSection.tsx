import heroImage from "@/assets/hero-seafood.jpg";
import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-fire-dark/70" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Flame className="w-8 h-8 text-accent animate-flame-pulse" />
          <span className="font-heading text-accent uppercase tracking-[0.3em] text-sm">
            Fresh • Fiery • Flavorful
          </span>
          <Flame className="w-8 h-8 text-accent animate-flame-pulse" />
        </div>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl uppercase text-primary-foreground text-shadow-hero leading-tight mb-6">
          Karachi Fish
          <br />
          <span className="text-accent">On Fire</span>
        </h1>
        <p className="text-lg md:text-xl text-fire-dark-foreground/80 mb-8 max-w-2xl mx-auto">
          Delicious, freshly grilled seafood every day!
        </p>
        <Button
          variant="hero"
          size="lg"
          className="text-lg px-10 py-6"
          onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
        >
          Order Now
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
