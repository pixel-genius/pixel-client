/* eslint-disable no-restricted-imports */
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRef } from 'react';
import { EditorToolbarButton } from './editor-toolbar-button';
import { ImageIcon } from 'lucide-react';
import { ToolbarProps } from './editor-toolbar';
import { toast } from 'sonner';

const useUploadImage = (editor: any) => {
  return useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData();
      formData.append('file', file);

      const response = await axios.post('/api/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      return response.data; // Returns { imageUrl }
    },
    onSuccess: (data) => {
      if (data.imageUrl) {
        editor?.chain().focus().setImage({ src: data.imageUrl }).run();
      }
    },
    onError: (error) => {
      toast.error(error.message ?? "Can't upload image");
    }
  });
};

export const EditorToolbarImage = ({
  editor,
  showHtml
}: Pick<ToolbarProps, 'editor' | 'showHtml'>) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { mutate: uploadImage } = useUploadImage(editor);

  return (
    <div>
      <EditorToolbarButton
        disabled={showHtml}
        onClick={() => fileInputRef.current?.click()}
        isActive={false}
        icon={ImageIcon}
        label="Image"
      />
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        className="hidden"
        onChange={(e) => {
          if (e.target.files?.[0]) uploadImage(e.target.files[0]);
        }}
      />
    </div>
  );
};
