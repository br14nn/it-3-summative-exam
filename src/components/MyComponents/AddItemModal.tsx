import Modal from "@/components/TemplateComponents/Modal/Modal";
import ModalBody from "@/components/TemplateComponents/Modal/ModalBody";
import ModalHeader from "@/components/TemplateComponents/Modal/ModalHeader";

export default function AddItemModal() {
  return (
    <Modal buttonCName="font-medium bg-green-600" buttonLabel="New Item">
      <ModalHeader className="px-4 py-2">Create New Item</ModalHeader>
      <ModalBody className="p-4">
        <form>
          <input type="text" />
        </form>
      </ModalBody>
    </Modal>
  );
}
