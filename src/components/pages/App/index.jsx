import React, { useState } from "react";
import {
  Box,
  Text,
  Flex,
  Heading,
  Avatar,
} from "@primer/components";
import uImage from "../../../assets/img/compress/bg-min.jpg";
import uAvatar from "../../../assets/img/compress/profile-min.jpeg"
import ButtonSocial from "../../../containers/ButtonSocial"
import Cover from '../../../containers/Cover/';

// import AOS from 'aos';
// import 'aos/dist/aos.css';
import Card from './AppComp/Card';
import { darkTheme , lightTheme} from "../../../containers/utils/Theme";
import Toggle from '../../../containers/Toggle';
import GlobalStyles from "../../../containers/utils/Global";
import { ThemeProvider } from "styled-components";
import {SunIcon, MoonIcon} from '@primer/octicons-react'



function App() {
  document.title = "Maulana Kurnia";
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
        <Cover imageUrl={uImage}/>
        <GlobalStyles/>
        <Toggle onClick={toggleTheme}>
            {theme === 'light' ? <SunIcon/> : <MoonIcon/>}
        </Toggle>
        <Box>
            <Flex flexWrap="nowrap" justifyContent="center" sx={{ marginTop: '-100px' }}>
                <Avatar size={200} src={uAvatar} sx={{  borderRadius: '50%',
                                                        borderBottom: "2px solid #839296",
                                                        borderLeft: "1px solid #839296",
                                                        borderRight: "1px solid #839296"}}/>
            </Flex>
            <div >
              <Heading as={Flex} justifyContent="center" mt={1} fontSize={30} fontWeight="700" sx={{

              }}>Maulana Kurnia</Heading>
              <Text as={Flex} justifyContent="center" fontSize={15} color="grey" fontStyle="italic">IT Student at UPN "Veteran" Yogyakarta</Text>
              <ButtonSocial/>
              <Card/>
            </div>
        </Box>
      </ThemeProvider>
    );
}

export default App;
