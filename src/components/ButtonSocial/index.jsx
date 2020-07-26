import React from 'react';
import { Button, Link, Flex} from "@primer/components";
import { faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ButtonComp = () => {
    return(
        <Flex flexWrap="nowrap" justifyContent="center" mt={3}>
            <Button as={Link} onClick={()=> window.open("https://twitter.com/maulanaakurniaa", "_blank")} sx={{
                color: '#ffffff',
                backgroundColor: '#158feb',
                border: '1px solid #158feb',
                borderRadius: '7px',
                boxShadow: '0px 1px 0px rgba(20,70,32,0.1), inset 0px 0px 0px rgba(255,255,255,0.03)',
                width: '80px',
                ':hover' : {
                textDecoration: 'none',
                backgroundColor: '#42a8f5',
                boxShadow: '0px 1px 0px rgba(20,70,32,0.1), inset 0px 2px 0px rgba(255,255,255,0.03)',
                transform: 'translate3d(0, -2px, 0)',
                webkitTransform: 'translate3d(0, -2px, 0)'
                },
                '@media only screen and (min-device-width : 320px) and (max-device-width : 320px)': {
                    width: '70px',
                }
            }}>
                <FontAwesomeIcon icon={faTwitter} /> Twitter
            </Button>

            <Button mx={2} as={Link} onClick={()=> window.open("https://github.com/maulanakurnia", "_blank")}  sx={{
                color: '#ffffff',
                backgroundColor: '#383d42',
                border: '1px solid #24292E',
                borderRadius: '7px',
                boxShadow: '0px 1px 0px rgba(20,70,32,0.1), inset 0px 0px 0px rgba(255,255,255,0.03)',
                width: '80px',
                ':hover' : {
                textDecoration: 'none',
                backgroundColor: '#24292E',
                boxShadow: '0px 1px 0px rgba(20,70,32,0.1), inset 0px 0px 0px rgba(255,255,255,0.03)',
                transform: 'translate3d(0, -2px, 0)',
                webkitTransform: 'translate3d(0, -2px, 0)'
                },
                '@media only screen and (min-device-width : 320px) and (max-device-width : 320px)': {
                    width: '70px',
                }
            }}><FontAwesomeIcon icon={faGithub}/> Github</Button>

            <Button as={Link} onClick={() => window.open("https://instagram.com/maulanaakurniaa", "_blank")} sx={{
                color: 'black',
                width: '80px',
                ':hover' : {
                textDecoration: 'none',
                transform: 'translate3d(0, -2px, 0)',
                webkitTransform: 'translate3d(0, -2px, 0)',
                },
                borderRadius: '7px',
                '@media only screen and (min-device-width : 320px) and (max-device-width : 320px)': {
                    width: '70px',
                    paddingRight: '20px',
                    paddingLeft: '10px'
                }
            }}>
                <FontAwesomeIcon icon={faInstagram} /> Instagram
            </Button>
        </Flex>
    )
}

export default ButtonComp;