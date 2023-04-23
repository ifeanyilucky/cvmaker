import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';
// Initial state
const initialState = {
  resume: {},
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (children) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const add = (resume) => {
    dispatch({ type: '' });
  };

  return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
};
s;
