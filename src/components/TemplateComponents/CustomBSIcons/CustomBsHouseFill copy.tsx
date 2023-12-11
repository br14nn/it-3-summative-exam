"use client";

import { IconContext } from "react-icons";
import { BsInfoCircleFill } from "react-icons/bs";

export default function CustomBsInfoCircleFill() {
  return (
    <IconContext.Provider value={{ size: "35px", color: "#0B0D12" }}>
      <BsInfoCircleFill />
    </IconContext.Provider>
  );
}
