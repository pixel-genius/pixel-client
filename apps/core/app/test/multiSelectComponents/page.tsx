"use client";

import { MultiSelect } from "@repo/ui/components/multi-select";
import Typography from "@repo/ui/components/typography";

const Page = () => {
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
    <div className="flex flex-col w-[50%] mx-auto mt-5 gap-5">
      <div>
        <Typography variant="label/md">Disabled</Typography>
        <MultiSelect id="1" options={frameworksList} disabled={true} />
      </div>
      <hr />
      <div>
        <Typography variant="label/md" className="mb-5">
          with label
        </Typography>
        <MultiSelect id="1" options={frameworksList} label="Multi Select" />
      </div>
      <hr />
      <div>
        <Typography variant="label/md" className="mb-5">
          loading state
        </Typography>
        <MultiSelect
          id="1"
          options={frameworksList}
          label="Multi Select"
          loading={true}
        />
      </div>
      <hr />
      <div>
        <Typography variant="label/md" className="mb-5">
          with default value
        </Typography>
        <MultiSelect
          id="1"
          options={frameworksList}
          label="Multi Select"
          defaultValue={["next.js"]}
        />
      </div>
      <hr />
      <div>
        <Typography variant="label/md" className="mb-5">
          without icon
        </Typography>
        <MultiSelect
          id="1"
          options={frameworksList}
          label="Multi Select"
          defaultValue={["next.js"]}
          noChevronIcon={true}
        />
      </div>
      <hr />
      <div>
        <Typography variant="label/md" className="mb-5">
          left side Icon
        </Typography>
        <MultiSelect
          id="1"
          options={frameworksList}
          iconSide="left"
          label="Multi Select"
          defaultValue={["next.js"]}
        />
      </div>
      <hr />
      <div>
        <Typography variant="label/md" className="mb-5">
          No Options
        </Typography>
        <MultiSelect
          id="1"
          options={[]}
          iconSide="left"
          label="Multi Select"
        />
      </div>
    </div>
  );
};

export default Page;
