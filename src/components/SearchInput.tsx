"use client";

import { twMerge } from "tailwind-merge";
import { cva, VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import { useState } from "react";
import { useRouter } from "next/navigation";
import domainName from "@/utils/domainName";

import CustomBsSearch from "./CustomBSIcons/CustomBsSearch";

const searchVariants = cva(
  "w-[250px] rounded-lg border-2 border-primary bg-transparent px-3 py-2 flex  flex-row items-center gap-2",
);

interface ISearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof searchVariants> {}

export default function SearchInput({
  className,
  ...props
}: ISearchInputProps) {
  const router = useRouter();
  const [searchVal, SetSearchVal] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    SetSearchVal(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    !searchVal
      ? router.push(`${domainName}/inventory`)
      : router.push(`${domainName}/inventory/search?pname=${searchVal}`);

    SetSearchVal("");
  };

  return (
    <form onSubmit={handleSubmit} className="h-fit w-fit">
      <label className={twMerge(clsx(searchVariants({ className })))}>
        <CustomBsSearch />

        <input
          className="h-full w-full bg-transparent outline-none"
          type="text"
          placeholder="Search"
          onChange={handleChange}
          value={searchVal}
          {...props}
        />
      </label>
    </form>
  );
}
