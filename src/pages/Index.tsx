
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Clock, Users, Star, ArrowRight, Package, Shield, RefreshCw } from "lucide-react";

import Navbar from "@/components/Navbar";
import HomeHero from "@/components/HomeHero";
import ProductCategory from "@/components/ProductCategory";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import ProjectsShowcase from "@/components/ProjectsShowcase";

const categories = [
  {
    id: "decorative-plaster",
    title: "Декоративная штукатурка",
    description: "Широкий ассортимент фактур и цветов для создания уникальных интерьеров",
    image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: "microcement",
    title: "Микроцемент",
    description: "Современное бесшовное покрытие с высокой прочностью для стен и полов",
    image: "https://images.unsplash.com/photo-1597766353939-b683bfd38299?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: "paints",
    title: "Краски и грунты",
    description: "Дополнительные материалы для идеального нанесения и защиты покрытий",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80"
  }
];

const featuredProducts = [
  {
    id: "1",
    title: "Венецианская штукатурка Classico",
    price: 3200,
    image: "https://images.unsplash.com/photo-1620034156930-fb3f1e19741d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
    tags: ["Премиум", "Глянцевая"],
    isNew: true
  },
  {
    id: "2",
    title: "Микроцемент Moderno",
    price: 4500,
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
    tags: ["Водостойкий", "Для пола"]
  },
  {
    id: "3",
    title: "Травертин Naturale",
    price: 2800,
    image: "https://images.unsplash.com/photo-1582711012151-d14e05bacc3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
    tags: ["Матовая", "Натуральная"]
  }
];

const testimonials = [
  {
    name: "Анна Иванова",
    role: "Дизайнер интерьеров",
    content: "Использую продукцию ДекорШтук более 3 лет. Отличное качество материалов и большой выбор фактур позволяют реализовать самые смелые дизайнерские идеи.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Сергей Петров",
    role: "Руководитель строительной компании",
    content: "Наша компания сотрудничает с ДекорШтук на постоянной основе. Сроки поставок всегда соблюдаются, а качество материалов на высоте.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Марина Соколова",
    role: "Частный клиент",
    content: "Заказывала штукатурку для отделки гостиной. Консультанты помогли подобрать идеальный вариант. Результат превзошел все ожидания!",
    avatar: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        <HomeHero />
        
        {/* Категории продукции */}
        <section className="section-padding">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Наша продукция</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Предлагаем широкий ассортимент декоративных покрытий собственного производства
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categories.map((category) => (
                <ProductCategory 
                  key={category.id}
                  id={category.id}
                  title={category.title}
                  description={category.description}
                  image={category.image}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Преимущества */}
        <section className="bg-primary text-primary-foreground section-padding">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают нас</h2>
              <p className="max-w-2xl mx-auto opacity-90">
                Мы производим высококачественные декоративные покрытия с 2010 года
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary-foreground text-primary mb-4">
                  <Shield size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Высокое качество</h3>
                <p className="opacity-90">Использование только проверенных компонентов и строгий контроль качества</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary-foreground text-primary mb-4">
                  <Package size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Собственное производство</h3>
                <p className="opacity-90">Полный контроль процесса от разработки формулы до упаковки</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary-foreground text-primary mb-4">
                  <Clock size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Быстрая доставка</h3>
                <p className="opacity-90">Отправляем заказы в течение 48 часов по всей России</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary-foreground text-primary mb-4">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Экспертная поддержка</h3>
                <p className="opacity-90">Бесплатные консультации и техническая поддержка на всех этапах</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Популярные товары */}
        <section className="section-padding">
          <div className="container">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Популярные товары</h2>
                <p className="text-muted-foreground">Самые востребованные позиции нашего каталога</p>
              </div>
              <Button variant="outline" asChild>
                <Link to="/products">
                  Весь каталог <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard 
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                  tags={product.tags}
                  isNew={product.isNew}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Проекты */}
        <ProjectsShowcase />
        
        {/* Отзывы */}
        <section className="section-padding">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Что говорят клиенты</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Отзывы о нашей продукции и сервисе от клиентов и партнеров
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  name={testimonial.name}
                  role={testimonial.role}
                  content={testimonial.content}
                  avatar={testimonial.avatar}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="bg-accent section-padding">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы начать проект?</h2>
              <p className="text-lg mb-8 text-muted-foreground">
                Наши эксперты помогут подобрать идеальные материалы для вашего интерьера.
                Получите консультацию и расчет стоимости прямо сейчас!
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg">Заказать звонок</Button>
                <Button size="lg" variant="outline">Скачать каталог</Button>
              </div>
            </div>
          </div>
        </section>
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

export default Index;
