const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border/50">
      <div className="container-apple">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="text-sm text-muted-foreground">
            © 2025 MockBrand — Page simulation for demonstration.
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact us
            </a>
          </div>
        </div>
        
        <div className="mt-4 text-xs text-muted-foreground">
          This is a stylistic example inspired by Apple.com: typography, spacing, CTAs and focus on product images.
        </div>
      </div>
    </footer>
  );
};

export default Footer;