import { Sparkles } from "lucide-react";

const LaunchingBadge = () => {
  return (
    <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-gold rounded-full shadow-lg animate-pulse-soft">
      <Sparkles className="w-4 h-4 text-secondary" />
      <span className="font-body font-semibold text-sm text-secondary tracking-wide uppercase">
        Launching Soon
      </span>
    </div>
  );
};

export default LaunchingBadge;
