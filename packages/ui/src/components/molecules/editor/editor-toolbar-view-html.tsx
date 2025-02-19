import { Eye } from 'lucide-react';
import { ToolbarProps } from './editor-toolbar';
import { EditorToolbarButton } from './editor-toolbar-button';

export const EditorToolbarViewHtml = ({
  editor,
  showHtml,
  setShowHtml,
  setHtmlContent
}: ToolbarProps) => {
  const toggleHtmlView = () => {
    if (!editor) return;
    setShowHtml((prev) => !prev);
    if (!showHtml) {
      setHtmlContent(editor.getHTML()); // Get latest HTML before switching
    }
  };

  return (
    <EditorToolbarButton
      onClick={toggleHtmlView}
      isActive={showHtml}
      icon={Eye} // Lucide React Icon
      label={showHtml ? 'Show Editor' : 'Show HTML'}
    />
  );
};
