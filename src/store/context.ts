import { createContext } from 'react';
import { Company, Actions, initialState } from './reducer';

export const Context = createContext<{
  state: Company[];
  dispatch: React.Dispatch<Actions>;
}>({
  state: initialState,
  dispatch: () => undefined,
});
