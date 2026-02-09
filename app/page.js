import CompassHero from "@/components/CompassHero";
import RainingCustomers from "@/components/RainingCustomers";
import OfficeGlobe from "@/components/OfficeGlobe";
import CallToAction from "@/components/CallToAction";
import AboutUsSection from "@/components/AboutUsSection";
import HowWeWork from "@/components/HowWeWork";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      
      {/* Hero Section */}
      <CompassHero />
      {/* About Us */}
      <AboutUsSection />
      <HowWeWork />
      {/* Office Globe */}
      <OfficeGlobe/>

      {/* Raining Customers */}
      <RainingCustomers />

      {/* Call to Action */}
      <CallToAction />
    </main>
  );
}
