import React, { Component, Fragment } from 'react';
import { Box, Text, Flex, Heading } from "@primer/components";
import Card from './Card';
import ButtonSocial from "../../components/ButtonSocial"
import Cover from '../../components/Cover';
import RepoGithub from './RepoGithub';
import Avatar from '../../components/Avatar';
import Wrapper from '../../components/Wrapper'

// Link Image
import cover from "../../images/bg-min.jpg";
import avatar from "../../images/profile-2.jpg"
// Aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../../components/Footer';

class Home extends Component {
    componentDidMount(){	
        document.title = "Maulana Kurnia";	
        AOS.init({	
          duration : 2000	
        })	
      }
    render() { 
        return (  
            <Fragment>
                <Cover imageUrl={cover}/>
                <Box>
                    <Flex flexWrap="nowrap" justifyContent="center" sx={{ marginTop: '-100px' }}>
                        <Avatar imageUrl={avatar}/>
                    </Flex>
                    <div data-aos='fade-up' data-smooth-scroll-offset="180" data-aos-easing="ease" data-aos-duration="4000" data-aos-delay="0">
                        <Heading as={Wrapper} mt={1} fontSize={30} fontWeight="700">Maulana Kurnia</Heading>
                        <Text as={Wrapper} mb={2} fontSize={15} color="grey" fontStyle="italic">IT Student at UPN "Veteran" Yogyakarta</Text>
                        <ButtonSocial/>
                        <Card/>
                        <RepoGithub/>
                        <Footer/>
                    </div>
                </Box>
            </Fragment>
        );
    }
}
 
export default Home;