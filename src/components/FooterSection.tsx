import { Flame } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-fire-dark border-t border-fire-dark-foreground/10 py-10">
      <div className="container max-w-6xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Flame className="w-5 h-5 text-primary" />
          <span className="font-heading text-lg uppercase text-fire-dark-foreground tracking-wider">
            Karachi Fish On Fire
          </span>
        </div>
        <div className="flex justify-center gap-6 mb-6">
          {["Facebook", "Instagram", "Twitter"].map((social) => (
            <a
              key={social}
              href="#"
              className="text-sm text-fire-dark-foreground/50 hover:text-accent transition-colors"
            >
              {social}
            </a>
          ))}
        </div>
        <p className="text-fire-dark-foreground/30 text-sm">
          © 2025 Karachi Fish On Fire. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
