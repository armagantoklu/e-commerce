"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTranslations } from "use-intl";
import { postService } from "@/services/services";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

type RegisterField = {
  name: keyof registerTypes;
  placeholder: string;
  type?: string;
};

type registerTypes = {
  nationalId: string | null;
  username: string | null;
  email: string | null;
  password1: string | null;
  password2: string | null;
  role: string | null;
  age: number | null;
  first_name: string | null;
  last_name: string | null;
};

const registerFields: RegisterField[] = [
  { name: "nationalId", placeholder: "nationalId" },
  { name: "username", placeholder: "username" },
  { name: "email", placeholder: "email" },
  { name: "password1", placeholder: "password1", type: "password" },
  { name: "password2", placeholder: "password2", type: "password" },
  { name: "role", placeholder: "role" },
  { name: "age", placeholder: "age", type: "number" },
  { name: "first_name", placeholder: "first_name" },
  { name: "last_name", placeholder: "last_name" },
];

export default function App() {
  const t = useTranslations("register");
  const t1 = useTranslations("register-error-messages");
  const router = useRouter();
  const schema = yup
    .object({
      nationalId: yup
        .string()
        .min(11, t1("nationalId"))
        .max(11, t1("nationalId"))
        .required(t1("required")),
      username: yup.string().required(t1("required")),
      email: yup.string().email(t1("email")).required(t1("required")),
      password1: yup.string().required(t1("required")),
      password2: yup.string().required(t1("required")),
      role: yup.string().required(t1("required")),
      age: yup
        .number()
        .typeError(t1("number"))
        .positive(t1("age"))
        .required(t1("required")),
      first_name: yup.string().required(t1("required")),
      last_name: yup.string().required(t1("required")),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: registerTypes) => {
    postService("/api/auth/registration/", data)
      .then((res) => {
        localStorage.setItem("token", res.data.access);
        toast.success("Success");
        router.push("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <form className="w-5/6 lg:w-3/6" onSubmit={handleSubmit(onSubmit)}>
      {registerFields.map(({ name, placeholder, type = "text" }) => (
        <div key={name} className="flex flex-col">
          <input
            type={type}
            placeholder={t(placeholder)}
            className="border w-full m-1 p-1  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register(name)}
          />
          <p>{errors[name]?.message}</p>
        </div>
      ))}
      <input
        type="submit"
        value={t("register")}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      />
    </form>
  );
}
