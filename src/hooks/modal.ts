import { ModalsDispatchContext } from '@/context/ModalContext';
import { useContext } from 'react';


export default function useModals() {
  const { open, close } = useContext(ModalsDispatchContext);

  const openModal = (Component: Element, props: any) => {
    open(Component, props);
  };

  const closeModal = (Component: React.ReactNode) => {
    close(Component);
  };

  return {
    openModal,
    closeModal,
  };
}
