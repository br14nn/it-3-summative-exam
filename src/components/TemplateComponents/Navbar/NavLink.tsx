"use client";

import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface INavItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
  children?: React.ReactNode;
}

export default function NavLink({
  label = "your label",
  children,
  className,
  href = "#",
  ...props
}: INavItemProps) {
  return (
    <Link
      className={twMerge(
        "relative flex w-fit flex-row items-center gap-2 rounded-lg bg-primary/0 p-2 font-semibold text-background transition-colors duration-300 hover:bg-primary",
        className,
      )}
      href={href}
      {...props}
    >
      {children}
      <p className="absolute left-full ml-2 whitespace-nowrap opacity-0 transition-opacity group-hover/navbar:opacity-100">
        {label}
      </p>
    </Link>
  );
}
