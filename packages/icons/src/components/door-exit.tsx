import { IconProps } from "../types/types";

const Doorexiticon = (props: IconProps) => {
  const { size = 24, color = "currentColor", ...resProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-door-exit"
      {...resProps}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M13 12v.01" />
      <path d="M3 21h18" />
      <path d="M5 21v-16a2 2 0 0 1 2 -2h7.5m2.5 10.5v7.5" />
      <path d="M14 7h7m-3 -3l3 3l-3 3" />
    </svg>
  );
};

export default Doorexiticon;
