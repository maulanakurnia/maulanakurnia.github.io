import React, {Component} from 'react';
import {Box, Text, Button, Flex, Heading} from '@primer/components';
import {ThemeProvider} from 'styled-components'
import {MarkGithubIcon} from   '@primer/octicons-react'
import { Ripple } from 'react-spinners-css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab)



const theme = {
  space : [0, 8, 16, 32, 64],
  fontSize : [10, 12, 16, 24, 48]
};

class App extends Component {
  render(){
    return( 
      <ThemeProvider theme={theme}>
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
            <Box>
              <Heading color={'white'} fontSize={4} paddingRight="1">We'r working hard to bring</Heading>
            </Box>
            <Box>
              <Heading fontSize={4} color={'green'}>New Version</Heading>
            </Box>
          </Flex>
          <Text color={'#158feb'} fontSize={24} mb={2}>Come back later. <span role="img" aria-label="smile">😊</span></Text>
          <Flex justifyContent="center">
          </Flex>
          <Flex flexWrap="nowrap" justifyContent="center">
          <Button sx={{
            color: '#ffffff',
            backgroundColor: '#158feb',
            border: '1px solid #158feb',
            borderRadius: '7px',
            boxShadow: '0px 1px 0px rgba(20,70,32,0.1), inset 0px 2px 0px rgba(255,255,255,0.03)',
            ':hover' : {
              backgroundColor: '#42a8f5',
              boxShadow: '0px 1px 0px rgba(20,70,32,0.1), inset 0px 2px 0px rgba(255,255,255,0.03)',
            }
          }}>
            <FontAwesomeIcon icon={faTwitter} /> Twitter
          </Button>

          <Button mx={2} sx={{
            color: '#ffffff',
            backgroundColor: '#24292E',
            border: '1px solid #24292E',
            borderRadius: '7px',
            boxShadow: '0px 1px 0px rgba(20,70,32,0.1), inset 0px 2px 0px rgba(255,255,255,0.03)',
            ':hover' : {
              backgroundColor: '#383d42',
              boxShadow: '0px 1px 0px rgba(20,70,32,0.1), inset 0px 2px 0px rgba(255,255,255,0.03)',
            }
          }}><MarkGithubIcon size={16} py={-12}/> Github</Button>

          <Button sx={{
            borderRadius: '7px'
          }}>
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </Button>
          </Flex>
        </Box>
    </ThemeProvider>
    );
  }
}

export default App;
