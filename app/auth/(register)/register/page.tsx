import RegisterForm from "@/components/auth/RegisterForm";
import FormWrapper from "@/components/auth/shared/FormWrapper";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <FormWrapper
      title="Register Now"
      subtitle="Create a new account to continue using our services."
      isPrivatePolicy={false}
    >
      <RegisterForm />
    </FormWrapper>
  );
}

export default page;
