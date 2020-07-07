import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import styled from 'styled-components';
import Ripple from '@bit/joshk.react-spinners-css.ripple';
import ButtonSocial from './component/Button';

const Title = styled.h1`
  color: #cfc61f;
`;

const Desc = styled.p`
  margin-top: -1rem;
  margin-bottom: 4rem;
  // font-style: italic;
  color: #1f88cf;
  font-size: 21px;
`;


class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
            <Ripple color="#1f88cf"/>
            <Title>We'r working hard to bring new version.</Title>
            <Desc>Come back later. <span role="img" aria-label='smile'>😊</span> </Desc>
            <ButtonSocial/>
        </header>
      </div>
    );
  }
}

export default App;
