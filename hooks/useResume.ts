import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const useResume = () => useContext(GlobalContext);
