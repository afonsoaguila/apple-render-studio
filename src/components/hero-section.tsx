import { AppleButton } from "./ui/apple-button";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title: string;
  tagline: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  variant?: "dark" | "light";
  className?: string;
  primaryCTA?: string;
  secondaryCTA?: string;
  imagePosition?: "left" | "right";
}

const HeroSection = ({
  title,
  tagline,
  description,
  image,
  imageAlt,
  variant = "dark",
  className,
  primaryCTA = "Compre",
  secondaryCTA = "Saiba mais",
  imagePosition = "right"
}: HeroSectionProps) => {
  const isDark = variant === "dark";
  
  return (
    <section 
      className={cn(
        "hero-section",
        isDark ? "bg-gradient-hero text-white" : "bg-hero-light text-foreground",
        className
      )}
    >
      <div className="container-apple">
        <div className={cn(
          "grid lg:grid-cols-2 gap-12 items-center",
          imagePosition === "left" && "lg:grid-flow-col-dense"
        )}>
          <div className={cn(
            "space-y-6 text-center lg:text-left",
            imagePosition === "left" && "lg:col-start-2"
          )}>
            <h1 className={cn(
              "hero-text",
              isDark ? "text-white" : "text-foreground"
            )}>
              {title}
            </h1>
            
            <h2 className={cn(
              "product-tagline",
              isDark ? "text-white/90" : "text-muted-foreground"
            )}>
              {tagline}
            </h2>
            
            {description && (
              <p className={cn(
                "text-lg max-w-2xl mx-auto lg:mx-0",
                isDark ? "text-white/80" : "text-muted-foreground"
              )}>
                {description}
              </p>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <AppleButton variant="hero" size="lg">
                {primaryCTA}
              </AppleButton>
              <AppleButton variant="ghost" size="lg">
                {secondaryCTA}
              </AppleButton>
            </div>
          </div>
          
          {image && (
            <div className={cn(
              "flex justify-center lg:justify-end",
              imagePosition === "left" && "lg:col-start-1 lg:justify-start"
            )}>
              <div className="product-visual">
                <img
                  src={image}
                  alt={imageAlt || title}
                  className="max-w-full h-auto max-h-[500px] object-contain"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;