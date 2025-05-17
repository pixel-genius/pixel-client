import { IconProps } from "../types/types";

export const PixelZipIcon = (props: IconProps) => {
  const { size = 24, color = "currentColor", ...resProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 22 28"
      fill="none"
      {...resProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.9987 0.769531H16.332L21.6654 6.10286V24.7695C21.6654 26.2423 20.4715 27.4362 18.9987 27.4362H2.9987C1.52594 27.4362 0.332031 26.2423 0.332031 24.7695V3.4362C0.332031 1.96344 1.52594 0.769531 2.9987 0.769531ZM15.2275 3.4362H2.9987V24.7695H18.9987V7.20743H15.2275V3.4362ZM5.66536 3.4362H8.33203V6.10286H5.66536V3.4362ZM8.33203 6.10286H10.9987V8.76953H8.33203V6.10286ZM5.66536 8.76953H8.33203V11.4362H5.66536V8.76953ZM8.33203 11.4362H10.9987V14.1029H8.33203V11.4362ZM6.9987 16.7695L8.33203 15.4362L9.66537 16.7695V22.1029H6.9987V16.7695Z"
        fill={color}
      />
    </svg>
  );
};
