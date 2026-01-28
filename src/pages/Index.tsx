import Logo from "@/components/Logo";
import EmailSignup from "@/components/EmailSignup";
import SocialLinks from "@/components/SocialLinks";
import LaunchingBadge from "@/components/LaunchingBadge";
import OrnamentalDivider from "@/components/OrnamentalDivider";
import heroImage from "@/assets/hero-chai.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background bg-pattern-royal">
      {/* Header */}
      <header className="w-full py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Logo />
          <SocialLinks />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-6 md:px-12 py-8 lg:py-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16 w-full">
          {/* Left: Content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 animate-fade-in-up">
            <LaunchingBadge />
            
            {/* Tagline */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-gradient-gold">Brew</span>{" "}
              <span className="text-secondary">the</span>
              <br />
              <span className="text-secondary">Royal Tradition</span>
            </h1>

            <OrnamentalDivider />

            {/* Brand Description */}
            <p className="font-elegant text-xl md:text-2xl text-muted-foreground max-w-xl leading-relaxed italic">
              Experience the opulence of royal Indian households with our 
              <span className="text-primary font-semibold not-italic"> premium instant chai</span> premix. 
              Crafted with rare spices and centuries-old recipes passed down through generations.
            </p>

            {/* Email Signup */}
            <div className="w-full max-w-md pt-4">
              <EmailSignup />
            </div>

            {/* Features */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
              {[
                "Authentic Spice Blend",
                "Premium Ingredients",
                "Royal Recipe",
              ].map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 text-sm font-body text-muted-foreground"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Hero Image */}
          <div 
            className="flex-1 flex justify-center items-center w-full max-w-xl lg:max-w-2xl"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative float">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-3xl border-2 border-primary/20 -rotate-3 scale-105" />
              <div className="absolute inset-0 rounded-3xl border-2 border-primary/10 rotate-3 scale-110" />
              
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl glow-gold">
                <img
                  src={heroImage}
                  alt="Premium Royal Chai with traditional spices"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 px-6 md:px-12 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-body text-muted-foreground">
          <p>© 2026 Royal Chai. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Made with tradition & love
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
