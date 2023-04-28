import React, { createContext, useReducer, useEffect, ReactNode } from 'react';
import AppReducer from './AppReducer';
import * as types from './actionType';
import { ResumeProps } from '../types/resume';

interface IProps {
  resume: ResumeProps;
  template: string | JSX.Element;
}
// Initial state
const initialState: IProps = {
  template: '',
  resume: {
    biography: '',
    bioTitle: '',
    education: [
      {
        degree: '',
        end: '',
        id: '',
        location: '',
        school: '',
        start: '',
        overview: '',
      },
    ],
    email: '',
    experience: [
      {
        companyName: '',
        end: '',
        id: 0,
        jobTitle: '',
        location: '',
        overview: '',
        start: '',
      },
    ],
    firstName: '',
    id: '',
    lastName: '',
    position: '',
    skills: [],
  },
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const createResume = (payload: object) => {
    dispatch({ type: types.createResume, payload });
  };

  return (
    <GlobalContext.Provider value={{ resume: state.resume, createResume }}>
      {children}
    </GlobalContext.Provider>
  );
};
