import { ModalsDispatchContext, ModalsStateContext } from '@/context/ModalContext';
import React, { useState } from 'react';

type Props = {
  children: React.ReactNode;
};

const ModalsProvider = ({ children }: Props) => {
  const [openedModals, setOpenedModals] = useState([]);

  const open = () => { };
  const close = () => { };
  const dispatch = { open, close };

  return (
    <ModalsStateContext.Provider value={openedModals}>
      <ModalsDispatchContext.Provider value={dispatch}>
        {children}
      </ModalsDispatchContext.Provider>
    </ModalsStateContext.Provider>
  );
};

export default ModalsProvider;