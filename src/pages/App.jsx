import React, { useState } from "react";

import { darkTheme , lightTheme} from "../components/utils/Theme";
import Toggle from '../components/Toggle';
import GlobalStyles from "../components/utils/Global";
import { ThemeProvider } from "styled-components";
import {SunIcon, MoonIcon} from '@primer/octicons-react'

import Home from './Home'

function App() {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark'); 
    } else {
      setTheme('light');
    }
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <Toggle onClick={toggleTheme}>
          {theme === 'dark' ? <SunIcon/> : <MoonIcon/>}
      </Toggle>
      <Home/>
    </ThemeProvider>
  );
}

export default App;
