import { Editor } from "@tiptap/react";
import {
  Bold,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Highlighter,
  Italic,
  List,
  ListOrdered,
  Quote,
  Redo,
  Strikethrough,
  Undo,
  Pilcrow,
  Minus,
  Link2Off,
} from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { EditorToolbarButton } from "./editor-toolbar-button";
import { EditorToolbarImage } from "./editor-toolbar-image";
import { EditorToolbarViewHtml } from "./editor-toolbar-view-html";
import { Separator } from "./../../atoms/separator";
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
    <div className="flex flex-wrap gap-2 rounded-md bg-muted p-2 shadow">
      {/* Typography */}
      <EditorToolbarButton
        disabled={showHtml}
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        isActive={editor.isActive("heading", { level: 1 })}
        icon={Heading1}
        label="H1"
      />
      <EditorToolbarButton
        disabled={showHtml}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        isActive={editor.isActive("heading", { level: 2 })}
        icon={Heading2}
        label="H2"
      />
      <EditorToolbarButton
        disabled={showHtml}
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        isActive={editor.isActive("heading", { level: 3 })}
        icon={Heading3}
        label="H3"
      />
      <EditorToolbarButton
        disabled={showHtml}
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        isActive={editor.isActive("heading", { level: 4 })}
        icon={Heading4}
        label="H4"
      />
      {/* <EditorToolbarButton
        disabled={showHtml}
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        isActive={editor.isActive('heading', { level: 5 })}
        icon={Heading5}
        label="H5"
      />
      <EditorToolbarButton
        disabled={showHtml}
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        isActive={editor.isActive('heading', { level: 6 })}
        icon={Heading6}
        label="H6"
      /> */}
      <EditorToolbarButton
        disabled={showHtml}
        onClick={() => editor.chain().focus().setParagraph().run()}
        isActive={false}
        icon={Pilcrow}
        label="p"
      />

      <Separator orientation="vertical" className="h-6 bg-gray-300" />

      <EditorToolbarButton
        disabled={showHtml}
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        isActive={false}
        icon={Minus}
        label="seperator"
      />

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
      <EditorToolbarButton
        disabled={showHtml}
        onClick={() => editor.chain().focus().toggleStrike().run()}
        isActive={editor.isActive("strike")}
        icon={Strikethrough}
        label="Strike"
      />
      {/* <EditorToolbarButton
        disabled={showHtml}
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        isActive={editor.isActive("highlight")}
        icon={Highlighter}
        label="Highlight"
      /> */}

      <Separator orientation="vertical" className="h-6 bg-gray-300" />

      <EditorToolbarButton
        disabled={showHtml}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        isActive={editor.isActive("bulletList")}
        icon={List}
        label="Bullet List"
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
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        isActive={editor.isActive("blockquote")}
        icon={Quote}
        label="Blockquote"
      />

      <Separator orientation="vertical" className="h-6 bg-gray-300" />

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
      <Separator orientation="vertical" className="h-6 bg-gray-300" />

      <EditorToolbarImage editor={editor} showHtml={showHtml} />

      <EditorToolbarSetLink editor={editor} showHtml={showHtml} />

      <EditorToolbarButton
        onClick={() =>
          editor.chain().focus().extendMarkRange("link").unsetLink().run()
        }
        isActive={editor.isActive("link")}
        icon={Link2Off}
        label="Remove Link"
      />

      <Separator orientation="vertical" className="h-6 bg-gray-300" />

      <EditorToolbarViewHtml
        editor={editor}
        showHtml={showHtml}
        setHtmlContent={setHtmlContent}
        setShowHtml={setShowHtml}
      />
    </div>
  );
};
