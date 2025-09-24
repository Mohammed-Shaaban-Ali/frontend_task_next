import FormWrapper from "@/components/auth/shared/FormWrapper";
import VerifyEmailForm from "@/components/auth/VerifyEmailForm";
import { REGISTER_EMAIL_COOKIE, TOKEN_COOKIE } from "@/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

async function page({}: Props) {
  const cookieStore = await cookies();

  const ForGetPasswordEmail = cookieStore?.get(REGISTER_EMAIL_COOKIE)?.value;
  const token = cookieStore?.get(TOKEN_COOKIE)?.value;
  if (!ForGetPasswordEmail || !token) return redirect("/auth/register");
  return (
    <FormWrapper
      title="Verify Email"
      subtitle={`Enter the OTP code sent to your email ${ForGetPasswordEmail?.slice(
        0,
        3
      )}***${ForGetPasswordEmail?.slice(-3)}`}
      isPrivatePolicy={false}
    >
      <VerifyEmailForm />
    </FormWrapper>
  );
}

export default page;
