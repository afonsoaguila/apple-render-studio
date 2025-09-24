import { AppleButton } from "./ui/apple-button";

const TVBanner = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 to-white overflow-hidden">
      <div className="container-apple">
        <div className="relative bg-gradient-to-r from-gray-800 to-black rounded-2xl overflow-hidden shadow-product">
          <div className="absolute top-8 left-8 z-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-yellow-400 mb-2">
              THE MORNING SHOW
            </h2>
          </div>
          
          <div className="relative h-80 flex items-center justify-center text-center text-white p-8">
            <div className="max-w-2xl">
              <h3 className="text-3xl font-display font-semibold mb-4">
                Comece a ver
              </h3>
              <p className="text-white/85 mb-6">
                Drama · Nova temporada.
              </p>
              <AppleButton variant="primary" size="lg">
                Assista
              </AppleButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TVBanner;