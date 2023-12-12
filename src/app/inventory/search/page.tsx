"use client";

import { useSearchParams } from "next/navigation";

export default function InventorySearchPage() {
  const searchParams = useSearchParams();
  const prod_name = searchParams.get("prod_name");

  return <>Product to search: {prod_name}</>;
}
