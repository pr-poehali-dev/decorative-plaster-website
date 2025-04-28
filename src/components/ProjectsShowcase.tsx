
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Project {
  id: string;
  title: string;
  image: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Гостиная в стиле лофт",
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: "2",
    title: "Ресторан итальянской кухни",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: "3",
    title: "Спальня в экостиле",
    image: "https://images.unsplash.com/photo-1581467655410-0c2bf55d9d6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80"
  }
];

const ProjectsShowcase = () => {
  return (
    <section className="bg-muted/50 section-padding">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши проекты</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Взгляните на реализованные проекты с использованием наших декоративных покрытий и микроцемента
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="relative overflow-hidden rounded-lg group h-72">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div>
                  <h3 className="text-white font-semibold text-xl mb-2">{project.title}</h3>
                  <Button size="sm" variant="secondary">Подробнее</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button variant="outline" size="lg" asChild>
            <Link to="/gallery">Смотреть все проекты</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
