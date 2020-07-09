import React from 'react';
import { Button, Link, Flex} from "@primer/components";
import { faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ButtonComp = () => {
    return(
        <div>
        <Flex flexWrap="nowrap" justifyContent="center" mt={3}>
            <Button as={Link} href="https://www.twitter.com/maulanaakurniaa" target="_blank" sx={{
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
                }
            }}>
                <FontAwesomeIcon icon={faTwitter} /> Twitter
            </Button>

            <Button mx={2} as={Link} href="https://github.com/maulanakurnia" target="_blank" sx={{
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
                }
            }}><FontAwesomeIcon icon={faGithub}/> Github</Button>

            <Button as={Link} href="https://instagram.com/maulanaakurniaa" target="_blank"sx={{
                color: 'black',
                width: '80px',
                ':hover' : {
                textDecoration: 'none',
                transform: 'translate3d(0, -2px, 0)',
                webkitTransform: 'translate3d(0, -2px, 0)',
                },
                borderRadius: '7px'
            }}>
                <FontAwesomeIcon icon={faInstagram} /> Instagram
            </Button>
        </Flex>
        </div>
    )
}

export default ButtonComp;