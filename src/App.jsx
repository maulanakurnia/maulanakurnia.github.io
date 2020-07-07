import React, {Component} from 'react';
import './App.css';
import { Ripple } from 'react-spinners-css';
import styled, {ThemeProvider,css} from 'styled-components';
import 'semantic-ui-css/semantic.min.css'
import ButtonSocial from './component/Button';
import Global from './component/Global';
import px2vw from './component/utils/px2vw';

const theme = {
  twitter: '#55ACEE',
  github: '#3a3a3a',
  instagram: '#49769C',
  primary: '#55ACEE',
  secondary: 'green',
  alert: 'yellow',
  red: 'red',
  font: 'sans-serif'
}

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${px2vw(32)};
  max-width: 100%;

  // @media (min-width: 1024px) {
  //   flex-wrap: nowrap;
  // }
  // @media (min-width: 768px) {
  //   width: ${px2vw(320, 768)};
  //   min-height: ${px2vw(200, 768)};
  //   height: 100%;
  // }

  // @media (min-width: 1024px) {
  //   width: ${px2vw(500)};
  //   min-height: ${px2vw(300)};
  //   height: 100%;
  // }
`;

const Title = styled.span`
${(props) => 
  props.color &&
  css`
      color: ${(props) => props.theme[props.color]}!important;
`};
  position: relative;
  display: inline-block;
  // font-weight: bold;
`;

const Titlec = styled.span`
${(props) => 
  props.color &&
  css`
      color: ${(props) => props.theme[props.color]}!important;
`};
  position: relative;
  display: inline-block;
  font-weight: bold;
`;


const Desc = styled.p`
  margin-top: -1rem;
  margin-bottom: 4rem;
  // font-style: italic;
  color: #1f88cf;
  // font-size: ${px2vw(26)};
`;

const AppHeader = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;


class App extends Component {
  render(){
    return( 
      <div>
      <Global/>
          <AppHeader>
              <Ripple color="#1f88cf"/>
              <Container>
            <ThemeProvider theme={theme}>
              <Title color="primary">We'r working hard to bring <Titlec color="red">New Version</Titlec></Title>
              <br/>
            </ThemeProvider>
              </Container>
              <Desc>Come back later. <span role="img" aria-label='smile'>😊</span> </Desc>
              <ButtonSocial/>
          </AppHeader>
        </div>
    );
  }
}

export default App;
