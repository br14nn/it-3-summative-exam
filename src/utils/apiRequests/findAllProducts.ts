import domainName from "../domainName";

export default async function () {
  try {
    const res = await fetch(`${domainName}/api/product`, {
      method: "GET",
    });

    return await res.json();
  } catch (error: any) {
    return { response: error.message, ok: false };
  }
}
