import React, { Component } from "react";
import axios from "axios";
import { Box, Heading, Text, RepoGithub as RepoGithubStyle, Container, Grid } from "../../components";

class RepoGithub extends Component { 
  constructor(props){
    super(props);

    this.state = {
      repos: [],
      total: "",
      langColors: []  
    };
  }
  getRepos = async () => {
        axios.get('https://api.github.com/users/maulanakurnia/repos')
             .then((res) => this.setState({repos: res.data, total: res.data.length}));
  }

  getLangColor = async () => {
      axios.get('https://raw.githubusercontent.com/ozh/github-colors/master/colors.json')
           .then((res) => this.setState({langColors: res.data}));
  }
  componentDidMount(){
      this.getRepos();
      this.getLangColor();
  }

  
  languageColor(lang) {
    return this.state.langColors[lang]
  }

  render() {
    const {repos, total } = this.state;
    return (
      <Box>
        <Heading as={Grid} mt={20} fontSize={30} fontWeight="700" justifyContent="center">My Repository</Heading>
        <Text as={Grid} justifyContent="center" fontSize={15} mb={30} fontWeight="bold"> Total : {total} </Text>
        <Container>
          <Grid size={315} justifyContent="center">
            {repos.map((repos)  => {
              return (
                <RepoGithubStyle
                  key={repos.id}
                  title={repos.name}
                  description={repos.description}
                  language={repos.language}
                  langColors={this.languageColor(repos.language)}
                  onClick={() => window.open(repos.html_url, "_blank")}
                />
              );
            })}
          </Grid>
        </Container>
      </Box>
    );
  }
}

export default RepoGithub;
