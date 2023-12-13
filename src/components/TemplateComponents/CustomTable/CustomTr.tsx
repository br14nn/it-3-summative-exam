"use client";

import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";
import domainName from "@/utils/domainName";

interface ICustomTrProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children?: React.ReactNode;
  prod_id: number;
}

export default function CustomTr({
  children,
  prod_id,
  className,
  ...props
}: ICustomTrProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`${domainName}/inventory/product/${prod_id}`);
  };

  return (
    <tr
      className={twMerge(
        " transition-colors odd:bg-slate-600 even:bg-slate-500 hover:cursor-pointer hover:bg-background",
        className,
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
    </tr>
  );
}
