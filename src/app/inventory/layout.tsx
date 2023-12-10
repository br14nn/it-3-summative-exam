import Modal from "@/components/Modal/Modal";
import CustomButton from "@/components/CustomButton";
import SearchInput from "@/components/SearchInput";
import { Metadata } from "next";
import ModalHeader from "@/components/Modal/ModalHeader";
import ModalBody from "@/components/Modal/ModalBody";

export const metadata: Metadata = {
  title: "IMS: Inventory",
  description: "Generated by create next app",
};

export default function InventoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col gap-12 py-12 pl-[123px] pr-12 text-text">
      <SearchInput />
      <Modal buttonLabel="ADD ITEM">
        <ModalHeader className="px-4 py-2">Create New Item</ModalHeader>
        <ModalBody className="p-4">Modal Body</ModalBody>
      </Modal>
      {children}
    </main>
  );
}
