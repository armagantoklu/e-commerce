import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Login() {
  const t = useTranslations("common");
  return (
    <div>
      <Link href={"/armagan"}>armagan</Link>
      <p className="font-bold">{t("hi")} Login</p>
    </div>
  );
}
