"use client";

import CountdownLib, {
  CountdownProps,
  CountdownRendererFn,
} from "react-countdown";
import { forwardRef } from "react";

const renderer: CountdownRendererFn = ({ minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return null;
  } else {
    // Render a countdown with two digits for minutes and seconds
    return (
      <span>
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </span>
    );
  }
};

export const Countdown = forwardRef<CountdownLib, CountdownProps>((props, ref) => {
  return <CountdownLib ref={ref} renderer={renderer} {...props} />;
});

Countdown.displayName = "Countdown";
