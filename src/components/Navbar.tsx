import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-2xl font-bold text-primary">
            ДекорШтук
          </Link>
        </div>

        {/* Мобильное меню */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Десктопное меню */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">
            Главная
          </Link>
          <Link to="/products" className="text-foreground hover:text-primary transition-colors">
            Продукция
          </Link>
          <Link to="/gallery" className="text-foreground hover:text-primary transition-colors">
            Галерея
          </Link>
          <Link to="/about" className="text-foreground hover:text-primary transition-colors">
            О компании
          </Link>
          <Link to="/contacts" className="text-foreground hover:text-primary transition-colors">
            Контакты
          </Link>
          <Button>Заказать звонок</Button>
        </nav>

        {/* Мобильное выпадающее меню */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden animate-fade-in">
            <div className="container py-4 flex flex-col gap-4">
              <Link to="/" className="text-foreground hover:text-primary py-2 transition-colors" onClick={toggleMenu}>
                Главная
              </Link>
              <Link to="/products" className="text-foreground hover:text-primary py-2 transition-colors" onClick={toggleMenu}>
                Продукция
              </Link>
              <Link to="/gallery" className="text-foreground hover:text-primary py-2 transition-colors" onClick={toggleMenu}>
                Галерея
              </Link>
              <Link to="/about" className="text-foreground hover:text-primary py-2 transition-colors" onClick={toggleMenu}>
                О компании
              </Link>
              <Link to="/contacts" className="text-foreground hover:text-primary py-2 transition-colors" onClick={toggleMenu}>
                Контакты
              </Link>
              <Button>Заказать звонок</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
