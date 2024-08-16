"use client";
import Navbar from "@/components/navbar/Navbar";
import { useState } from "react";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { LangList } from "./../../../messages/LangList";
export default function Layout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const [dark, setDark] = useState<boolean>(false);
  const toggleTheme = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  console.log({locale});
  
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider
          locale={locale}
          timeZone="America/New_York"
          messages={LangList[locale]}
        >
          <button onClick={toggleTheme}>bas</button>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
