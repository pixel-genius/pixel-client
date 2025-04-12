import { Editor } from "@tiptap/react";

import {
  Bold,
  Italic,
  Link2Off,
  List,
  ListOrdered,
  Quote,
  Redo,
  Strikethrough,
  Underline,
  Undo,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading6,
  Heading5,
  ChevronsLeftRightEllipsis,
  Code,
} from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { Separator } from "./../../atoms/separator";
import { EditorToolbarButton } from "./editor-toolbar-button";
import { EditorToolbarImage } from "./editor-toolbar-image";
import { EditorToolbarViewHtml } from "./editor-toolbar-view-html";
import { EditorToolbarSetLink } from "./editor-toolbar-view-set-link";

export interface ToolbarProps {
  editor: Editor | null;
  showHtml: boolean;
  setShowHtml: Dispatch<SetStateAction<boolean>>;
  setHtmlContent: Dispatch<SetStateAction<string>>;
}

export const EditorToolbar = ({
  editor,
  setShowHtml,
  showHtml,
  setHtmlContent,
}: ToolbarProps) => {
  if (!editor) return null;

  return (
    <div className="flex flex-wrap gap-2 rounded-md  p-2 shadow">
      {/* Typography */}
      <EditorToolbarButton
        disabled={showHtml}
        onClick={() => editor.chain().focus().undo().run()}
        isActive={false}
        icon={Undo}
        label="Undo"
      />
      <EditorToolbarButton
        disabled={showHtml}
        onClick={() => editor.chain().focus().redo().run()}
        isActive={false}
        icon={Redo}
        label="Redo"
      />

      {/* to do normal text */}

      <EditorToolbarButton
        disabled={showHtml}
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        isActive={editor.isActive("Heading1")}
        icon={Heading1}
        label="heading 1"
      />
      <EditorToolbarButton
        disabled={showHtml}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        isActive={editor.isActive("heading2")}
        icon={Heading2}
        label="heading 2"
      />
      <EditorToolbarButton
        disabled={showHtml}
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        isActive={editor.isActive("heading3")}
        icon={Heading3}
        label="heading 3"
      />
      <EditorToolbarButton
        disabled={showHtml}
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        isActive={editor.isActive("heading4")}
        icon={Heading4}
        label="heading 4"
      />
      <EditorToolbarButton
        disabled={showHtml}
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        isActive={editor.isActive("heading5")}
        icon={Heading5}
        label="heading 5"
      />
      <EditorToolbarButton
        disabled={showHtml}
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        isActive={editor.isActive("heading6")}
        icon={Heading6}
        label="heading 5"
      />

      {/* to  do color text */}
      {/* <input
        type="color"
        onInput={(event) =>
          editor.chain().focus().setColor(event.target.value).run()
        }
        value={editor.getAttributes("textStyle").color}
        data-testid="setColor"
      /> */}

      <EditorToolbarButton
        disabled={showHtml}
        onClick={() => editor.chain().focus().toggleBold().run()}
        isActive={editor.isActive("bold")}
        icon={Bold}
        label="Bold"
      />
      <EditorToolbarButton
        disabled={showHtml}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        isActive={editor.isActive("italic")}
        icon={Italic}
        label="Italic"
      />

      {/* to do underline text */}
      {/* <EditorToolbarButton
        disabled={showHtml}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        isActive={editor.isActive("underline") ? "is-active" : ""}
        icon={Underline}
        label="Underline"
      /> */}

      <EditorToolbarButton
        disabled={showHtml}
        onClick={() => editor.chain().focus().toggleStrike().run()}
        isActive={editor.isActive("strike")}
        icon={Strikethrough}
        label="Strike"
      />
      {/* to do code text */}
      <EditorToolbarButton
        disabled={showHtml}
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        isActive={editor.isActive("codeBlock")}
        icon={ChevronsLeftRightEllipsis}
        label="Strike"
      />

      <EditorToolbarButton
        disabled={showHtml}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        isActive={editor.isActive("orderedList")}
        icon={ListOrdered}
        label="Ordered List"
      />
      <EditorToolbarButton
        disabled={showHtml}
        onClick={() => editor.chain().focus().toggleCode().run()}
        isActive={editor.isActive("code")}
        icon={Code}
        label="Code"
      />
    </div>
  );
};
