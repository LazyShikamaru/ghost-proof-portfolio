import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProof = () => {
    document.getElementById('proof-of-thought')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-background">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-foreground">
          I Help <span className="text-accent">DeFi Founders</span> Build Trust Through Strategic Content
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
          From complex whitepapers to high-engagement Twitter threads that drive results.
        </p>
        <Button 
          onClick={scrollToProof}
          size="lg" 
          className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          See My Thinking
        </Button>
      </div>
    </section>
  );
};

export default Hero;
