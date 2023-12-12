import { nanoid } from "nanoid";

import CustomTBody from "@/components/TemplateComponents/CustomTable/CustomTBody";
import CustomTHead from "@/components/TemplateComponents/CustomTable/CustomTHead";
import CustomTable from "@/components/TemplateComponents/CustomTable/CustomTable";
import CustomTd from "@/components/TemplateComponents/CustomTable/CustomTd";
import CustomTh from "@/components/TemplateComponents/CustomTable/CustomTh";
import CustomTr from "@/components/TemplateComponents/CustomTable/CustomTr";

import IFindAllProductsRes from "@/types/IFindAllProductsRes";

import findAllProducts from "@/utils/apiRequests/findAllProducts";

export default async function InventoryPage() {
  const { response: data, ok } =
    (await findAllProducts()) as IFindAllProductsRes;

  return (
    <>
      <CustomTable>
        <CustomTHead>
          <CustomTh>ID</CustomTh>
          <CustomTh>NAME</CustomTh>
          <CustomTh>PRICE</CustomTh>
          <CustomTh>QUANTITY</CustomTh>
        </CustomTHead>

        <CustomTBody>
          {data.map((item, index) => (
            <CustomTr key={nanoid()}>
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
      </CustomTable>
    </>
  );
}
