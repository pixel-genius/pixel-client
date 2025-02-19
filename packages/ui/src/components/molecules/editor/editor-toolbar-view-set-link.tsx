import { useState } from "react";
import { Link2 } from "lucide-react";
import { EditorToolbarButton } from "./editor-toolbar-button";
import { ToolbarProps } from "./editor-toolbar";
import { Popover, PopoverTrigger, PopoverContent } from "./../../atoms/popover";
import { Input } from "./../input";
import { Button } from "./../../atoms/button";

export const EditorToolbarSetLink = ({
  editor,
  showHtml,
}: Pick<ToolbarProps, "editor" | "showHtml">) => {
  const [url, setUrl] = useState("");
  const [open, setOpen] = useState(false);

  const onSubmit = () => {
    if (!editor || !url) return;
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
    setOpen(false);
    setUrl("");
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger>
        <EditorToolbarButton
          onClick={() => setOpen(true)}
          disabled={showHtml}
          isActive={false}
          icon={Link2}
          label="Set Link"
        />
      </PopoverTrigger>
      <PopoverContent className="poooopppper w-64 p-2">
        <Input
          type="url"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button className="mt-2 w-full" onClick={onSubmit}>
          Set Link
        </Button>
      </PopoverContent>
    </Popover>
  );
};
