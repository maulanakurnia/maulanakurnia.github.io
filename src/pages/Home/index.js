import React, { Component} from 'react';
import { Cover, Container, Avatar, Grid, Button, Heading, CardGame, Flex, Footer} from '../../components'
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { DiJavascript1, DiPhp, DiReact, DiSass, DiLinux, DiGit } from "react-icons/di";
import RepoGithub from './RepoGithub';
// Link 
import cover from '../../assets/images/bg-min.jpg'
import avatar from "../../assets/images/profile-2-min.jpg"
export default class Home extends Component {

    componentDidMount() {
        document.title = "Maulana Kurnia"
    }

    render() {
        return ( 
            <React.Fragment >
                <Cover Href={cover}/> 
                <Flex justifyContent="center" flexWrap="nowrap"><Avatar Href={avatar} mt={-100} /></Flex>
                <Heading textAlign="center">Maulana Kurnia</Heading>
                <Heading textAlign="center" fontStyle="italic" fontSize={13}>IT Student at UPN "Veteran" Yogyakarta</Heading>
                <Flex justifyContent="center" mt={12}>
                    <Button primary onClick={()=> window.open("https://twitter.com/maulanaakurniaa", "_blank")}><FaTwitter/>Twitter</Button>            
                    <Button onClick={() => window.open("https://instagram.com/maulanaakurniaa", "_blank")}><FaInstagram/>Instagram</Button>            
                    <Button dark onClick={()=> window.open("https://github.com/maulanakurnia", "_blank")}><FaGithub/>Github</Button>            
                </Flex>
                <Container>
                    <Heading textAlign="center" mt={20}>My Game</Heading>
                    <Grid justifyContent="center" size={131}>
                        <CardGame color="#020202" svg={<DiLinux as={"svg"} size={80}/> }/>
                        <CardGame color="#e94e32" svg={<DiGit as={"svg"} size={80} color={"#e94e32"}/> }/>
                        <CardGame color="#ffd861" svg={<DiJavascript1 as={"svg"} size={80} color={"#ffd861"}/> }/>
                        <CardGame color="#4d598f" svg={<DiPhp as={"svg"} size={80} color={"#4d598f"}/> }/>
                        <CardGame color="#61dafb" svg={<DiReact as={"svg"} size={80} color={"#61dafb"}/> }/>
                        <CardGame color="#c76495" svg={<DiSass as={"svg"} size={80} color={"#c76495"}/> }/>
                    </Grid>
                    <RepoGithub/>
                </Container> 
                <Footer/>
            </React.Fragment>
        )
    }
}