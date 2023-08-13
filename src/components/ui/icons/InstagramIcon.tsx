import { BsInstagram } from 'react-icons/bs';

type Props = {
  className?: string | '';
}

export default function InstagramIcon({ className = '' }: Props) {
  return <BsInstagram className={className} size='24' />;
}
