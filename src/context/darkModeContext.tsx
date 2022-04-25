import { createContext, useReducer } from 'react';
import DarkModeReducer, { ACTIONTYPE } from './darkModeReducer';

interface State {
   darkMode: boolean;
}

export const INITIAL_STATE: State = {
   darkMode: false,
};

type Props = {
   children: JSX.Element;
};

interface IDMContext {
   state: State;
   dispatch: React.Dispatch<ACTIONTYPE> | any;
}

export const DarkModeContext = createContext<IDMContext>({
   state: INITIAL_STATE,
   dispatch: () => null,
});

export const DarkModeContextProvider = ({ children }: Props) => {
   const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

   return (
      <DarkModeContext.Provider value={{ state, dispatch }}>
         {children}
      </DarkModeContext.Provider>
   );
};
