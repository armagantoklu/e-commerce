import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { useEffect } from "react";
export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body>
        <div className="grid grid-cols-6  lg:grid-cols-12">
          <NextIntlClientProvider messages={messages}>
            <div className="h-screen col-span-1  lg:col-span-2 ">
              <Sidebar />
            </div>
            <div className="h-screen col-span-5  lg:col-span-10 flex flex-col justify-between">
              <Navbar />
              {children}
              <Footer />
            </div>
          </NextIntlClientProvider>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}
