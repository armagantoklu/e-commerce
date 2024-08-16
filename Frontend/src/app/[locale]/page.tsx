import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("common")
  return (
    <div>
      <p className="font-bold">{t('hi')}</p>
    </div>
  );
}
