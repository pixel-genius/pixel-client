import { LandingTabs } from "./landing-tabs";

export const LandingPage = ({ tab = "/" }: { tab: string }) => {
  return <LandingTabs defaultValue={tab} />;
};
