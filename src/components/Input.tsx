interface InputProps {
  type: "text" | "email";
  placeholder: string;
  className: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({
  type,
  placeholder,
  className,
  value,
  onChange,
}: InputProps) {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
