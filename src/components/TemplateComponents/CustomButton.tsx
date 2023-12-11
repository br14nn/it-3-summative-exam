import { twMerge } from "tailwind-merge";

interface ICustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function CustomButton({
  children,
  className,
  ...props
}: ICustomButtonProps) {
  return (
    <button
      className={twMerge(
        "h-[40px] w-fit rounded-lg bg-primary px-4",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
