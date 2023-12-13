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
    <thead className="sticky top-0 bg-primary">
      <tr
        className={twMerge("text-lg font-bold text-black ", className)}
        {...props}
      >
        {children}
      </tr>
    </thead>
  );
}
