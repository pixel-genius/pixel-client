import { IconProps } from "./../types/types";

const PolygonIcon = (props: IconProps) => {
  const { size = 24, color = "currentColor", ...resProps } = props;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 140 154"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...resProps}
    >
      <path
        d="M57.909 3.9282C65.3346 -0.358984 74.4834 -0.358984 81.909 3.9282L127.191 30.0718C134.617 34.359 139.191 42.282 139.191 50.8564V103.144C139.191 111.718 134.617 119.641 127.191 123.928L81.909 150.072C74.4834 154.359 65.3346 154.359 57.909 150.072L12.627 123.928C5.20133 119.641 0.626953 111.718 0.626953 103.144V50.8564C0.626953 42.282 5.20133 34.359 12.627 30.0718L57.909 3.9282Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default PolygonIcon;
