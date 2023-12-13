"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
//components
import CustomButton from "@/components/TemplateComponents/CustomButton";
import DialogConfirm from "@/components/TemplateComponents/DialogConfirm/DialogConfirm";
import DialogConfirmBody from "@/components/TemplateComponents/DialogConfirm/DialogConfirmBody";
import DialogConfirmButtons from "@/components/TemplateComponents/DialogConfirm/DialogConfirmButtons";
import DialogConfirmTitle from "@/components/TemplateComponents/DialogConfirm/DialogConfirmTitle";
//utils
import deleteProductById from "@/utils/apiRequests/deleteProductById";
import revalidatePath from "@/utils/actions/revalidatePath";
import domainName from "@/utils/domainName";

interface IDeleteDialogProps {
  prod_id: number;
}

export default function DeleteDialog({ prod_id }: IDeleteDialogProps) {
  const router = useRouter();

  const [showDialog, setShowDialog] = useState<boolean>(false);

  const handleOpenDialog = () => {
    setShowDialog(true);
  };

  const handleCloseDialog = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget;

    if (id === "confirmButton") {
      await deleteProductById(prod_id);

      revalidatePath("/", "layout");

      router.replace(`${domainName}/inventory`);
    }

    setShowDialog(false);
  };

  return (
    <>
      <CustomButton
        onClick={handleOpenDialog}
        className={`bg-danger px-6 py-4 font-medium hover:bg-red-700`}
      >
        Delete
      </CustomButton>

      {showDialog && (
        <DialogConfirm>
          <DialogConfirmTitle className="text-start">Delete</DialogConfirmTitle>
          <DialogConfirmBody>
            <p className="leading-relaxed">Do you want to delete this data?</p>
            <DialogConfirmButtons
              onClickConfirm={handleCloseDialog}
              onClickCancel={handleCloseDialog}
            />
          </DialogConfirmBody>
        </DialogConfirm>
      )}
    </>
  );
}
