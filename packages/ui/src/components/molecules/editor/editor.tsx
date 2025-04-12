"use client";

import { useEffect, useState } from "react";

import { cn } from "../../../lib/utils";
import { Textarea } from "../../atoms/textarea";

import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import {
  // BubbleMenu,
  EditorContent,
  InputRule,
  // FloatingMenu,
  useEditor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { EditorToolbar } from "./editor-toolbar";
import Link from "@tiptap/extension-link";
import { Input } from "../input";
import { Underline } from "lucide-react";
// import { RichTextStylesProvider } from "@/components/providers/rich-text-style-provider";

interface RichTextEditorProps {
  value?: string;
  defaultValue?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: string, text: string) => void;
  className?: string;
}

export const RichTextEditor = ({
  value,
  defaultValue,
  onChange,
  className,
}: RichTextEditorProps) => {
  const [showHtml, setShowHtml] = useState(false);
  const [htmlContent, setHtmlContent] = useState("");

  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      // Highlight,
      Image,
      Link,
      
    ],
    content: defaultValue || value || "",

    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      const text = editor.getText();

      if (text.trim() === "") {
        onChange?.("", "");
      } else {
        onChange?.(html, text);
      }
    },
  });

  const updateEditorFromHtml = () => {
    if (editor && showHtml) {
      editor.commands.setContent(htmlContent, false);
    }
  };

  useEffect(() => {
    if (editor && value !== undefined && value !== editor.getHTML()) {
      editor.commands.setContent(value);
    }
  }, [value, editor]);

  return (
    <div className="w-full rounded-lg border border-border bg-background p-4 shadow-sm">
      {/* Toolbar */}
      <EditorToolbar
        editor={editor}
        setShowHtml={setShowHtml}
        showHtml={showHtml}
        setHtmlContent={setHtmlContent}
      />
      {/* Editor */}
      <div>
        {/* <RichTextStylesProvider> */}
        <div
          className={cn(
            "mt-3 flex min-h-[200px] flex-col bg-background ",

            className,
          )}
        >
          {showHtml ? (
            <Textarea
              className="flex-1 border-none"
              value={htmlContent}
              onChange={(e) => {
                setHtmlContent(e.target.value);
                onChange?.(e.target.value, "");
              }} // Update state
              onBlur={updateEditorFromHtml} // Update editor on blur
            />
          ) : (
            <>
              <EditorContent className="p-3" editor={editor} />
            </>
          )}
        </div>
        {/* </RichTextStylesProvider> */}
      </div>
    </div>
  );
};
