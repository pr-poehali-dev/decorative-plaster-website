
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";

export interface ProductProps {
  id: string;
  title: string;
  price: number;
  image: string;
  tags?: string[];
  isNew?: boolean;
}

const ProductCard = ({ title, price, image, tags, isNew }: ProductProps) => {
  return (
    <Card className="overflow-hidden hover-scale h-full flex flex-col">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        {isNew && (
          <Badge className="absolute top-2 right-2 bg-primary">Новинка</Badge>
        )}
      </div>
      <CardContent className="p-5 flex-grow">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex gap-2 flex-wrap mb-3">
          {tags?.map((tag, index) => (
            <Badge key={index} variant="outline">{tag}</Badge>
          ))}
        </div>
        <div className="font-bold text-xl">{price} ₽/м²</div>
      </CardContent>
      <CardFooter className="p-5 pt-0">
        <Button className="w-full">
          <ShoppingCart className="mr-2 h-4 w-4" />
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
