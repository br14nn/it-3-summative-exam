//components
import DeleteDialog from "@/components/MyComponents/DeleteDialog";
//types
import CustomButton from "@/components/TemplateComponents/CustomButton";
import IProductDBTableProps from "@/types/IProductDBTableProps";
//utils
import searchProductById from "@/utils/apiRequests/searchProductById";

const defaultPClass = "flex flex-col items-center gap-2 text-4xl";
const defaultSpanClass = "text-2xl font-medium text-primary";
const defaultCustomButtonClass = "px-6 py-4 font-medium";

export default async function page({ params }: { params: { id: string } }) {
  const { response: data } = (await searchProductById(
    Number(params.id),
  )) as IProductDBTableProps;

  return (
    data.length && (
      <main className="flex h-full w-full flex-col items-center gap-8 py-12 pl-[123px] pr-12 text-center leading-none text-text">
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
          <CustomButton
            className={`${defaultCustomButtonClass} bg-accent hover:bg-accent-dark-1`}
          >
            Edit
          </CustomButton>

          <DeleteDialog prod_id={data[0].id} />
        </div>
      </main>
    )
  );
}
