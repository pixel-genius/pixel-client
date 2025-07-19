import { LandingHeroSection } from "./_components/landing-hero-section";
import { LandingBackground } from "./_components/landing-background";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container">
      {/* Landing Background */}
      <LandingBackground />

      {/* Landing Hero Section - Header */}
      <div className="md:mb-24 mb-16  md:mt-48 mt-24">
        <LandingHeroSection />
      </div>

      {/* Landing Tabs */}
      {children}
    </div>
  );
};

export default Layout;
