import { twMerge } from "tailwind-merge";

interface ICustomTextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "number";
}

export default function CustomTextInput({
  type = "text",
  className,
  ...props
}: ICustomTextInputProps) {
  return (
    <input
      className={twMerge(
        "rounded-lg border-2 border-black bg-transparent text-text outline-none",
        className,
      )}
      type={type}
      {...props}
    />
  );
}
