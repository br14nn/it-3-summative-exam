"use client";

import { IconContext } from "react-icons";
import { BsHouseFill } from "react-icons/bs";

export default function CustomBsHouseFill() {
  return (
    <IconContext.Provider value={{ size: "35px", color: "#0B0D12" }}>
      <BsHouseFill />
    </IconContext.Provider>
  );
}
