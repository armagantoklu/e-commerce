import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("common")
  return (
    <div>
      <p className="font-bold">{t('hi')}</p>
    </div>
  );
}
