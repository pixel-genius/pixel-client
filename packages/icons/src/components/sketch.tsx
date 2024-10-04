import { IconProps } from "../types/types";
const Sketchicon = (props: IconProps) => {
  const { size = 24, color = "currentColor", ...resProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      {...resProps}
    >
      <g clipPath="url(#clip0_1279_2364)">
        <path
          d="M3.24 5.92101L8 15.25L0 5.92001L3.24 5.92101Z"
          fill="#EA6C00"
        />
        <path
          d="M12.76 5.92101L8 15.25L16 5.92001L12.76 5.92101Z"
          fill="#EA6C00"
        />
        <path
          d="M3.23999 5.92101H12.759L7.99999 15.25L3.23999 5.92101Z"
          fill="#FDAD00"
        />
        <path
          d="M7.99999 0.75L3.49099 1.227L3.23999 5.92L7.99999 0.75Z"
          fill="#FDD231"
        />
        <path d="M8 0.75L12.509 1.227L12.76 5.92L8 0.75Z" fill="#FDD231" />
        <path
          d="M16 5.91999L12.509 1.22699L12.76 5.91999H16ZM0 5.91999L3.491 1.22699L3.241 5.91999H0Z"
          fill="#FDAD00"
        />
        <path
          d="M7.99999 0.75L3.23999 5.92H12.759L7.99999 0.75Z"
          fill="#FEEEB7"
        />
      </g>
      <defs>
        <clipPath id="clip0_1279_2364">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Sketchicon;
