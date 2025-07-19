import { IconProps } from "../types/types";

const CursorIcon = (props: IconProps) => {
  const { size = 24, color = "currentColor", ...resProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="45"
      viewBox="0 0 42 45"
      fill="none"
    >
      <g filter="url(#filter0_d_1279_2436)">
        <path d="M12 36L5 4L34.5 20.5L20.5 23.5L12 36Z" fill={color} />
        <path
          d="M12 36L5 4L34.5 20.5L20.5 23.5L12 36Z"
          stroke="white"
          strokeWidth="3"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1279_2436"
          x="0.322021"
          y="0.563171"
          width="40.8826"
          height="43.6636"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="1.25" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.19 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1279_2436"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1279_2436"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default CursorIcon;
