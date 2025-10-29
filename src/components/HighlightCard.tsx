import { LucideIcon } from "lucide-react";

interface HighlightCardProps {
  icon: LucideIcon;
  title: string;
}

const HighlightCard = ({ icon: Icon, title }: HighlightCardProps) => {
  return (
    <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50 hover:border-secondary transition-colors duration-300">
      <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-secondary" />
      </div>
      <p className="font-medium text-card-foreground">{title}</p>
    </div>
  );
};

export default HighlightCard;
