"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import ProgressBar from "../shared/ProgressBar";
import { useRouter } from "next/navigation";
import OtpInput from "@/components/shared/form/OtpInput";
import {
  useResendCodeMutation,
  useVerifyOtpMutation,
} from "@/redux/features/auth/authApi";
import { handleReqWithToaster } from "@/lib/handle-req-with-toaster";
import { REGISTER_EMAIL_COOKIE } from "@/constants";
import { deleteCookie } from "cookies-next";

export const OTPSchema = z.object({
  otp: z.string().length(6, { message: "OTP must be exactly 6 digits" }),
});

type Props = {};

export type IVerifyEmailForm = z.infer<typeof OTPSchema>;

function VerifyEmailForm({}: Props) {
  const router = useRouter();

  const [verifyOtp, { isLoading }] = useVerifyOtpMutation();
  const [resendCode, { isLoading: isResendLoading }] = useResendCodeMutation();

  const VerifyEmailForm = useForm<IVerifyEmailForm>({
    resolver: zodResolver(OTPSchema),
  });

  const handleLoginSubmit = async (data: IVerifyEmailForm) => {
    handleReqWithToaster("Verifying OTP ...", async () => {
      await verifyOtp({
        code: data.otp,
      }).unwrap();
      deleteCookie(REGISTER_EMAIL_COOKIE);
      router.push("/dashboard");
    });
  };

  const handleResendCode = async () => {
    handleReqWithToaster("Resending code ...", async () => {
      await resendCode().unwrap();
      // Clear the current OTP input after resending
      VerifyEmailForm.reset({ otp: "" });
    });
  };

  return (
    <div className="space-y-10 w-full">
      <ProgressBar currentStep={2} numberOfSteps={2} />

      <Form {...VerifyEmailForm}>
        <form
          className="w-full flex flex-col gap-5"
          onSubmit={VerifyEmailForm.handleSubmit(handleLoginSubmit)}
        >
          {/* OTP with 6 digits */}
          <OtpInput form={VerifyEmailForm} name="otp" numberOfInputs={6} />

          <Button isLoading={isLoading} type="submit">
            Verify Email
          </Button>

          {/* Resend Code Button */}
          <Button
            type="button"
            variant="outline"
            isLoading={isResendLoading}
            onClick={handleResendCode}
            disabled={isLoading}
          >
            Resend Code
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default VerifyEmailForm;
