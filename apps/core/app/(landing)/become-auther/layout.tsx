import { ReactNode } from "react";

export default function BecomeAuthorLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-full flex flex-col">
      <div className="relative z-10 bg-background pb-6 flex-1 min-h-screen">
        <div className="w-40 h-40 bg-primary rounded-full absolute opacity- blur-3xl"></div>
        <div className="w-[300px] opacity-40 h-[300px] bg-primary right-0  rounded-full absolute opacity- blur-3xl"></div>
               
        {children}
      </div>
    </div>
  );
} 