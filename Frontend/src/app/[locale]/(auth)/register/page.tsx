import RegisterForm from "@/components/RegisterForm";
import { useTranslations } from "next-intl";

export default function Register() {
  const t = useTranslations("common");

  return (
    <div className="flex flex-col lg:flex-row items-center w-full justify-around h-screen">
      <img
        className="w-1/6 lg:w-2/6"
        src="./../assets/Register/register-icon-dark.png"
     />
      <RegisterForm />
    </div>
  );
}
