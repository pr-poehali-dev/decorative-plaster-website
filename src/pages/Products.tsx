
import { useState } from "react";
import { ChevronDown, Search, Filter, Truck, Star } from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

// Типы данных для товаров
interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  subcategory: string;
  tags: string[];
  isNew?: boolean;
  rating?: number;
  inStock: boolean;
}

// Моковые данные товаров
const products: Product[] = [
  {
    id: "1",
    title: "Венецианская штукатурка Classico",
    price: 3200,
    image: "https://images.unsplash.com/photo-1620034156930-fb3f1e19741d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
    category: "decorative-plaster",
    subcategory: "venetian",
    tags: ["Премиум", "Глянцевая"],
    isNew: true,
    rating: 5,
    inStock: true
  },
  {
    id: "2",
    title: "Микроцемент Moderno",
    price: 4500,
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
    category: "microcement",
    subcategory: "floor",
    tags: ["Водостойкий", "Для пола"],
    rating: 4.5,
    inStock: true
  },
  {
    id: "3",
    title: "Травертин Naturale",
    price: 2800,
    image: "https://images.unsplash.com/photo-1582711012151-d14e05bacc3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
    category: "decorative-plaster",
    subcategory: "travertine",
    tags: ["Матовая", "Натуральная"],
    rating: 4,
    inStock: true
  },
  {
    id: "4",
    title: "Микроцемент для стен Urbano",
    price: 3800,
    image: "https://images.unsplash.com/photo-1594125674956-61a9b49c8eeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
    category: "microcement",
    subcategory: "wall",
    tags: ["Для стен", "Современный"],
    isNew: true,
    rating: 4.8,
    inStock: true
  },
  {
    id: "5",
    title: "Марокканская штукатурка Тадделакт",
    price: 5200,
    image: "https://images.unsplash.com/photo-1564540574859-0dfb63985953?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
    category: "decorative-plaster",
    subcategory: "tadelakt",
    tags: ["Премиум", "Водостойкая"],
    rating: 5,
    inStock: true
  },
  {
    id: "6",
    title: "Грунт универсальный для декоративных покрытий",
    price: 980,
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
    category: "paints",
    subcategory: "primer",
    tags: ["Грунт", "Универсальный"],
    rating: 4.2,
    inStock: true
  },
  {
    id: "7",
    title: "Декоративная штукатурка Шёлк",
    price: 2100,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
    category: "decorative-plaster",
    subcategory: "silk",
    tags: ["Перламутровая", "Элегантная"],
    rating: 4.7,
    inStock: false
  },
  {
    id: "8",
    title: "Фактурная штукатурка Барельеф",
    price: 2400,
    image: "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
    category: "decorative-plaster",
    subcategory: "relief",
    tags: ["Объемная", "Для интерьера"],
    rating: 4.3,
    inStock: true
  },
  {
    id: "9",
    title: "Микроцемент для ванных комнат Aqua",
    price: 4900,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
    category: "microcement",
    subcategory: "bathroom",
    tags: ["Влагостойкий", "Для ванной"],
    isNew: true,
    rating: 4.9,
    inStock: true
  }
];

// Компонент для карточки товара
const ProductItem = ({ product }: { product: Product }) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden border hover:shadow-md transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs font-bold py-1 px-2 rounded">
            Новинка
          </span>
        )}
        {!product.inStock && (
          <span className="absolute top-2 right-2 bg-destructive text-destructive-foreground text-xs font-bold py-1 px-2 rounded">
            Нет в наличии
          </span>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex gap-1 mb-2">
          {product.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <h3 className="font-bold text-lg mb-1">{product.title}</h3>
        
        {product.rating && (
          <div className="flex items-center gap-1 mb-2">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="text-sm font-medium">{product.rating.toFixed(1)}</span>
          </div>
        )}
        
        <div className="flex justify-between items-center mt-3">
          <span className="font-bold text-lg">{product.price} ₽/кг</span>
          <Button size="sm" disabled={!product.inStock}>
            {product.inStock ? "В корзину" : "Сообщить о поступлении"}
          </Button>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  // Фильтрация товаров
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Получение уникальных категорий
  const categories = [
    { id: "all", name: "Все товары" },
    { id: "decorative-plaster", name: "Декоративная штукатурка" },
    { id: "microcement", name: "Микроцемент" },
    { id: "paints", name: "Краски и грунты" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Хлебные крошки */}
        <div className="bg-muted/30 py-2">
          <div className="container">
            <div className="flex items-center text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary">Главная</Link>
              <span className="mx-2">/</span>
              <span>Каталог продукции</span>
            </div>
          </div>
        </div>
        
        {/* Заголовок */}
        <div className="container py-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Каталог продукции</h1>
          <p className="text-muted-foreground max-w-3xl">
            Предлагаем широкий ассортимент декоративных покрытий собственного производства. 
            Все материалы протестированы в лаборатории и имеют сертификаты качества.
          </p>
        </div>
        
        <div className="container pb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Сайдбар с фильтрами */}
            <div className="md:col-span-1">
              <div className="sticky top-20 bg-card p-4 rounded-lg border">
                <h3 className="text-lg font-bold mb-4">Фильтры</h3>
                
                {/* Поиск */}
                <div className="mb-4">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Поиск..."
                      className="pl-8"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                
                {/* Категории */}
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Категория</h4>
                  <Select
                    value={selectedCategory}
                    onValueChange={setSelectedCategory}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Выберите категорию" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <Separator className="my-4" />
                
                {/* Ценовой диапазон */}
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Цена, ₽</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <Input placeholder="От" type="number" />
                    <Input placeholder="До" type="number" />
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                {/* Наличие */}
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Наличие</h4>
                  <div className="flex items-center mb-2">
                    <input 
                      type="checkbox" 
                      id="in-stock" 
                      className="mr-2 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" 
                    />
                    <label htmlFor="in-stock" className="text-sm">В наличии</label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="new-items" 
                      className="mr-2 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" 
                    />
                    <label htmlFor="new-items" className="text-sm">Новинки</label>
                  </div>
                </div>
                
                <Button className="w-full" variant="outline">
                  <Filter className="mr-2 h-4 w-4" />
                  Применить фильтры
                </Button>
              </div>
            </div>
            
            {/* Список товаров */}
            <div className="md:col-span-3">
              {/* Сортировка и счетчик */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <p className="text-muted-foreground">
                  Найдено товаров: <strong>{filteredProducts.length}</strong>
                </p>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground hidden sm:inline">Сортировать:</span>
                  <Select defaultValue="popular">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Сортировка" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">По популярности</SelectItem>
                      <SelectItem value="price-asc">По цене (возр.)</SelectItem>
                      <SelectItem value="price-desc">По цене (убыв.)</SelectItem>
                      <SelectItem value="new">Сначала новинки</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {/* Сетка товаров */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <ProductItem key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-bold mb-2">Товары не найдены</h3>
                  <p className="text-muted-foreground mb-6">
                    По вашему запросу не найдено товаров. Попробуйте изменить параметры поиска.
                  </p>
                  <Button onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}>
                    Сбросить фильтры
                  </Button>
                </div>
              )}
              
              {/* Бонусная информация */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center p-4 bg-accent/20 rounded-lg">
                  <div className="mr-4 bg-primary/10 p-2 rounded-full">
                    <Truck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Доставка по всей России</h4>
                    <p className="text-sm text-muted-foreground">От 2 дней</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-accent/20 rounded-lg">
                  <div className="mr-4 bg-primary/10 p-2 rounded-full">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Гарантия качества</h4>
                    <p className="text-sm text-muted-foreground">Сертифицированная продукция</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-accent/20 rounded-lg">
                  <div className="mr-4 bg-primary/10 p-2 rounded-full">
                    <ChevronDown className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Скидки от объема</h4>
                    <p className="text-sm text-muted-foreground">До 20% на оптовые заказы</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Футер */}
      <footer className="bg-card mt-auto border-t">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">ДекорШтук</h3>
              <p className="text-muted-foreground mb-4">
                Производство и продажа декоративных отделочных материалов с 2010 года
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Каталог</h3>
              <ul className="space-y-2">
                <li><Link to="/products/decorative-plaster" className="text-muted-foreground hover:text-primary">Декоративная штукатурка</Link></li>
                <li><Link to="/products/microcement" className="text-muted-foreground hover:text-primary">Микроцемент</Link></li>
                <li><Link to="/products/paints" className="text-muted-foreground hover:text-primary">Краски и грунты</Link></li>
                <li><Link to="/products/tools" className="text-muted-foreground hover:text-primary">Инструменты</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Информация</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-muted-foreground hover:text-primary">О компании</Link></li>
                <li><Link to="/delivery" className="text-muted-foreground hover:text-primary">Доставка и оплата</Link></li>
                <li><Link to="/gallery" className="text-muted-foreground hover:text-primary">Галерея проектов</Link></li>
                <li><Link to="/blog" className="text-muted-foreground hover:text-primary">Блог и статьи</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>г. Москва, ул. Строителей, 15</li>
                <li>Пн-Пт: 9:00 - 18:00</li>
                <li>+7 (495) 123-45-67</li>
                <li>info@decorshtuk.ru</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>© 2023 ДекорШтук. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Products;
