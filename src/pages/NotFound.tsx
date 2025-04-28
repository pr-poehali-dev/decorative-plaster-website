
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-1 py-16 px-4 text-center">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-6">Страница не найдена</h2>
        <p className="text-muted-foreground max-w-md mb-8">
          Извините, но запрашиваемая вами страница не существует или была перемещена.
        </p>
        <Button asChild>
          <Link to="/">Вернуться на главную</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
