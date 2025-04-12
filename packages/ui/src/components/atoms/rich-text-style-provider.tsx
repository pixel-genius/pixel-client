import { PropsWithChildren } from "react";

export const RichTextStylesProvider = ({ children }: PropsWithChildren) => {
  return (
    // INFO: "prose" class has max-width and we should remove it by max-w-none
    <div className="prose prose-sm max-w-none prose-h2:mb-1 prose-h2:mt-1 prose-h3:mt-1 prose-h4:mt-1 prose-p:my-0 prose-p:mb-1  prose-ul:my-1 prose-ul:list-none prose-ul:pl-1 prose-hr:my-5 prose:text-froground dark:prose-invert">
      {children}
    </div>
  );
};
