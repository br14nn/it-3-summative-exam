import { twMerge } from "tailwind-merge";

interface IModalBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export default function ModalBody({
  children,
  className,
  ...props
}: IModalBodyProps) {
  return (
    <div
      className={twMerge("flex flex-col bg-text text-background", className)}
      {...props}
    >
      {children}
    </div>
  );
}
