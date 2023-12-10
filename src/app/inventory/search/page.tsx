"use client";

import { useSearchParams } from "next/navigation";

export default function InventorySearchPage() {
  const searchParams = useSearchParams();
  const pname = searchParams.get("pname");

  return <>Product to search: {pname}</>;
}
