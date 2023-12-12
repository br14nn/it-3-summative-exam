import { twMerge } from "tailwind-merge";

interface ICustomTrProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children?: React.ReactNode;
}

export default function CustomTr({
  children,
  className,
  ...props
}: ICustomTrProps) {
  return (
    <tr
      className={twMerge(
        " transition-colors odd:bg-slate-600 even:bg-slate-500 hover:cursor-pointer hover:bg-background",
        className,
      )}
      {...props}
    >
      {children}
    </tr>
  );
}
