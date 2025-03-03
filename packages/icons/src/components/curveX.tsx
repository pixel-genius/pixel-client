import { IconProps } from "../types/types";
const CurveXicon = (props: IconProps) => {
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
      <path
        d="M6.66699 6.66675L9.33366 9.33341M9.33366 6.66675L6.66699 9.33341"
        stroke="#FAFAFA"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 2C12.8 2 14 3.2 14 8C14 12.8 12.8 14 8 14C3.2 14 2 12.8 2 8C2 3.2 3.2 2 8 2Z"
        stroke="#FAFAFA"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CurveXicon;
