import { LandingTabs } from "./_components/landing-tabs";

export const revalidate = 60;

export default function Page() {
  return <LandingTabs defaultValue="/" />;
}
