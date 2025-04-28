
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export interface TestimonialProps {
  name: string;
  role?: string;
  content: string;
  avatar?: string;
}

const TestimonialCard = ({ name, role, content, avatar }: TestimonialProps) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="mb-4 text-3xl text-primary">"</div>
        <p className="text-muted-foreground mb-6">{content}</p>
        <div className="flex items-center">
          <Avatar className="mr-3">
            <AvatarImage src={avatar} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold">{name}</div>
            {role && <div className="text-sm text-muted-foreground">{role}</div>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
