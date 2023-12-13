import { twMerge } from "tailwind-merge";

interface ICustomTableProps
  extends React.TableHTMLAttributes<HTMLTableElement> {
  children?: React.ReactNode;
}

export default function CustomTable({
  children,
  className,
  ...props
}: ICustomTableProps) {
  return (
    <table
      className={twMerge(
        "w-full min-w-[1000px] table-auto text-center",
        className,
      )}
      {...props}
    >
      {children}
    </table>
  );
}
