import React, {useEffect, useState} from 'react';
import { BaseStyles, darkTheme, lightTheme, Toggle } from './components'
import { ThemeProvider } from "styled-components";
import { FiSun,FiMoon } from "react-icons/fi";
import Home from './pages/Home';

export default function App(){
    const [theme, setTheme] = React.useState();
    const [mounted, setMounted] = useState(false);
    // Dynamic Theme
    useEffect(() => {
        const darkModeValue = localStorage.getItem('DARK_MODE')
        setTheme(darkModeValue === 'true')
        setMounted(true)
    }, []);

    
    useEffect(() => {
        localStorage.setItem('DARK_MODE', theme)
    }, [theme])

    if (!mounted) return <div />

    const toggleTheme = () => {
        setTheme(!theme);
  }

    return(
        <ThemeProvider theme={theme ? lightTheme : darkTheme}>
            <BaseStyles/>
            <Toggle onDoubleClick={toggleTheme}>
                {theme ? <FiSun/> : <FiMoon/>}
            </Toggle>
            <Home/>
        </ThemeProvider>
    )
}