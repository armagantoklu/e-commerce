import en from "./en.json";
import tr from "./tr.json";

type LanguageMessages = typeof en;

interface LangListType {
  [key: string]: LanguageMessages;
}

export const LangList: LangListType = {
  en: en,
  tr: tr,
};
