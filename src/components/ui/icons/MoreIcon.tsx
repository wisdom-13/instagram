import { FiMoreHorizontal } from 'react-icons/fi';

type Props = {
  className?: string | '';
}

export default function MoreIcon({ className = '' }: Props) {
  return <FiMoreHorizontal className={className} size='20' />;
}
