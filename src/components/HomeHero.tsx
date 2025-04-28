
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <div className="relative overflow-hidden bg-accent/30">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
          alt="Декоративная штукатурка" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Декоративная штукатурка<br />и микроцемент
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Создайте уникальный дизайн вашего интерьера с помощью наших премиальных материалов. Производство и доставка по всей России.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link to="/products">Каталог продукции</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contacts">Связаться с нами</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
