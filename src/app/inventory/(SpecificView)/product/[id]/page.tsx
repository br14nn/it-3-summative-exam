//components
import DeleteDialog from "@/components/MyComponents/DeleteDialog";
import EditDataModal from "@/components/MyComponents/EditDataModal/EditDataModal";
//utils
import searchProductById from "@/utils/apiRequests/searchProductById";

const defaultPClass = "flex flex-col items-center gap-2 text-4xl";
const defaultSpanClass = "text-2xl font-medium text-primary";

export default async function SpecificViewPage({
  params,
}: {
  params: { id: number };
}) {
  const { response: data } = (await searchProductById(
    Number(params.id),
  )) as IProductApiRes;

  return (
    data.length && (
      <main className="flex h-full w-full flex-col items-center gap-8 py-6 pl-[99px] pr-6 text-center leading-none text-text lg:py-12 lg:pl-[123px] lg:pr-12">
        <p className={defaultPClass}>
          <span className={defaultSpanClass}>NAME:</span>
          {data[0].prod_name}
        </p>
        <p className={defaultPClass}>
          <span className={defaultSpanClass}>PRICE:</span>${data[0].prod_price}
        </p>
        <p className={defaultPClass}>
          <span className={defaultSpanClass}>QTY:</span>
          {data[0].prod_quantity}
        </p>
        <div className="flex flex-row gap-4">
          <EditDataModal prod_id={Number(data[0].id)} />

          <DeleteDialog prod_id={Number(data[0].id)} />
        </div>
      </main>
    )
  );
}
