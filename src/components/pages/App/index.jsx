import React, { Component } from "react";
import {
  Box,
  Text,
  Flex,
  Heading,
  Avatar,
//   CircleBadgeProps
} from "@primer/components";
import uImage from "../../../assets/img/compress/bg-min.jpg";
import uAvatar from "../../../assets/img/compress/profile-min.jpeg"
import ButtonComp from "../../../containers/ButtonSocial"
import Cover from '../../../containers/Cover/CoverComp';
import CardComp from "../../../containers/Card";
import AOS from 'aos';
import 'aos/dist/aos.css';

class Home extends Component {
  componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }

  render() {
    return (
      <div>
        <Cover imageUrl={uImage}/>
        <Box>
            <Flex flexWrap="nowrap" justifyContent="center" sx={{ marginTop: '-100px' }}>
                <Avatar size={200} src={uAvatar} sx={{  borderRadius: '50%',
                                                        borderBottom: "2px solid #839296",
                                                        borderLeft: "1px solid #839296",
                                                        borderRight: "1px solid #839296"}}>
                </Avatar>
            </Flex>
            <div data-aos='fade-up' data-smooth-scroll-offset="180" data-aos-easing="ease" data-aos-duration="4000" data-aos-delay="0">
              <Heading as={Flex} color="white" justifyContent="center" mt={1} fontSize={30} fontWeight="700" sx={{

              }}>Maulana Kurnia</Heading>
              <Text as={Flex} justifyContent="center" fontSize={15} color="grey" fontStyle="italic">IT Student at UPN "Veteran" Yogyakarta</Text>
              <ButtonComp/>
            </div>
            <div data-aos='fade-up' data-smooth-scroll-offset="180" data-aos-easing="ease" data-aos-duration="4000" data-aos-delay="1100">
              <Heading color="white" textAlign="center" mt={50} fontSize={30} fontWeight="700" sx={{
                '@media screen and (min-width: 823px)': {
                  marginBottom: "100px"
                },
                '@media screen and (max-width: 823px)': {
                  marginBottom: '20px'
                }

              }}>My Game</Heading>
              <CardComp/>
            </div>
        </Box>

      </div>
    );
  }
}

export default Home;
