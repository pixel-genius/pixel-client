import { LandingTabs } from "../_components/landing-tabs";

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

  return <LandingTabs defaultValue={tab} />;
}
