interface IDialogConfirmBodyProps {
  children?: React.ReactNode;
}

export default function DialogConfirmBody({
  children,
}: IDialogConfirmBodyProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 px-12 py-4 text-center text-background">
      {children}
    </div>
  );
}
