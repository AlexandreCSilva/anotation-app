import { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { DarkTheme, LightTheme } from '../styles';
import { Props } from './basic.dao';

const ThemeContext = createContext({
  isDarkTheme: true,
  changeTheme: () => {},
});

export const ThemeContextProvider = ({ children }: Props) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, changeTheme }}>
      <ThemeProvider theme={isDarkTheme ? DarkTheme : LightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
