import { twMerge } from "tailwind-merge";

interface ICustomTBodyProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {
  children?: React.ReactNode;
}

export default function CustomTBody({
  children,
  className,
  ...props
}: ICustomTBodyProps) {
  return (
    <tbody className={twMerge("font-medium", className)} {...props}>
      {children}
    </tbody>
  );
}
