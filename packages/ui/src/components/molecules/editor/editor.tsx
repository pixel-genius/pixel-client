"use client";

import { useEffect, useState } from "react";

import { cn } from "../../../lib/utils";
import { Textarea } from "../../atoms/textarea";

import { RichTextStylesProvider } from "@repo/ui/components/rich-text-style-provider";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import {
  // BubbleMenu,
  EditorContent,
  // FloatingMenu,
  useEditor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { cva } from "class-variance-authority";
import { LabelWraper } from "../label-wrapper";
import { EditorToolbar } from "./editor-toolbar";
// import { RichTextStylesProvider } from "@/components/providers/rich-text-style-provider";

interface RichTextEditorProps {
  value?: string;
  defaultValue?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: string, text: string) => void;
  className?: string;
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  error?: string;
  id?: string;
}
export const baseEditorInputVariants = cva(
  " pt-4 w-full bg-card rounded-md border border-border ring-offset-background file:border-0 file:bg-transparent  transition-shadow duration-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 text-sm file:text-sm placeholder:text-muted-foreground font-normal file:font-medium focus:ring-2 focus:ring-primary focus:ring-offset-2",
  {
    variants: {
      error: {
        true: "ring-2 ring-error focus-visible:ring-error focus-visible:ring-offset-2",
      },
    },
  },
);
export const RichTextEditor = ({
  value,
  defaultValue,
  onChange,
  className,
  label,
  helperText,
  error,
  id,
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
    content: value || defaultValue || "",

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
    <LabelWraper
      id={id}
      label={label}
      error={error}
      helperText={helperText}
      className={cn(className)}
    >
      <div
        className={cn(
          baseEditorInputVariants({ error: !!error }),
          "w-full rounded-lg border border-border bg-background p-1 shadow-sm",
        )}
      >
        {/* Toolbar */}
        <EditorToolbar
          editor={editor}
          setShowHtml={setShowHtml}
          showHtml={showHtml}
          setHtmlContent={setHtmlContent}
        />
        {/* Editor */}

        <div>
          <RichTextStylesProvider>
            <div
              className={cn(
                " flex min-h-[200px] flex-col bg-background ",

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
                  <RichTextStylesProvider>
                    <EditorContent className="p-2" editor={editor} />
                  </RichTextStylesProvider>
                </>
              )}
            </div>
          </RichTextStylesProvider>
        </div>
      </div>
    </LabelWraper>
  );
};
