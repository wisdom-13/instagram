import { ModalsDispatchContext, ModalsStateContext } from '@/context/ModalContext';
import React, { useMemo, useState } from 'react';

type Props = {
  children: React.ReactNode;
};


const ModalsProvider = ({ children }: Props) => {
  const [openedModals, setOpenedModals] = useState<{ Component: React.ReactNode, props: any }[]>([]);

  const open = (Component: React.ReactNode, props: any) => {
    setOpenedModals((modals) => {
      return [...modals, { Component, props }];
    });
  };

  const close = (Component: React.ReactNode) => {
    setOpenedModals((modals) => {
      return modals.filter((modal) => {
        return modal.Component !== Component;
      });
    });
  };

  const dispatch = useMemo(() => ({ open, close }), []);

  return (
    <ModalsStateContext.Provider value={openedModals}>
      <ModalsDispatchContext.Provider value={dispatch}>
        {children}
      </ModalsDispatchContext.Provider>
    </ModalsStateContext.Provider>
  );
};

export default ModalsProvider;