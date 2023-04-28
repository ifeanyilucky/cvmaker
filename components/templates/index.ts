import { ResumeProps } from '../../types/resume';
import Borderless from './borderless';
import Minimmal from './minimal';
import Simmple from './simmple';

export const templates: {
  element: ({ values }: { values: ResumeProps }) => JSX.Element;
  title: string;
  id: string;
}[] = [
  { element: Borderless, title: 'Borderless', id: '3rf3r3' },
  { element: Minimmal, title: 'Minimmal', id: 'uioe9di' },
  { element: Simmple, title: 'Simmple', id: 'ijdkoie' },
];

export { Borderless, Minimmal, Simmple };
