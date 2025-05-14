"use client";

import { useEffect } from "react";

export const StartMSW = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      import("@/mocks/browser/start");
    }
  }, []);

  return null;
};
