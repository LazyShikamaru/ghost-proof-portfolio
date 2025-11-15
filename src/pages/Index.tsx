import Hero from "@/components/Hero";
import AuthorityBar from "@/components/AuthorityBar";
import ProofOfThought from "@/components/ProofOfThought";
import Process from "@/components/Process";
import Invitation from "@/components/Invitation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AuthorityBar />
      <ProofOfThought />
      <Process />
      <Invitation />
    </div>
  );
};

export default Index;
