import { twMerge } from "tailwind-merge";

interface ITableHeadProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children?: React.ReactNode;
}

export default function CustomTHead({
  children,
  className,
  ...props
}: ITableHeadProps) {
  return (
    <thead>
      <tr
        className={twMerge(
          "border-2 border-text bg-primary text-lg font-bold text-black",
          className,
        )}
        {...props}
      >
        {children}
      </tr>
    </thead>
  );
}
