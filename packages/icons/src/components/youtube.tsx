import { IconProps } from "../types/types";
const YouTubeIcon = (props: IconProps) => {
  const { size = 24, color = "currentColor", ...resProps } = props;

  return (
    <svg
      width="19"
      height="14"
      viewBox="0 0 19 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.0653 0.5H4.54208C2.47743 0.5 0.803711 2.17372 0.803711 4.23837V9.4989C0.803711 11.5635 2.47743 13.2373 4.54208 13.2373H15.0653C17.13 13.2373 18.8037 11.5635 18.8037 9.4989V4.23837C18.8037 2.17372 17.13 0.5 15.0653 0.5ZM12.5371 7.12457L7.61504 9.4721C7.48388 9.5347 7.33239 9.439 7.33239 9.2937V4.45195C7.33239 4.30459 7.48786 4.20908 7.61929 4.2757L12.5414 6.76996C12.6877 6.84411 12.6852 7.05398 12.5371 7.12457Z"
        fill="white"
        fill-opacity="0.7"
      />
    </svg>
  );
};

export default YouTubeIcon;
