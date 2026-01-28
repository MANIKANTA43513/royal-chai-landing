import { useState } from "react";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
    setEmail("");
    
    toast({
      title: "Welcome to the Royal Family!",
      description: "You'll be the first to know when we launch.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="flex items-center gap-3 px-6 py-4 bg-secondary/10 rounded-lg border border-primary/30 animate-fade-in">
        <CheckCircle className="w-6 h-6 text-primary" />
        <span className="font-body text-secondary">
          You're on the list! We'll notify you at launch.
        </span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-14 px-5 bg-card border-2 border-primary/20 rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            disabled={isLoading}
          />
        </div>
        <Button
          type="submit"
          disabled={isLoading}
          className="h-14 px-8 bg-gradient-gold hover:opacity-90 text-secondary font-body font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 glow-gold"
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              <span className="mr-2">Notify Me</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </Button>
      </div>
      <p className="mt-3 text-sm text-muted-foreground font-body">
        Be the first to experience the royal tradition. No spam, ever.
      </p>
    </form>
  );
};

export default EmailSignup;
