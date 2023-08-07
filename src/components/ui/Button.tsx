type Props = {
  text: string;
  className?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: () => void;
  blue?: boolean;
  disabled?: boolean;
}

export default function Button({ text, className, type = 'submit', onClick, blue, disabled = false }: Props) {
  return (
    <button
      className={`rounded-md h-[32px] px-4 font-semibold text-sm 
        ${className} 
        ${blue ? 'bg-blue-500 text-white' : 'bg-gray-100'} 
        ${disabled && 'opacity-80'}`
      }
      type={type}
      onClick={onClick}
      disabled={disabled}>
      {text}
    </button>
  );
}

