"use client";

import { worker } from "@/mocks/browser";
import "./globals.css";
import { ReactNode, useEffect } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      worker.start();
    }
  }, []);

  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
