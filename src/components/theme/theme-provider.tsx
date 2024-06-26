import { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { DarkTheme, LightTheme } from '../../styles';
import { Props } from '../basic.dao';

const Context = createContext({
  isDarkTheme: true,
  changeTheme: () => {},
});

export const ThemeContext = ({ children }: Props) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <Context.Provider value={{ isDarkTheme, changeTheme }}>
      <ThemeProvider theme={isDarkTheme ? DarkTheme : LightTheme}>
        {children}
      </ThemeProvider>
    </Context.Provider>
  );
};
