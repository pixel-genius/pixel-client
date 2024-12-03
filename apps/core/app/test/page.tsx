"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

// Add Suspense to the root of your app to avoid layout shifting

function SearchBar() {
  const searchParams = useSearchParams();

  const search = searchParams.get("search");

  // URL -> `/dashboard?search=my-project`
  // `search` -> 'my-project'
  return <>Search: {search}</>;
}

const TestPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchBar />
    </Suspense>
  );
};

export default TestPage;
