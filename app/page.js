import CompassHero from "@/components/sections/CompassHero";
import RainingCustomers from "@/components/sections/RainingCustomers";
import OfficeGlobe from "@/components/sections/OfficeGlobe";
import CallToAction from "@/components/sections/CallToAction";
import AboutUsSection from "@/components/sections/AboutUsSection";
import HowWeWork from "@/components/sections/HowWeWork";
import ExpertiseSection from "@/components/sections/ExpertiseSection";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <CompassHero />
      <ExpertiseSection />
      <AboutUsSection />
      <HowWeWork />
      <OfficeGlobe />
      <RainingCustomers />
      <CallToAction />
    </main>
  );
}
