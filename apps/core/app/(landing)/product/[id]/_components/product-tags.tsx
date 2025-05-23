import { Chip } from "@repo/ui/components";

const tags = [
  "Movie",
  "Design",
  "UI",
  "Dashboard",
  "Admin",
  "Finance",
  "Web",
  "App",
];

export const ProductTags = () => {
  return (
    <div className="flex flex-wrap gap-2 items-center pb-6">
      {tags.map((tag, index) => (
        <Chip key={index} variant="secondary" size="md">
          #{tag}
        </Chip>
      ))}
    </div>
  );
}; 