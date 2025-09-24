import { AppleButton } from "./ui/apple-button";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  variant?: "light" | "dark";
  className?: string;
}

const ProductCard = ({ 
  title, 
  description, 
  image, 
  imageAlt, 
  variant = "light",
  className 
}: ProductCardProps) => {
  const isDark = variant === "dark";
  
  return (
    <div className={cn(
      "rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-product",
      isDark ? "bg-gradient-to-br from-gray-900 to-black text-white" : "bg-card shadow-soft",
      className
    )}>
      <div className="flex items-center gap-6">
        <div className="flex-shrink-0">
          <div className="w-24 h-24 rounded-xl bg-gradient-product flex items-center justify-center overflow-hidden">
            <img
              src={image}
              alt={imageAlt || title}
              className="w-20 h-20 object-contain"
            />
          </div>
        </div>
        
        <div className="flex-1 space-y-3">
          <h3 className={cn(
            "text-lg font-semibold font-display",
            isDark ? "text-white" : "text-foreground"
          )}>
            {title}
          </h3>
          
          <p className={cn(
            "text-sm",
            isDark ? "text-white/80" : "text-muted-foreground"
          )}>
            {description}
          </p>
          
          <div className="flex gap-3">
            <AppleButton variant="ghost" size="sm">
              Saiba mais
            </AppleButton>
            <AppleButton variant="primary" size="sm">
              Compre
            </AppleButton>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ProductGridProps {
  products: Array<ProductCardProps & { id: string }>;
  className?: string;
}

const ProductGrid = ({ products, className }: ProductGridProps) => {
  return (
    <section className={cn("py-20 bg-muted", className)}>
      <div className="container-apple">
        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { ProductGrid, ProductCard };