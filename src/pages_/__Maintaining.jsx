import React, {useState} from 'react';
import {Box, Text, Button, Flex, Heading, Link} from '@primer/components';
import {ThemeProvider} from 'styled-components'
import {MarkGithubIcon} from   '@primer/octicons-react'
import { Ripple } from 'react-spinners-css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { darkTheme , lightTheme} from "../__components/utils/Theme";
import GlobalStyles from "../__components/utils/Global";

library.add(fab)


function App() {
  const [theme] = useState('dark');
    return( 
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles/>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          minHeight: '100vh',
        }}>
          <Ripple color="#1f89cf7a"/>
          <Flex mt={-70}>
              <Heading color="red" fontSize={3} paddingRight="1">We'r working hard to bring <Text color={'green'}>New Version</Text></Heading>
          </Flex>
          <Text color={'#158feb'} fontSize={24} mb={2}>Come back later. <span role="img" aria-label="smile">😊</span></Text>
          <Flex justifyContent="center">
          </Flex>
          <Flex flexWrap="nowrap" justifyContent="center">
          <Button as={Link} href="https://www.twitter.com/maulanaakurniaa" target="_blank" sx={{
            color: '#ffffff',
            backgroundColor: '#158feb',
            border: '1px solid #158feb',
            borderRadius: '7px',
            boxShadow: '0px 1px 0px rgba(20,70,32,0.1), inset 0px 2px 0px rgba(255,255,255,0.03)',
            ':hover' : {
              textDecoration: 'none',
              backgroundColor: '#42a8f5',
              boxShadow: '0px 1px 0px rgba(20,70,32,0.1), inset 0px 2px 0px rgba(255,255,255,0.03)',
              transform: 'translate3d(0, -2px, 0)',
              webkitTransform: 'translate3d(0, -2px, 0)'
            }
          }}>
            <FontAwesomeIcon icon={faTwitter} /> Twitter
          </Button>

          <Button mx={2} as={Link} href="https://github.com/maulanakurnia" target="_blank" sx={{
            color: '#ffffff',
            backgroundColor: '#383d42',
            border: '1px solid #24292E',
            borderRadius: '7px',
            boxShadow: '0px 1px 0px rgba(20,70,32,0.1), inset 0px 2px 0px rgba(255,255,255,0.03)',
            ':hover' : {
              textDecoration: 'none',
              backgroundColor: '#24292E',
              boxShadow: '0px 1px 0px rgba(20,70,32,0.1), inset 0px 2px 0px rgba(255,255,255,0.03)',
              transform: 'translate3d(0, -2px, 0)',
              webkitTransform: 'translate3d(0, -2px, 0)'
            }
          }}><MarkGithubIcon size={16} py={-12}/> Github</Button>

          <Button as={Link} href="https://instagram.com/maulanaakurniaa" target="_blank"sx={{
            ':hover' : {
            textDecoration: 'none',
            transform: 'translate3d(0, -2px, 0)',
            webkitTransform: 'translate3d(0, -2px, 0)'
            },
            borderRadius: '7px'
          }}>
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </Button>
          </Flex>
        </Box>
    </ThemeProvider>
    );
}

export default App;
