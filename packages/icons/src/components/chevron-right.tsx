import { IconProps } from "../types/types";

const Chevronrighticon = (props: IconProps) => {
  const { size = 24, color = "currentColor", ...resProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      {...resProps}
    >
      <path
        d="M9 6L15 12L9 18"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Chevronrighticon;
