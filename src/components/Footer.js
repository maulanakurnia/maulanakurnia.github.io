import React from 'react'
import styled from 'styled-components'
import Text from './Text';

const FooterWrapper = styled.footer`
  background: ${({theme}) => theme.body};
  border-top: 1px solid rgba(0,0,0,.05)!important;
  margin-top: 50px;
  padding: 20px 10px 20px 0px;
  text-align: center;
  color: ${({theme}) => theme.text};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`

const Footer = () => {
    return (
      <FooterWrapper>
            <Text>Copyright © {new Date().getFullYear()} <Text onClick={()=> window.open('https://instagram.com/maulanaakurniaa', '_blank')} style={{textDecoration:"none", cursor: 'pointer'}} fontWeight="900">Maulana Kurnia</Text> All Rights Reserved.</Text>
      </FooterWrapper>
    )
}


export default Footer