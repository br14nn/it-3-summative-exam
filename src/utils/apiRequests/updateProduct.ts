import domainName from "../domainName";

export default async function (id: number, updateForm: IProduct) {
  try {
    const res = await fetch(`${domainName}/api/product`, {
      method: "PUT",
      body: JSON.stringify({
        id: id,
        ...updateForm,
      }),
    });

    return await res.json();
  } catch (error: any) {
    return { response: error.message, ok: false };
  }
}
