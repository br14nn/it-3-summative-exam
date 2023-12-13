import { twMerge } from "tailwind-merge";

interface IDialogConfirmTitleProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export default function DialogConfirmTitle({
  children,
  className,
  ...props
}: IDialogConfirmTitleProps) {
  return (
    <header
      className={twMerge("bg-danger px-4 py-2 font-semibold", className)}
      {...props}
    >
      Delete
    </header>
  );
}
