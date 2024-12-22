import { IconProps } from "../types/types";

const AttachmentIcon = (props: IconProps) => {
  const { width = 37, height = 30, color = "#fff", ...resProps } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 37 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...resProps}
    >
      <path
        d="M24.395 21.1732L18.296 15.0742L12.197 21.1732"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.2961 15.0742V28.797"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.0887 24.8174C32.5759 24.0067 33.7507 22.7238 34.4277 21.1712C35.1048 19.6186 35.2455 17.8847 34.8277 16.2433C34.4099 14.6018 33.4574 13.1462 32.1205 12.1062C30.7835 11.0663 29.1383 10.5011 27.4445 10.5H25.5234C25.0618 8.71488 24.2016 7.05761 23.0074 5.65279C21.8132 4.24798 20.3161 3.13216 18.6286 2.38924C16.9411 1.64631 15.1071 1.29561 13.2645 1.3635C11.422 1.43138 9.61877 1.91609 7.9905 2.78119C6.36223 3.64628 4.95126 4.86924 3.86367 6.35813C2.77608 7.84702 2.04017 9.56309 1.71127 11.3773C1.38236 13.1916 1.46902 15.0568 1.96473 16.8327C2.46044 18.6086 3.3523 20.2491 4.57326 21.6307"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.395 21.1732L18.296 15.0742L12.197 21.1732"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AttachmentIcon;
