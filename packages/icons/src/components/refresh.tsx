import { IconProps } from "./../types/types";

const Refresh = (props: IconProps) => {
  const { size = 24, color = "currentColor", ...resProps } = props;

  return (
    <svg
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M43 20.4998C42.3886 16.1003 40.3477 12.0239 37.1916 8.89849C34.0355 5.77308 29.9394 3.77205 25.5342 3.20364C21.129 2.63522 16.6591 3.53096 12.813 5.75287C8.96695 7.97478 5.95812 11.3996 4.25 15.4998M3 5.49975V15.4998H13M3 25.4997C3.6114 29.8992 5.65233 33.9756 8.8084 37.101C11.9645 40.2264 16.0606 42.2274 20.4658 42.7958C24.871 43.3643 29.3409 42.4685 33.187 40.2466C37.033 38.0247 40.0419 34.5999 41.75 30.4997M43 40.4997V30.4997H33"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Refresh;
