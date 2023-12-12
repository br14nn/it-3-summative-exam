"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import domainName from "@/utils/domainName";

import CustomBsSearch from "../TemplateComponents/CustomBSIcons/CustomBsSearch";
import CustomTextInput from "../TemplateComponents/CustomTextInput";

export default function SearchBox() {
  const router = useRouter();
  const [searchVal, setSearchVal] = useState<string>("");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchVal) {
      router.push(`${domainName}/inventory`);
    } else {
      router.push(`${domainName}/inventory/search?prod_name=${searchVal}`);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    setSearchVal(value);
  };

  return (
    <form
      data-testid="searchBox"
      onSubmit={handleFormSubmit}
      className="h-fit w-fit"
    >
      <label className="flex w-fit flex-row items-center gap-2 rounded-lg border-2 border-primary px-3 py-2">
        <CustomBsSearch size={20} />
        <CustomTextInput
          className="w-[200px] border-none"
          placeholder="Search"
          value={searchVal}
          onChange={handleInputChange}
          autoComplete="off"
        />
      </label>
    </form>
  );
}
