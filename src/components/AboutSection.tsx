import { Flame } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container max-w-4xl mx-auto text-center px-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-12 bg-primary" />
          <Flame className="w-5 h-5 text-primary" />
          <div className="h-px w-12 bg-primary" />
        </div>
        <h2 className="font-heading text-4xl md:text-5xl uppercase text-foreground mb-6">
          About Us
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
          Karachi Fish On Fire is your go-to place for mouth-watering seafood,
          crafted with passion and served fresh every day. We bring the bold,
          fiery flavors of Karachi street food right to your plate — from crispy
          fried fish to succulent grilled prawns.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
