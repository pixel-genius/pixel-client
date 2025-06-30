import { IconProps } from "../types/types";
const Framericon = (props: IconProps) => {
  const { size = 24, color = "currentColor", ...resProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 10 16"
      fill="none"
      {...resProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.00004 5.317H10V0H0.092041V0.049L5.00004 5.317Z"
        fill="url(#paint0_linear_2009_2691)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 5.31702H0V10.634H9.909V10.585L5 5.31702Z"
        fill="url(#paint1_linear_2009_2691)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 10.634H4.955V16L0 10.634Z"
        fill="url(#paint2_linear_2009_2691)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2009_2691"
          x1="10.001"
          y1="2.658"
          x2="1.31204"
          y2="2.328"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8DE4FF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2009_2691"
          x1="9.909"
          y1="7.97602"
          x2="1.125"
          y2="7.97602"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00C5FF" />
          <stop offset="1" stopColor="#009AFF" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_2009_2691"
          x1="2.477"
          y1="10.634"
          x2="2.477"
          y2="16"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#005AFF" />
          <stop offset="1" stopColor="#008DFF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Framericon;
