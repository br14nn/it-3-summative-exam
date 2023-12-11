import CustomBsArchiveFill from "@/components/TemplateComponents/CustomBSIcons/CustomBsArchiveFill";
import CustomBsHouseFill from "@/components/TemplateComponents/CustomBSIcons/CustomBsHouseFill";
import CustomBsInfoCircleFill from "@/components/TemplateComponents/CustomBSIcons/CustomBsHouseFill copy";
import NavLink from "@/components/TemplateComponents/Navbar/NavLink";
import Navbar from "@/components/TemplateComponents/Navbar/Navbar";

export default function MyNavbar() {
  return (
    <Navbar>
      <NavLink label="Home" href="/">
        <CustomBsHouseFill />
      </NavLink>
      <NavLink label="Inventory" href="/inventory">
        <CustomBsArchiveFill />
      </NavLink>
      <NavLink label="About" href="/about">
        <CustomBsInfoCircleFill />
      </NavLink>
    </Navbar>
  );
}
