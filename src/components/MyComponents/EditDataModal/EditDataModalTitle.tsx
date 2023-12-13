import { twMerge } from "tailwind-merge";

interface IEditDataModalTitleProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export default function EditDataModalTitle({
  children,
  className,
  ...props
}: IEditDataModalTitleProps) {
  return (
    <header
      className={twMerge(
        "w-full bg-secondary px-4 py-2 font-semibold text-text",
        className,
      )}
      {...props}
    >
      {children}
    </header>
  );
}
