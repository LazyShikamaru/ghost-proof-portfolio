const AuthorityBar = () => {
  const clients = [
    "Series A DeFi Protocol",
    "Top 5 Crypto Exchange",
    "VC-Backed Founder",
    "Leading Web3 Platform"
  ];

  return (
    <section className="border-y border-border bg-secondary/30 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Trusted By:
          </span>
          {clients.map((client, index) => (
            <span 
              key={index} 
              className="text-sm md:text-base text-foreground font-medium"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthorityBar;
