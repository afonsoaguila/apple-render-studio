const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border/50">
      <div className="container-apple">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="text-sm text-muted-foreground">
            © 2025 MockBrand — Simulação de página para demonstração.
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacidade
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Termos
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contacte-nos
            </a>
          </div>
        </div>
        
        <div className="mt-4 text-xs text-muted-foreground">
          Este é um exemplo estilístico inspirado na Apple.com: tipografia, espaçamento, CTAs e foco em imagens de produto.
        </div>
      </div>
    </footer>
  );
};

export default Footer;