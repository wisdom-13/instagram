import { AiOutlineMenu } from 'react-icons/ai';

type Props = {
  className?: string | '';
}

export default function MenuIcon({ className = '' }: Props) {
  return <AiOutlineMenu className={className} size='24' />;
}
