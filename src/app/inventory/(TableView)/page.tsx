import { nanoid } from "nanoid";

//components
import CustomTBody from "@/components/TemplateComponents/CustomTable/CustomTBody";
import CustomTHead from "@/components/TemplateComponents/CustomTable/CustomTHead";
import CustomTable from "@/components/TemplateComponents/CustomTable/CustomTable";
import CustomTd from "@/components/TemplateComponents/CustomTable/CustomTd";
import CustomTh from "@/components/TemplateComponents/CustomTable/CustomTh";
import CustomTr from "@/components/TemplateComponents/CustomTable/CustomTr";
//utils
import findAllProducts from "@/utils/apiRequests/findAllProducts";
//types
import IProductDBTableProps from "@/types/IProductDBTableProps";

export default async function InventoryPage() {
  const { response: data } = (await findAllProducts()) as IProductDBTableProps;

  return (
    <section className="h-fit max-h-[650px] w-full overflow-hidden overflow-x-auto overflow-y-auto">
      <CustomTable className="border-collapse">
        <CustomTHead>
          <CustomTh></CustomTh>
          <CustomTh>NAME</CustomTh>
          <CustomTh>PRICE</CustomTh>
          <CustomTh>QUANTITY</CustomTh>
        </CustomTHead>

        {data.length ? (
          <CustomTBody className="max-h-[600px] overflow-y-auto">
            {data.map((item, index) => (
              <CustomTr key={nanoid()} prod_id={item.id}>
                <CustomTd>{index + 1}</CustomTd>
                <CustomTd>{item.prod_name}</CustomTd>
                <CustomTd>
                  {item.prod_currency}
                  {item.prod_price}
                </CustomTd>
                <CustomTd>{item.prod_quantity}</CustomTd>
              </CustomTr>
            ))}
          </CustomTBody>
        ) : null}
      </CustomTable>
    </section>
  );
}
