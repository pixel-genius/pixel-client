import { LandingPage } from "../../_components/landing-page";

export const revalidate = 60;

export default async function Page({
  params,
}: {
  params: Promise<{
    tab: string;
  }>;
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
}) {
  const { tab } = await params;

  console.log(tab);
  return <LandingPage tab={tab} />;
}
