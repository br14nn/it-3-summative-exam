"use client";

import { BsSearch } from "react-icons/bs";
import { IconContext } from "react-icons";

interface ICustomBsSearchProps {
  size?: number;
}

export default function CustomBsSearch({ size = 25 }: ICustomBsSearchProps) {
  return (
    <IconContext.Provider value={{ size: `${size}px` }}>
      <BsSearch />
    </IconContext.Provider>
  );
}
