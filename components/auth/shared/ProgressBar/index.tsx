import { cn } from "@/lib/utils";

type Props = {
  currentStep: number;
  numberOfSteps: number;
};

function ProgressBar({ currentStep, numberOfSteps }: Props) {
  return (
    <div className="flex mx-auto items-center justify-center gap-2">
      {Array.from({ length: numberOfSteps }).map((_, index) => (
        <span
          key={index}
          className={cn("w-full h-2 rounded-full bg-primary/40", {
            "bg-primary ": index <= currentStep - 1,
          })}
        ></span>
      ))}
    </div>
  );
}

export default ProgressBar;
