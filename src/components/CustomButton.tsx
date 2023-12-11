import { twMerge } from "tailwind-merge";
import { cva, VariantProps } from "class-variance-authority";
import { clsx } from "clsx";

const customButtonVariants = cva("h-[40px] w-fit rounded-lg bg-primary px-4");

interface ICustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof customButtonVariants> {
  children: React.ReactNode;
}

export default function CustomButton({
  children,
  className,
  ...props
}: ICustomButtonProps) {
  return (
    <button
      className={twMerge(clsx(customButtonVariants({ className })))}
      {...props}
    >
      {children}
    </button>
  );
}
