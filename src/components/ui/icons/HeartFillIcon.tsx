import { AiFillHeart } from 'react-icons/ai';

type Props = {
  className?: string | '';
}
export default function HeartFillIcon({ className = '' }: Props) {
  return <AiFillHeart className={`${className} fill-red-500`} size='24' />;
}


