import { IconProps } from "../types/types";

const MessegeIcon = (props: IconProps) => {
  const { size = 20, color = "currentColor", ...resProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      {...resProps}
    >
      <path
        d="M6.66667 8.16667H13.3333M6.66667 11.5H11.6667M7.5 15.6667H5C4.33696 15.6667 3.70107 15.4033 3.23223 14.9344C2.76339 14.4656 2.5 13.8297 2.5 13.1667V6.5C2.5 5.83696 2.76339 5.20107 3.23223 4.73223C3.70107 4.26339 4.33696 4 5 4H15C15.663 4 16.2989 4.26339 16.7678 4.73223C17.2366 5.20107 17.5 5.83696 17.5 6.5V13.1667C17.5 13.8297 17.2366 14.4656 16.7678 14.9344C16.2989 15.4033 15.663 15.6667 15 15.6667H12.5L10 18.1667L7.5 15.6667Z"
        stroke="#A1A1AA"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MessegeIcon;
