import { twMerge } from "tailwind-merge";

interface ICustomTextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: "text";
}

export default function CustomTextInput({
  type = "text",
  className,
  ...props
}: ICustomTextInputProps) {
  return (
    <input
      className={twMerge(
        "border-2 bg-transparent text-text outline-none",
        className,
      )}
      type={type}
      {...props}
    />
  );
}
