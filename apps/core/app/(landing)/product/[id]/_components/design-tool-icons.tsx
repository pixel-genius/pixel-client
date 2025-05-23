import Figmaicon from "@repo/icons/figma";
import Adobexdicon from "@repo/icons/adobexd";
import Sketchicon from "@repo/icons/sketch";

const DesignToolIcon = ({
  icon: Icon,
  size = 16,
}: {
  icon: React.ComponentType<{ size?: number }>;
  size?: number;
}) => (
  <div className="flex justify-center items-center bg-background rounded-full p-1.5">
    <Icon size={size} />
  </div>
);

export const DesignToolIcons = () => {
  return (
    <div className="flex items-center">
      <div className="border rounded-full">
        <DesignToolIcon icon={Figmaicon} />
      </div>
      <div className="-ml-2 border rounded-full">
        <DesignToolIcon icon={Adobexdicon} />
      </div>
      <div className="-ml-2 border rounded-full">
        <DesignToolIcon icon={Sketchicon} />
      </div>
    </div>
  );
}; 