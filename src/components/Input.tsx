interface InputProps {
  type: "text" | "email";
  placeholder: string;
  className: string;
}

export function Input({ type, placeholder, className }: InputProps) {
  return <input className={className} type={type} placeholder={placeholder} />;
}
