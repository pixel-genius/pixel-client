import { LandingHeroSection } from "./_components/landing-hero-section";
import { LandingBackground } from "./_components/landing-background";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container">
      {/* Landing Background */}
      <LandingBackground />

      {/* Landing Hero Section - Header */}
      <LandingHeroSection />

      {/* Landing Tabs */}
      {children}
    </div>
  );
};

export default Layout;
