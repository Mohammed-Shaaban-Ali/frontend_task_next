import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  subtitle: string;
  children: React.ReactNode;

  isPrivatePolicy?: boolean;
};

function FormWrapper({
  title,
  subtitle,
  children,
  isPrivatePolicy = true,
}: Props) {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center ">
      <div
        className="flex flex-col items-center justify-center gap-6 shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)] 
      border border-gray-100 rounded-2xl w-[min(100%%, 410px)] md:min-w-[410px] max-w-[480px] p-4 md:p-8"
      >
        {/* titles */}
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-32 font-bold">{title}</h1>
          <h2 className="text-16 text-black/60 text-center">{subtitle}</h2>
        </div>

        {/* form */}
        {children}
        {/* privacy policy and terms */}
        {isPrivatePolicy && (
          <div className="text-14 text-black/60 text-start">
            By signing up, you acknowledge that you have read, understood, and
            agree to our{" "}
            <Link
              href="/privacy"
              className="text-black font-semibold underline"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms" className="text-black font-semibold underline">
              Terms & Conditions
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default FormWrapper;
