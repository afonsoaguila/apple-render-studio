import { AppleButton } from "./ui/apple-button";

const PromoBanner = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container-apple">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-soft">
            <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
              Compra um Mac ou iPad para a universidade
            </h3>
            <p className="text-muted-foreground mb-6">
              Com descontos para educação. Escolhe uns AirPods ou outro acessório abrangido.
            </p>
            <div className="flex gap-4">
              <AppleButton variant="ghost">
                Saiba mais
              </AppleButton>
              <AppleButton variant="primary">
                Comprar
              </AppleButton>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="w-full max-w-md h-64 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-soft flex items-center justify-center">
              <div className="text-6xl">💻</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;