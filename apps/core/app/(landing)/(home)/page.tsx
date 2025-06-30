import { LandingPage } from "../_components/landing-page";

// ISR 60s
export const revalidate = 60;

export default function Page() {
  return <LandingPage tab="/" />;
}
