import { FoundationColor } from "@repo/ui/components/foundation-color";
import { Input } from "@repo/ui/components/input";
import Typography from "@repo/ui/components/typography";

const Page = () => {
  return (
    <div className="container flex flex-wrap  gap-6 min-h-screen w-full  justify-center  p-10">
     
     {/* Input */}
     
      <div>
        <Typography variant="heading/xs">Foundation Input</Typography>
        <div className="bg-card p-4 px-8 rounded flex gap-10">
          <div className="flex flex-col items-center  gap-4  justify-evenly">
            <Input placeholder="Placeholder size: sm" size="sm" />
            <Input label="label" placeholder="Placeholder size: md" size="md" />
            <Input
              placeholder="Placeholder size: lg"
              helperText="Helper Text"
              size="lg"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <Input
              label="Label"
              helperText="Helper Text"
              placeholder="Placeholder size: sm"
              size="sm"
            />
            <Input
              label="Label"
              helperText="Helper Text"
              placeholder="Placeholder size: md"
              size="md"
              error="Error Message"
            />
            <Input
              label="Label"
              helperText="Helper Text"
              placeholder="Placeholder size: lg"
              size="lg"
              error="Error Message"
            />
          </div>
        </div>
      </div>

      <FoundationColor />
    </div>
  );
};

export default Page;
