const Process = () => {
  const steps = [
    {
      title: "Deep Dive & Discovery",
      description: "I start by understanding your goals, your audience, and your unique voice."
    },
    {
      title: "Strategic Framing",
      description: "Next, we develop the core narrative and content angles designed to achieve your specific objective."
    },
    {
      title: "Content Execution & Distribution",
      description: "Finally, I craft and deliver the content, optimized for the target platform."
    }
  ];

  return (
    <section className="py-20 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            My Process: Strategy Before Words
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="space-y-4 text-center md:text-left">
              <div className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full font-bold text-sm">
                Step {index + 1}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                {step.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
