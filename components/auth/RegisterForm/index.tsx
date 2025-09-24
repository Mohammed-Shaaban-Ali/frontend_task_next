"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { z } from "zod";

import ProgressBar from "../shared/ProgressBar";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import CustomizeTextField from "@/components/shared/form/CustomizeTextField";
import { REGISTER_EMAIL_COOKIE } from "@/constants";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { handleReqWithToaster } from "@/lib/handle-req-with-toaster";

//  Schema validation
export const RegisterSchema = z
  .object({
    name: z.string().min(1, { message: "Full name is required" }),
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Invalid email address",
    }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" })
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
        "Password must include at least one lowercase letter, one uppercase letter, one number, and one special character"
      ),
    password_confirmation: z
      .string()
      .min(6, { message: "Password confirmation is required" }),
    mobile_country_code: z
      .string()
      .min(1, { message: "Country code is required" }),
    mobile: z.string().min(6, { message: "Mobile number is required" }),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords do not match",
    path: ["password_confirmation"],
  });

export type IRegisterForm = z.infer<typeof RegisterSchema>;

function RegisterForm() {
  const router = useRouter();
  const [register, { isLoading }] = useRegisterMutation();

  const form = useForm<IRegisterForm>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      mobile_country_code: "+20",
      mobile: "",
    },
  });

  const handleRegisterSubmit = async (data: IRegisterForm) => {
    handleReqWithToaster("Register ...", async () => {
      await register({
        email: data.email,
        name: data.name,
        password: data.password,
        password_confirmation: data.password_confirmation,
        mobile_country_code: data.mobile_country_code,
        mobile: data.mobile,
      }).unwrap();

      setCookie(REGISTER_EMAIL_COOKIE, data.email);
      router.push("/auth/verify-email");
    });
  };

  return (
    <div className="space-y-10 w-full ">
      <ProgressBar currentStep={1} numberOfSteps={2} />

      <Form {...form}>
        <form
          className="w-full flex flex-col gap-5 md:min-w-[410px]"
          onSubmit={form.handleSubmit(handleRegisterSubmit)}
          noValidate
        >
          <CustomizeTextField
            name="name"
            label="Full Name"
            placeholder="Enter your full name"
          />

          <CustomizeTextField
            name="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
          />

          <CustomizeTextField
            name="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
          />

          <CustomizeTextField
            name="password_confirmation"
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
          />

          <div className="grid grid-cols-7 gap-3">
            <CustomizeTextField
              name="mobile_country_code"
              label="Country Code"
              placeholder="+20"
              className="col-span-2"
            />

            <CustomizeTextField
              name="mobile"
              label="Mobile Number"
              placeholder="Enter your mobile number"
              className="col-span-5"
            />
          </div>

          <Button isLoading={isLoading} type="submit">
            Continue
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default RegisterForm;
