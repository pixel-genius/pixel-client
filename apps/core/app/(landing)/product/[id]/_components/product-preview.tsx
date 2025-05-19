import { Typography } from "@repo/ui/components";

export const ProductPreview = () => {
  return (
    <div>
      <Typography
        variant="heading/xxl"
        weight="bold"
        className="pb-14 text-center"
      >
        Quick look at the product's key features and design elements.
      </Typography>
      <div className="w-[1350px] h-[553px] bg-gray-500 rounded-xl mb-6">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/2xMbGv9uGXg?si=fgHwwHsTkxWBntwQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}; 