import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { Box, Heading, Text, Flex } from "@primer/components";
import Card from '../../components/Card'

const Container = styled.div`
  justify-content: center;
  align-items: center;
  padding: 0px 300px 0px 450px;

  @media (min-width: 320px) and (max-width: 568px) {
    padding: 0px 300px 0px 80px;
  }
  @media (min-width: 411px) and (max-width: 568px) {
    padding: 0px 300px 0px 80px;
  }
  @media (max-width: 727px) {
    padding: 0px 300px 0px 60px;
  }
  @media (max-width: 768px) {
    padding: 0px 0px 0px 50px;
  }
  @media (min-width: 1024px) and (max-width: 1366px) {
    padding: 0px 0px 0px 10px;
  }
`;

class RepoGithub extends Component { 
  constructor(){
    super();
    this.getRepos();
  }
  state = {
    repos: [],
    total: "",
  };

  getRepos = async () => {
    try{
      let data = await axios ({
        method: 'get',
        url: 'https://api.github.com/users/maulanakurnia/repos'
      }).then(({data}) => data);
      this.setState({repos: data, total: data.length});
    }catch(err){
      console.log(err);
    }
  }

  render() {
    return (
      <Box>
        <Heading
          textAlign="center"
          fontSize={30}
          fontWeight="700"
          sx={{
            "@media screen and (min-width: 823px)": {
              marginTop: "200px",
            },
            "@media screen and (max-width: 823px)": {
              marginTop: "450px",
            },
          }}>
          My Repository
        </Heading>
        <Text
          as={Flex}
          justifyContent="center"
          fontSize={15}
          mb={30}
          fontWeight="bold">
          Total : {this.state.total}
        </Text>
        <Container>
          {this.state.repos.map((repos) => {
            return (
              <Card
                key={repos.id}
                title={repos.name}
                description={repos.description}
                language={repos.language}
                onClick={() => window.open(repos.html_url, "_blank")}
              />
            );
          })}
        </Container>
      </Box>
    );
  }
}

export default RepoGithub;
