import React from "react";

export default function page({ params }: { params: { id: string } }) {
  return <div className="text-text">Product {params.id}</div>;
}
