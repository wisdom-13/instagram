import { HiOutlinePhoto } from 'react-icons/hi2';

type Props = {
  className?: string | '';
}
export default function MediaIcon({ className = '' }: Props) {
  return <HiOutlinePhoto className={className} size='128' />;
}


