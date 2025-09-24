import FormWrapper from "@/components/auth/shared/FormWrapper";
import LoginForm from "@/components/auth/LoginForm";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <FormWrapper
      title="Login"
      subtitle="Login to your account to continue using our services."
    >
      <LoginForm />
    </FormWrapper>
  );
}

export default page;
