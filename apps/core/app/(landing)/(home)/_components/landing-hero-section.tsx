import { Typography } from "@repo/ui/components/atoms/typography";
import { SearchBox } from "../../_components/search-box";

export const LandingHeroSection = () => {
  return (
    <main>
      <article className="flex gap-4">
        {/* Left Section */}
        <section className="flex flex-col gap-4">
          <div>
            <Typography
              variant="display/sm"
              weight="bold"
              component="h1"
              className="text-primary"
            >
              PixelGenius
            </Typography>
            <Typography variant="display/sm" weight="normal" className="h2">
              Marketplace for Digital Creators
            </Typography>
          </div>
          <Typography
            weight="normal"
            className="text-muted-foreground"
            component="p"
            variant="label/sm"
          >
            A curated space to discover high-quality digital assets Buy
            ready-to-use UI kits, templates and 3D resources Or share and sell
            your own work with a creative global audience
          </Typography>

          <SearchBox className="w-full" />
        </section>
        {/* Right Section */}
        <div className="w-full flex items-center justify-center">
          <Typography
            variant="display/sm"
            weight="bold"
            className="h2 opacity-30"
          >
            Coming Soon
          </Typography>
        </div>
      </article>
    </main>
  );
};
