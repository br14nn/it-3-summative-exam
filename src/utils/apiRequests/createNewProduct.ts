import domainName from "../domainName";

export default async function (data: IProduct) {
  try {
    const res = await fetch(`${domainName}/api/product`, {
      method: "POST",
      body: JSON.stringify(data),
    });

    return await res.json();
  } catch (error: any) {
    return { response: error.message, ok: false };
  }
}
