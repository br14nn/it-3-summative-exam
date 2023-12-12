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
    <div className="bg-primary p-4" {...props}>
      {children}
    </div>
  );
}
