import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DealsSection from "@/components/DealsSection";
import MenuSection from "@/components/MenuSection";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import CartDrawer from "@/components/CartDrawer";
import { CartProvider } from "@/context/CartContext";

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <MenuSection />
        <DealsSection />
        <LocationSection />
        <ContactSection />
        <AboutSection />
        <FooterSection />
        <CartDrawer />
      </div>
    </CartProvider>
  );
};

export default Index;
