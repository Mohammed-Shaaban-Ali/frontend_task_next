"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { useRouter } from "next/navigation";
import CustomizeTextField from "@/components/shared/form/CustomizeTextField";
import { z } from "zod";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { handleReqWithToaster } from "@/lib/handle-req-with-toaster";

// Step 1 schema
export const LoginSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Invalid email address",
  }),
  password: z.string().min(1, { message: "Password is required" }),
});

type Props = {};

export type ILoginForm = z.infer<typeof LoginSchema>;

function LoginForm({}: Props) {
  const router = useRouter();
  const [login, { isLoading }] = useLoginMutation();
  const loginForm = useForm<ILoginForm>({
    resolver: zodResolver(LoginSchema),
  });

  const handleLoginSubmit = async (data: ILoginForm) => {
    handleReqWithToaster("Login ...", async () => {
      await login({
        email: data.email,
        password: data.password,
      }).unwrap();
      router.push("/dashboard");
    });
  };

  return (
    <Form {...loginForm}>
      <form
        className="w-full flex flex-col gap-5"
        onSubmit={loginForm.handleSubmit(handleLoginSubmit)}
        noValidate
      >
        <CustomizeTextField
          name="email"
          label="Email"
          placeholder="Enter your email"
          type="email"
        />
        <CustomizeTextField
          name="password"
          label="Password"
          placeholder="Enter your password"
          type="password"
        />
        <div className="flex justify-end items-center">
          <Link
            href="/auth/register"
            className="text-14 font-semibold hover:underline text-left"
          >
            Register now
          </Link>
        </div>
        <Button isLoading={isLoading} type="submit">
          Log in
        </Button>
      </form>
    </Form>
  );
}

export default LoginForm;
