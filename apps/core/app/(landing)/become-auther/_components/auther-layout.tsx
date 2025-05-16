import Image from "next/image";

export const AutherLayout = ({
  children,
  bgSrc,
}: {
  children: React.ReactNode;
  bgSrc?: string;
}) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};
