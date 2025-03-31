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

      <Separator orientation="vertical" className="h-6 bg-gray-300" />

      {/* to do normal text */}

      <Separator orientation="vertical" className="h-6 bg-gray-300" />

      <EditorToolbarButton
        disabled={showHtml}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        isActive={editor.isActive("bulletList")}
        icon={List}
        label="Bullet List"
      />

      <Separator orientation="vertical" className="h-6 bg-gray-300" />

      {/* to  do color text */}

      <Separator orientation="vertical" className="h-6 bg-gray-300" />

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
      <EditorToolbarButton
        disabled={showHtml}
        onClick={() => editor.chain().focus().toggleMark("underline").run()}
        isActive={editor.isActive("italic")}
        icon={Underline}
        label="Underline"
      />
      <EditorToolbarButton
        disabled={showHtml}
        onClick={() => editor.chain().focus().toggleStrike().run()}
        isActive={editor.isActive("strike")}
        icon={Strikethrough}
        label="Strike"
      />

      <Separator orientation="vertical" className="h-6 bg-gray-300" />

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
