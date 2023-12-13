import domainName from "../domainName";

export default async function (prod_id: number) {
  try {
    const res = await fetch(`${domainName}/api/product?prod_id=${prod_id}`, {
      method: "GET",
    });

    return await res.json();
  } catch (error: any) {
    return { response: error.message, ok: false };
  }
}
