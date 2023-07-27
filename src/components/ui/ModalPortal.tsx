import reactDom from 'react-dom';

type Props = {
  children: any; // React.ReactNode
}

export default function ModalPortal({ children }: Props) {
  if (typeof window === 'undefined') {
    return null;
  }

  const node = document.getElementById('portal') as Element;
  return reactDom.createPortal(children, node);
}