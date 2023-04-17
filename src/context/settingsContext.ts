/* eslint-disable @typescript-eslint/naming-convention */
import { createContext, useReducer } from 'react';
import { PaletteMode } from '@mui/material';

interface SettingsContextInterface {
  theme: PaletteMode | undefined;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const SettingsContext = createContext<SettingsContextInterface>({
  theme: 'dark',
  setTheme: () => {},
});

interface SetThemeAction {
  type: 'SET_THEME';
  payload: string;
}

const settingReducer = (state: string, action: SetThemeAction) => {
  switch (action.type) {
    case 'SET_THEME':
      return action.payload;
    default:
      return state;
  }
};

const SettingsProvider: React.FC<{}> = ({ children }) => {
  const [theme, dispatch] = useReducer(settingReducer, 'light'); // zmiana nazwy reduktora
  const setTheme = (newTheme: string) =>
    dispatch({ type: 'SET_THEME', payload: newTheme });

  return (
    <SettingsContext.Provider value={{ theme, setTheme }}>
      {children}
    </SettingsContext.Provider>
  );
};
