import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ColorShowcase from "@/components/color-showcase";
import { ProductGrid } from "@/components/product-grid";
import PromoBanner from "@/components/promo-banner";
import TVBanner from "@/components/tv-banner";
import Footer from "@/components/footer";
import iphone17Pro from "@/assets/iphone-17-pro.png";
import iphoneAir from "@/assets/iphone-air.png";
import airpodsPro from "@/assets/airpods-pro.png";
import appleWatch from "@/assets/apple-watch.png";

const Index = () => {
  const products = [
    {
      id: "airpods-pro",
      title: "AirPods Pro 3", 
      description: "O melhor cancelamento ativo de ruído do mundo em auriculares compactos.",
      image: airpodsPro,
      imageAlt: "AirPods Pro 3"
    },
    {
      id: "apple-watch",
      title: "Apple Watch Series 11",
      description: "Ideal para controlar a sua saúde.",
      image: appleWatch,
      imageAlt: "Apple Watch Series 11"
    },
    {
      id: "watch-se",
      title: "Watch SE 3",
      description: "Ande. Fale. Registe. Adore.",
      image: appleWatch,
      imageAlt: "Apple Watch SE 3"
    },
    {
      id: "watch-ultra",
      title: "WATCH ULTRA 3",
      description: "Animal de competição.",
      image: appleWatch,
      imageAlt: "Apple Watch Ultra 3",
      variant: "dark" as const
    }
  ];

  return (
    <div className="smooth-scroll">
      <Navigation />
      
      {/* iPhone 17 Pro Hero */}
      <HeroSection
        title="iPhone 17 Pro"
        tagline="Pro em tudo."
        description="Uma experiência poderosa com fotografia pro, desempenho de topo e um design refinado. Textos curtos, diretos e centrados no produto."
        image={iphone17Pro}
        imageAlt="iPhone 17 Pro"
        variant="dark"
      />
      
      {/* iPhone Air Hero */}
      <HeroSection
        title="iPhone Air"
        tagline="O iPhone mais fino de sempre. Com a força de um pro."
        description="Design ultrafino, materiais premium e potência de um processador topo de linha — tudo num corpo surpreendentemente leve."
        image={iphoneAir}
        imageAlt="iPhone Air"
        variant="light"
        imagePosition="left"
      />
      
      {/* iPhone 17 Color Showcase */}
      <ColorShowcase />
      
      {/* Product Grid */}
      <ProductGrid products={products} />
      
      {/* Promo Banner */}
      <PromoBanner />
      
      {/* iPad Air Hero */}
      <HeroSection
        title="iPad Air"
        tagline="Agora com o superpotente processador M3."
        description="Design refinado encontra desempenho profissional num tablet surpreendentemente fino e leve."
        variant="light"
        className="py-16"
      />
      
      {/* TV+ Banner */}
      <TVBanner />
      
      <Footer />
    </div>
  );
};

export default Index;
