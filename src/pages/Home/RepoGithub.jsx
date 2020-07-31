import React, { Component } from "react";
import axios from "axios";
import { Box, Heading, Text, Flex } from "@primer/components";
import Card from '../../components/Card'
import Wrapper from '../../components/Wrapper';
import Container from '../../components/Container';

class RepoGithub extends Component { 
  constructor(){
    super();
    this.getRepos();
    this.getLangColor();
  }
  state = {
    repos: [],
    total: "",
    langColors: []  
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
  getLangColor = async () => {
    try{
      let data = await axios ({
        method: 'get',
        url: 'https://raw.githubusercontent.com/ozh/github-colors/master/colors.json'
      }).then(({data}) => data);
      this.setState({langColors: data})
    }catch(e){
      console.log(e);
    }
  }
  
  languageColor(lang) {
    return this.state.langColors[lang]
  }

  render() {
    return (
      <Box>
        <Heading
          as={Wrapper}
          mt={20}
          fontSize={30}
          fontWeight="700"
          >
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
          <Wrapper size={330}>
            {this.state.repos.map((repos)  => {
              return (
                <Card
                  key={repos.id}
                  title={repos.name}
                  description={repos.description}
                  language={repos.language}
                  langColors={this.languageColor(repos.language)}
                  onClick={() => window.open(repos.html_url, "_blank")}
                />
              );
            })}
          </Wrapper>
        </Container>
      </Box>
    );
  }
}

export default RepoGithub;
