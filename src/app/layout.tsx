"use client";

import { Toaster } from "@/components/ui/sonner";
import { StartMSW } from "./components/StartMSW";
import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <StartMSW />
        {children}
        <Toaster
          richColors
          position="bottom-center"
          closeButton
          duration={5000}
        />
      </body>
    </html>
  );
}
