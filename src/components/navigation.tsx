import { Apple } from "lucide-react";

const Navigation = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="container-apple">
        <nav className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-2">
            <Apple className="h-5 w-5" />
            <span className="font-display font-semibold">Apple</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#iphone" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              iPhone
            </a>
            <a href="#airpods" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              AirPods
            </a>
            <a href="#watch" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Watch
            </a>
            <a href="#ipad" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              iPad
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Account
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Shop
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;