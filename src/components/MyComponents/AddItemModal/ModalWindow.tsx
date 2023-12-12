interface IModalWindowProps {
  children: React.ReactNode;
}

export default function ModalWindow({ children }: IModalWindowProps) {
  return (
    <div className="fixed inset-0 z-[999] mx-auto my-auto h-fit w-fit overflow-hidden rounded-lg bg-primary">
      {children}
    </div>
  );
}
