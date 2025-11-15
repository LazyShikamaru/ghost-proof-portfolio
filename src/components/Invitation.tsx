import { Button } from "@/components/ui/button";

const Invitation = () => {
  return (
    <section className="py-20 md:py-32 px-6 bg-background">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
          Ready to Build Your Authority?
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          If you're ready to move beyond just "getting words out" and start building a real strategic presence, I'm here to help.
        </p>
        <Button 
          asChild
          size="lg" 
          className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
        >
          <a href="mailto:hello@example.com">Let's Start a Conversation</a>
        </Button>
      </div>
    </section>
  );
};

export default Invitation;
