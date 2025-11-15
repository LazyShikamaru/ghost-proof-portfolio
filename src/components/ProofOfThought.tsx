import CaseStudy from "./CaseStudy";

const ProofOfThought = () => {
  const caseStudies = [
    {
      number: "01",
      title: "Simplifying a Complex Topic",
      strategy: "The goal was to explain 'liquid staking' to a non-technical audience. My approach was to use a simple analogy and break it down into a 12-part educational thread.",
      workExample: "Think of liquid staking like getting a receipt when you check your coat. You still own the coat, but now you have a ticket you can use while you wait. That ticket? It's your liquid staking token.",
      results: [
        "500k+ Impressions",
        "3 Industry Leader Retweets",
        "15% Increase in Community Questions"
      ]
    },
    {
      number: "02",
      title: "Building Authority Through Thought Leadership",
      strategy: "For a Series A DeFi protocol, we needed to establish the founder as a thought leader in the regulatory space. I crafted a series of LinkedIn articles that connected crypto innovation with real-world policy implications.",
      workExample: "The future of DeFi isn't about replacing traditional finance—it's about creating a bridge. Here's how smart regulation can accelerate adoption instead of hindering it...",
      results: [
        "Featured in 2 Industry Publications",
        "300% Increase in Executive-Level Connections",
        "Invitation to Speak at Major Conference"
      ]
    },
    {
      number: "03",
      title: "Turning Technical Docs Into Marketing Gold",
      strategy: "A top exchange needed to communicate their new trading features, but the engineering docs were impenetrable. I translated the technical specs into benefit-driven content that traders actually cared about.",
      workExample: "Stop losing money to slippage. Our new Smart Order Router automatically finds you the best price across 15 liquidity pools in milliseconds. Here's exactly how it saves you money...",
      results: [
        "40% Increase in Feature Adoption",
        "250+ Positive Community Comments",
        "Used as Template for Future Product Launches"
      ]
    }
  ];

  return (
    <section id="proof-of-thought" className="py-20 md:py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Proof of Thought
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Strategy-driven content that delivers measurable results
          </p>
        </div>

        <div className="grid gap-12 md:gap-16">
          {caseStudies.map((study) => (
            <CaseStudy key={study.number} {...study} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofOfThought;
