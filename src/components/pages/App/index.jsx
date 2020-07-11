import React, { useState } from "react";


import { darkTheme , lightTheme} from "../../../containers/utils/Theme";
import Toggle from '../../../containers/Toggle';
import GlobalStyles from "../../../containers/utils/Global";
import { ThemeProvider } from "styled-components";
import {SunIcon, MoonIcon} from '@primer/octicons-react'

import Home from '../Home/'


function App() {
  const [theme, setTheme] = useState(0);
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
            {theme === 'light' ? <SunIcon/> : <MoonIcon/>}
        </Toggle>
        <Home/>
      </ThemeProvider>
    );
}

export default App;
