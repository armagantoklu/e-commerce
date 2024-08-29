import { Pathnames, LocalePrefix } from "next-intl/routing";

export const defaultLocale = "en" as const;
export const locales = ["en", "tr"] as const;

export const pathnames: Pathnames<typeof locales> = {
  "/": "/",

  "/login": {
    en: "/login",
    tr: "/giris-yap",
  },
  "/register": {
    en: "/register",
    tr: "/kayit-ol",
  },
};

export const localePrefix: LocalePrefix<typeof locales> = "always";

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;
