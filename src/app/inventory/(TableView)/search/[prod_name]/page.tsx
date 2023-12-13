//components
import CustomTBody from "@/components/TemplateComponents/CustomTable/CustomTBody";
import CustomTHead from "@/components/TemplateComponents/CustomTable/CustomTHead";
import CustomTable from "@/components/TemplateComponents/CustomTable/CustomTable";
import CustomTd from "@/components/TemplateComponents/CustomTable/CustomTd";
import CustomTh from "@/components/TemplateComponents/CustomTable/CustomTh";
import CustomTr from "@/components/TemplateComponents/CustomTable/CustomTr";

//types
import IProductDBTableProps from "@/types/IProductDBTableProps";

//utils
import searchProductByName from "@/utils/apiRequests/searchProductByName";
import { nanoid } from "nanoid";

export default async function SearchProdNamePage({
  params,
}: {
  params: { prod_name: string };
}) {
  const { response: data } = (await searchProductByName(
    params.prod_name,
  )) as IProductDBTableProps;

  return (
    <CustomTable>
      <CustomTHead>
        <CustomTh>ID</CustomTh>
        <CustomTh>NAME</CustomTh>
        <CustomTh>PRICE</CustomTh>
        <CustomTh>QUANTITY</CustomTh>
      </CustomTHead>

      <CustomTBody>
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
    </CustomTable>
  );
}
