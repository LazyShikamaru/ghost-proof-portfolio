import { Card, CardContent } from "@/components/ui/card";

interface CaseStudyProps {
  number: string;
  title: string;
  strategy: string;
  workExample: string;
  results: string[];
}

const CaseStudy = ({ number, title, strategy, workExample, results }: CaseStudyProps) => {
  return (
    <Card className="border-border bg-card hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-8 md:p-10 space-y-6">
        <div className="space-y-3">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            Case Study {number}: {title}
          </h3>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            {strategy}
          </p>
        </div>

        <div className="bg-secondary/50 rounded-lg p-6 border border-border">
          <p className="text-foreground italic text-sm md:text-base">
            "{workExample}"
          </p>
          <p className="text-xs text-muted-foreground mt-4">
            Example: First tweet of educational thread on liquid staking
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-accent">Results:</h4>
          <ul className="space-y-2">
            {results.map((result, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span className="text-muted-foreground">{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default CaseStudy;
