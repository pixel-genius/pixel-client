import { IconProps } from "../types/types";
const Messagecircleicon = (props: IconProps) => {
  const { size = 24, color = "currentColor", ...resProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      {...resProps}
    >
      <path
        d="M3.5 23.3333L5.01667 18.7833C2.30533 14.7735 3.353 9.59931 7.46667 6.68031C11.5803 3.76248 17.4883 4.00165 21.2858 7.24031C25.0833 10.4801 25.5967 15.7173 22.4863 19.4915C19.376 23.2656 13.6022 24.409 8.98333 22.1666L3.5 23.3333Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Messagecircleicon;
