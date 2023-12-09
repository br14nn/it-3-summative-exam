"use client";

import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

const customNavLinkVariants = cva(
  "relative bg-primary/0 rounded-lg p-2 gap-2 text-background font-semibold flex flex-row items-center w-fit transition-colors duration-300 hover:bg-primary",
);

interface INavItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof customNavLinkVariants> {
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
      className={twMerge(clsx(customNavLinkVariants({ className })))}
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
