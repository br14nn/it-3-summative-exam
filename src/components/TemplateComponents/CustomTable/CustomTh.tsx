import { twMerge } from "tailwind-merge";

interface ICustomThProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  children?: React.ReactNode;
}

export default function CustomTh({
  children,
  className,
  ...props
}: ICustomThProps) {
  return (
    <th className={twMerge("px-4 py-2", className)} {...props}>
      {children}
    </th>
  );
}
