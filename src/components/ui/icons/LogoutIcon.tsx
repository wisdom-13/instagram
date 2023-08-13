import { HiOutlineLogout } from 'react-icons/hi';

type Props = {
  className?: string | '';
}

export default function LogoutIcon({ className = '' }: Props) {
  return <HiOutlineLogout className={className} size='24' />;
}
