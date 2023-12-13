import domainName from "../domainName";

export default async function (prod_name: string) {
  try {
    const res = await fetch(`${domainName}/api/product?prod_name=${prod_name}`);

    return await res.json();
  } catch (error: any) {
    return { response: error.message, ok: false };
  }
}
