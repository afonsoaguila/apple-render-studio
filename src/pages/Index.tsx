import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ColorShowcase from "@/components/color-showcase";
import { ProductGrid } from "@/components/product-grid";
import PromoBanner from "@/components/promo-banner";
import TVBanner from "@/components/tv-banner";
import MeetingsWidget from "@/components/meetings-widget";
import ContactForm from "@/components/contact-form";
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
      description: "The world's best active noise cancellation in compact earbuds.",
      image: airpodsPro,
      imageAlt: "AirPods Pro 3"
    },
    {
      id: "apple-watch",
      title: "Apple Watch Series 11",
      description: "Perfect for monitoring your health.",
      image: appleWatch,
      imageAlt: "Apple Watch Series 11"
    },
    {
      id: "watch-se",
      title: "Watch SE 3",
      description: "Walk. Talk. Track. Love.",
      image: appleWatch,
      imageAlt: "Apple Watch SE 3"
    },
    {
      id: "watch-ultra",
      title: "WATCH ULTRA 3",
      description: "Competition beast.",
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
        tagline="Pro in everything."
        description="A powerful experience with pro photography, top performance and refined design. Short, direct texts focused on the product."
        image={iphone17Pro}
        imageAlt="iPhone 17 Pro"
        variant="dark"
      />
      
      {/* iPhone Air Hero */}
      <HeroSection
        title="iPhone Air"
        tagline="The thinnest iPhone ever. With the power of a pro."
        description="Ultra-thin design, premium materials and the power of a top-tier processor — all in a surprisingly lightweight body."
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
        tagline="Now with the supercharged M3 processor."
        description="Refined design meets professional performance in a surprisingly thin and light tablet."
        variant="light"
        className="py-16"
      />
      
      {/* TV+ Banner */}
      <TVBanner />
      
      {/* Contact Form */}
      <section className="py-20 bg-background">
        <div className="container-apple">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Meetings Widget */}
      <section className="py-20 bg-background">
        <div className="container-apple">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Schedule a Meeting
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Book a consultation with our team to discuss your needs and explore our solutions.
            </p>
          </div>
          <MeetingsWidget />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
