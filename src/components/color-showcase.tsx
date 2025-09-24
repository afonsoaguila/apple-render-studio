import { AppleButton } from "./ui/apple-button";

interface ColorOption {
  name: string;
  gradient: string;
  emoji: string;
}

const colors: ColorOption[] = [
  {
    name: "Lavender",
    gradient: "from-purple-100 to-blue-100",
    emoji: "📱"
  },
  {
    name: "Azul",
    gradient: "from-blue-100 to-cyan-100", 
    emoji: "📱"
  },
  {
    name: "Verde",
    gradient: "from-green-100 to-emerald-100",
    emoji: "📱"
  },
  {
    name: "Peach",
    gradient: "from-orange-100 to-pink-100",
    emoji: "📱"
  }
];

const ColorShowcase = () => {
  return (
    <section className="hero-section bg-background">
      <div className="container-apple text-center">
        <h1 className="hero-text text-foreground mb-4">iPhone 17</h1>
        <h2 className="product-tagline text-muted-foreground mb-6">Magicromático.</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          Cores suaves e design que brilha em cada tom. Linhas limpas, câmeras nítidas e performance diária excelente.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
          {colors.map((color) => (
            <div key={color.name} className="group cursor-pointer">
              <div className="bg-gradient-to-br from-white to-gray-50 p-3 rounded-2xl shadow-soft transition-all duration-300 hover:scale-105 hover:shadow-product">
                <div className={`bg-gradient-to-br ${color.gradient} rounded-xl h-40 flex items-center justify-center text-4xl transition-all duration-300 group-hover:scale-105`}>
                  {color.emoji}
                </div>
              </div>
              <p className="mt-3 font-semibold text-foreground">{color.name}</p>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <AppleButton variant="ghost" size="lg">
            Saiba mais
          </AppleButton>
          <AppleButton variant="primary" size="lg">
            Compre
          </AppleButton>
        </div>
      </div>
    </section>
  );
};

export default ColorShowcase;