import { IconCheck } from "@tabler/icons-react";

import { Typography } from "@repo/ui/components/atoms/typography";

const HighlightItem = ({ text }: { text: string }) => (
  <div className="bg-gray-800 rounded-2xl p-4">
    <div className="flex gap-2 p-2 items-center">
      <div className="bg-green-700 border-white border-2 rounded-full p-1">
        <IconCheck size={24} />
      </div>
      <Typography variant="label/sm" weight="light">
        {text}
      </Typography>
    </div>
  </div>
);

const highlights = [
  "Fully Organized Layers",
  "Responsive Design",
  "Customizable Components",
  "Well Documented",
];

export const ProductHighlights = () => {
  return (
    <div className="w-[30%]">
      <Typography variant="heading/md" weight="bold" className="pb-6">
        Highlights You Can't Miss
      </Typography>
      <div className="flex flex-col gap-2">
        {highlights.map((highlight, index) => (
          <HighlightItem key={index} text={highlight} />
        ))}
      </div>
    </div>
  );
};
