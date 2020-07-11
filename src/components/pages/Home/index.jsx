import React, { Component, Fragment } from 'react';
import {
    Box,
    Text,
    Flex,
    Heading,
    Avatar,
  } from "@primer/components";
import Card from './HomeComp/Card';
import uImage from "../../../assets/img/compress/bg-min.jpg";
import uAvatar from "../../../assets/img/compress/profile-min.jpeg"
import ButtonSocial from "../../../containers/ButtonSocial"
import Cover from '../../../containers/Cover/';

// Aos
import AOS from 'aos';
import 'aos/dist/aos.css';

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
                <Cover imageUrl={uImage}/>
                <Box>
                    <Flex flexWrap="nowrap" justifyContent="center" sx={{ marginTop: '-100px' }}>
                        <Avatar size={200} src={uAvatar} sx={{  borderRadius: '50%', borderBottom: "2px solid #839296", borderLeft: "1px solid #839296", borderRight: "1px solid #839296"}}/>
                    </Flex>
                    <div data-aos='fade-up' data-smooth-scroll-offset="180" data-aos-easing="ease" data-aos-duration="4000" data-aos-delay="0">
                    <Heading as={Flex} justifyContent="center" mt={1} fontSize={30} fontWeight="700" sx={{

                    }}>Maulana Kurnia</Heading>
                    <Text as={Flex} justifyContent="center" fontSize={15} color="grey" fontStyle="italic">IT Student at UPN "Veteran" Yogyakarta</Text>
                    <ButtonSocial/>
                    <Card/>
                    </div>
                </Box>
            </Fragment>
        );
    }
}
 
export default Home;