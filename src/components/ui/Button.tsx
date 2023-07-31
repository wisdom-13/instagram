type Props = {
  text: string;
  className?: string;
  onClick?: () => void;
  blue?: boolean;
}

export default function Button({ text, className, onClick, blue }: Props) {
  return (
    <button className={`rounded-md h-[32px] px-4 font-semibold text-sm ${className} ${blue ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
      onClick={onClick}>
      {text}
    </button>
  );
}

