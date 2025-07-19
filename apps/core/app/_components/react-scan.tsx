"use client";

import { JSX, useEffect } from "react";

export function ReactScan(): JSX.Element {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      import("react-scan").then(({ scan }) => {
        scan({
          enabled: true,
        });
      });
    }
  }, []);

  return <></>;
}
