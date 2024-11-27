import { Trash2 } from "lucide-react";
import { Button } from "../../../button";

interface AttachmentItemProps {
  name: string;
}
const AttachmentItem = (props: AttachmentItemProps) => {
  return (
    <div
      title={props.name}
      className="rounded-lg w-[60px] h-[60px] bg-white relative"
    >
      <Button className="p-0 flex justify-center items-center absolute top-0 bg-[#DC2626] right-0 w-[20px] h-[20px] rounded-sm hover:bg-[#DC2626]">
        <Trash2 color="#fff" size={14} />
      </Button>
    </div>
  );
};

export { AttachmentItem };
