import React from 'react'
import styled from 'styled-components'
import {Text} from "@primer/components";

const FooterWrapper = styled.footer`
  /* background: ${({ theme }) => theme.body}; */
  background: #272727;
  border-top: 1px solid rgba(0,0,0,.05)!important;
  margin-top: 50px;
  padding: 20px 10px 20px 0px;
  text-align: center;
`


const FooterLink = styled.a`
  /* color: ${({ theme }) => theme.text}; */
  color: white;
  text-decoration: none;
  text-align: center;
  font-size: 16px;
  @media (max-width: 1024px){
      font-size: 12px;
  }
`

class Footer extends React.Component {
  render() {
    return (
      <FooterWrapper>
            <FooterLink>Copyright © {new Date().getFullYear()} <Text fontWeight="900">Maulana Kurnia</Text> All Rights Reserved.</FooterLink>
      </FooterWrapper>
    )
  }
}


export default Footer