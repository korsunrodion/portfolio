import React, { createContext, useEffect, useState } from 'react';

interface Props {
  children: React.ReactNode;
  dictionary: {
    [key: string]: any;
  };
}

interface ContextValues {
  dictionary: {
    [key: string]: any;
  };
}

const initialValues: ContextValues = {
  dictionary: {},
};

export const GlobalContext = createContext(initialValues);

const GlobalContextComponent: React.FC<Props> = ({ dictionary, children }) => {
  const [contextValue, setContextValue] = useState({ dictionary });

  useEffect(() => {
    setContextValue({ dictionary });
  }, [dictionary]);

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextComponent;
