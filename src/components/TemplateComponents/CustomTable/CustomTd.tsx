import { twMerge } from "tailwind-merge";

interface ICustomTdProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  children?: React.ReactNode;
}

export default function CustomTd({
  children,
  className,
  ...props
}: ICustomTdProps) {
  return (
    <td className={twMerge("px-4 py-2", className)} {...props}>
      {children}
    </td>
  );
}
