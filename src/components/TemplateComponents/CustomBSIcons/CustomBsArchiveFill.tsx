"use client";

import { IconContext } from "react-icons";
import { BsArchiveFill } from "react-icons/bs";

export default function CustomBsArchiveFill() {
  return (
    <IconContext.Provider value={{ size: "35px", color: "#0B0D12" }}>
      <BsArchiveFill />
    </IconContext.Provider>
  );
}
