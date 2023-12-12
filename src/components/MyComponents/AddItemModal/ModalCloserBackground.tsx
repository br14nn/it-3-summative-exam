import { twMerge } from "tailwind-merge";

interface IModalCloserBackgroundProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export default function ModalCloserBackground({
  children,
  className,
  ...props
}: IModalCloserBackgroundProps) {
  return (
    <div
      className={twMerge(
        "fixed inset-0 z-[990] flex h-screen w-screen items-center justify-center bg-background/50 backdrop-blur",
        className,
      )}
      {...props}
    ></div>
  );
}
