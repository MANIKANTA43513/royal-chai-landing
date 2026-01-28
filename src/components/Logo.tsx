import { Crown } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center glow-gold">
          <Crown className="w-6 h-6 text-secondary" />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="font-display text-2xl font-semibold tracking-wide text-secondary">
          Royal Chai
        </span>
        <span className="text-xs font-body text-muted-foreground tracking-widest uppercase">
          Premium Collection
        </span>
      </div>
    </div>
  );
};

export default Logo;
