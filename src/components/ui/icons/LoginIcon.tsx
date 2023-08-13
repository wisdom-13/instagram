import { HiOutlineLogin } from 'react-icons/hi';

type Props = {
  className?: string | '';
}

export default function LoginIcon({ className = '' }: Props) {
  return <HiOutlineLogin className={className} size='24' />;
}
