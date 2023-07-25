import { MdGridOn } from 'react-icons/md';

type Props = {
  className?: string | '';
}
export default function PostGridIcon({ className = '' }: Props) {
  return <MdGridOn className={className} size='24' />;
}


