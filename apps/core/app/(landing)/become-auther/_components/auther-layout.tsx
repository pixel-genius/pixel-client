import Image from "next/image";

export const AutherLayout = ({
  children,
  bgSrc,
}: {
  children: React.ReactNode;
  bgSrc: string;
}) => {
  return (
    <div>
      <Image
        src={bgSrc}
        alt="Description of the image for SEO"
        layout="fill"
        objectFit="cover"
        priority={true}
        className="z-[-2] !inset-unset !h-52 sm:!inset-0 sm:!h-full"
      />
      <div
        className="backdrop-blur-[1px] hidden sm:block w-full  sm:h-full absolute top-0 left-0 z-[-1]"
        style={{
          background:
            "linear-gradient(90deg, hsl(var(--background)) 0%, hsl(var(--background)) 39%, rgba(18, 25, 27, 0) 100%), linear-gradient(0deg, hsl(var(--background)) 0%, rgba(18, 25, 27, 0) 45%, rgba(18, 25, 27, 0) 100%)",
        }}
      ></div>

      <div
        className="backdrop-blur-sm  w-full block h-52 sm:hidden absolute top-0 left-0 z-[-1]"
        style={{
          background:
            " linear-gradient(0deg, hsl(var(--background)) 0%, rgba(18, 25, 27, 0.5) 45%, rgba(18, 25, 27, 0.1) 100%)",
        }}
      ></div>
      <div className="sm:w-1/2">{children}</div>
    </div>
  );
};
