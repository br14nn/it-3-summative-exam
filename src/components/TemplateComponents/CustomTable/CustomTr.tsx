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
        "border-x-2 border-b-2 text-text transition-colors first:border-t-0 odd:bg-slate-600 even:bg-slate-500 hover:cursor-pointer hover:bg-background",
        className,
      )}
      {...props}
    >
      {children}
    </tr>
  );
}
