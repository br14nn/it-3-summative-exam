"use client";

import { BsSearch } from "react-icons/bs";
import { IconContext } from "react-icons";

export default function CustomBsSearch() {
  return (
    <IconContext.Provider value={{ size: "20px" }}>
      <BsSearch />
    </IconContext.Provider>
  );
}
