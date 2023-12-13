interface IDialogConfirmProps {
  children?: React.ReactNode;
}

export default function DialogConfirm({ children }: IDialogConfirmProps) {
  return (
    <>
      <div className="fixed inset-0 z-[998] h-full w-full bg-background/50 backdrop-blur" />

      <div className="fixed inset-0 z-[999] mx-auto my-auto h-fit w-fit max-w-[400px] overflow-hidden rounded-lg bg-primary-light-1">
        {children}
      </div>
    </>
  );
}
