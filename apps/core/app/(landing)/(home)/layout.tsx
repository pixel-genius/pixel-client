import { TextGenerateEffect } from "../_components/TextGenerateEffect";
import { BackgroundLanding } from "../_components/background-landing";

const words = `Find thousands of meticulously crafted resources by pixel geniuses to supercharge your creativity.`;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="container">
      {/* Background */}
      <BackgroundLanding />
      {/* Header */}
      <div className="md:pb-56  md:pt-48 pt-24">
        <TextGenerateEffect words={words} />
      </div>

      {children}
    </main>
  );
};

export default Layout;
