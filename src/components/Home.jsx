import React, { Component } from "react";
import {
  Box,
  Text,
  Flex,
  Heading,
  Avatar
} from "@primer/components";
import uImage from "../assets/img/bg.jpg";
import uAvatar from "../assets/img/profile.jpeg"
import ButtonComp from "./HomeComp/ButtonComp"
import Cover from './HomeComp/CoverComp';



class Home extends Component {
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
            <Heading as={Flex} color="white" justifyContent="center" mt={1} fontSize={30} fontWeight="bold" >Maulana Kurnia</Heading>
            <Text as={Flex} justifyContent="center" fontSize={15} color="grey" fontStyle="italic">IT Student at UPN "Veteran" Yogyakarta</Text>
            <ButtonComp/>
        </Box>
      </div>
    );
  }
}

export default Home;
