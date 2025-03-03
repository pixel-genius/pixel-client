"use client";
import MultiSelect from "@repo/ui/components/multi-select";

export default function Page() {
  const frameworksList = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ];

  return (
    <div style={{ marginTop: "10rem", maxWidth: "400px" }}>
      <MultiSelect
        options={frameworksList}
        onValueChange={(value) => {
          console.log(value);
        }}
        placeholder="Select options"
        variant="inverted"
        animation={2}
      />
    </div>
  );
}
