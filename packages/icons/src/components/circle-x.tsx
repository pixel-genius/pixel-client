import { IconProps } from "../types/types";
const Circlxicon = (props: IconProps) => {
  const { size = 24, color = "currentColor", ...resProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...resProps}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M10 10l4 4m0 -4l-4 4" />
    </svg>
  );
};

export default Circlxicon;
