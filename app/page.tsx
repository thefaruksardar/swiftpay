import Feature from "@/components/feature";
import HeroSection from "@/components/heroSection";
import Mission from "@/components/mission";
import Plan from "@/components/plan";
import Steps from "@/components/steps";
import Tryit from "@/components/tryit";
import Whyus from "@/components/why-us";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Feature />
      <Whyus />
      <Steps />
      <Mission />
      <Plan />
      <Tryit />
    </>
  );
}
