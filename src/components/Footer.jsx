import React from 'react'
import styled from 'styled-components'
import {Link,Text} from "@primer/components";

const FooterWrapper = styled.footer`
  background: #1f2326;
  border-top: 1px solid rgba(0,0,0,.05)!important;
  margin-top: 50px;
  padding: 20px 10px 20px 0px;
  text-align: center;
`

class Footer extends React.Component {
  render() {
    return (
      <FooterWrapper>
            <Text color="#ffffff">Copyright © {new Date().getFullYear()} <Link onClick={()=> window.open('https://instagram.com/maulanaakurniaa', '_blank')} style={{color: '#ffffff', textDecoration:"none", cursor: 'pointer'}} fontWeight="900">Maulana Kurnia</Link> All Rights Reserved.</Text>
      </FooterWrapper>
    )
  }
}


export default Footer