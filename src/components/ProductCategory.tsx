
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

export interface CategoryProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

const ProductCategory = ({ id, title, description, image }: CategoryProps) => {
  return (
    <Link to={`/products/${id}`} className="block group hover-scale">
      <Card className="border overflow-hidden h-full">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-5">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCategory;
