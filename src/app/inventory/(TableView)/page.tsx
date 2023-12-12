import CustomTBody from "@/components/TemplateComponents/CustomTable/CustomTBody";
import CustomTHead from "@/components/TemplateComponents/CustomTable/CustomTHead";
import CustomTable from "@/components/TemplateComponents/CustomTable/CustomTable";
import CustomTd from "@/components/TemplateComponents/CustomTable/CustomTd";
import CustomTh from "@/components/TemplateComponents/CustomTable/CustomTh";
import CustomTr from "@/components/TemplateComponents/CustomTable/CustomTr";

export default function InventoryPage() {
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
          <CustomTr>
            <CustomTd>1</CustomTd>
            <CustomTd>Sony PlayStation 5 DELUXE EDITION</CustomTd>
            <CustomTd>$599.99</CustomTd>
            <CustomTd>19</CustomTd>
          </CustomTr>
          <CustomTr>
            <CustomTd>2</CustomTd>
            <CustomTd>Sony PlayStation 5 DELUXE EDITION</CustomTd>
            <CustomTd>$599.99</CustomTd>
            <CustomTd>19</CustomTd>
          </CustomTr>
        </CustomTBody>
      </CustomTable>
    </>
  );
}
