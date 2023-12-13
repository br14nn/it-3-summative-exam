//components
import CustomButton from "../CustomButton";

interface IDialogConfirmButtonsProps {
  onClickConfirm?: React.MouseEventHandler;
  onClickCancel?: React.MouseEventHandler;
}

export default function DialogConfirmButtons({
  onClickConfirm,
  onClickCancel,
}: IDialogConfirmButtonsProps) {
  return (
    <div className="flex flex-row gap-4 text-text">
      <CustomButton
        className="bg-accent py-3 hover:bg-accent-dark-1"
        id="confirmButton"
        onClick={onClickConfirm}
      >
        Confirm
      </CustomButton>
      <CustomButton
        className="bg-danger py-3 hover:bg-red-600"
        id="cancelButton"
        onClick={onClickCancel}
      >
        Cancel
      </CustomButton>
    </div>
  );
}
