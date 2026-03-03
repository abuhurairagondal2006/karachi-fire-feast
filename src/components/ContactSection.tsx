import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Flame, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-fire-dark">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-12 bg-accent" />
          <Flame className="w-5 h-5 text-accent" />
          <div className="h-px w-12 bg-accent" />
        </div>
        <h2 className="font-heading text-4xl md:text-5xl uppercase text-fire-dark-foreground text-center mb-4">
          Contact Us
        </h2>
        <div className="flex justify-center gap-6 mb-10">
          <div className="flex items-center gap-2 text-fire-dark-foreground/70">
            <Phone className="w-4 h-4 text-primary" />
            <span className="text-sm">+92 XXX XXXXXXX</span>
          </div>
          <div className="flex items-center gap-2 text-fire-dark-foreground/70">
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-sm">info@karachifishonfire.com</span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
          <Input
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="bg-fire-dark-foreground/5 border-fire-dark-foreground/20 text-fire-dark-foreground placeholder:text-fire-dark-foreground/40"
          />
          <Input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="bg-fire-dark-foreground/5 border-fire-dark-foreground/20 text-fire-dark-foreground placeholder:text-fire-dark-foreground/40"
          />
          <Textarea
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            rows={4}
            className="bg-fire-dark-foreground/5 border-fire-dark-foreground/20 text-fire-dark-foreground placeholder:text-fire-dark-foreground/40"
          />
          <Button type="submit" variant="hero" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
