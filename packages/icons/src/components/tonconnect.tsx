import { IconProps } from "../types/types";
const Tonconnecticon = (props: IconProps) => {
  const { size = 24, color = "currentColor", ...resProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 34 33"
      fill="none"
    >
      <g clip-path="url(#clip0_3381_24285)">
        <path
          d="M17 33C26.1127 33 33.5 25.6127 33.5 16.5C33.5 7.38729 26.1127 0 17 0C7.88729 0 0.5 7.38729 0.5 16.5C0.5 25.6127 7.88729 33 17 33Z"
          fill="#0098EA"
        />
        <path
          d="M22.6335 9.20923H11.3654C9.29359 9.20923 7.98043 11.4441 9.02275 13.2508L15.977 25.3045C16.4308 26.0916 17.5681 26.0916 18.0219 25.3045L24.9776 13.2508C26.0185 11.447 24.7054 9.20923 22.635 9.20923H22.6335ZM15.9714 21.6898L14.4569 18.7586L10.8025 12.2227C10.5614 11.8043 10.8591 11.2683 11.364 11.2683H15.97V21.6912L15.9714 21.6898ZM23.1937 12.2212L19.5407 18.76L18.0262 21.6898V11.2668H22.6321C23.137 11.2668 23.4347 11.8029 23.1937 12.2212Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_3381_24285">
          <rect
            width="34"
            height="33"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Tonconnecticon;
