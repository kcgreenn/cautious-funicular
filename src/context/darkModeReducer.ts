import { INITIAL_STATE } from './darkModeContext';

export type ACTIONTYPE =
   | { type: 'LIGHT' }
   | { type: 'DARK' }
   | { type: 'TOGGLE' };

const DarkModeReducer = (state: typeof INITIAL_STATE, action: ACTIONTYPE) => {
   switch (action.type) {
      case 'LIGHT':
         return { darkMode: false };
         break;
      case 'DARK':
         return { darkMode: true };
         break;
      case 'TOGGLE':
         return { darkMode: !state.darkMode };
         break;
      default:
         throw new Error();
   }
};

export default DarkModeReducer;
