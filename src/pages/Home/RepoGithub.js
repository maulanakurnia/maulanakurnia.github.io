import React, { Component, Fragment } from "react";
import axios from "axios";
import { Box, Heading, Text, RepoGithub as RepoGithubStyle, Container, Grid, Button } from "../../components";
import paginate from "paginate-array";
class RepoGithub extends Component { 
  constructor(props){
    super(props);

    this.state = {
      repos: [],
      total: "",
      size: 0,
      page: 1,
      currPage: null,
      langColors: [],
      show: false
    };
  }
  getRepos = async () => {
        axios.get('https://api.github.com/users/maulanakurnia/repos')
             .then((res) => {
               const { page } = this.state;
               const currPage = paginate(res.data, page, res.data.length/2);  
                this.setState({
                  ...this.state,
                  repos: res.data, 
                  total: res.data.length,
                  currPage
                })
             });
             
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

  handleChange = (e) => {
    const { repos, show } = this.state; // todos 199

    const newSize = + e;
    const newPage = 1;
    const newCurrPage = paginate(repos, newPage, newSize);

    this.setState({
      ...this.state,
      size: newSize,
      page: newPage,
      currPage: newCurrPage,
      show: !show
    });
  }

  render() {
    const {total, currPage, show } = this.state;
    return (
      <Box>
        <Heading as={Grid} mt={20} fontSize={30} fontWeight="700" justifyContent="center">My Repository</Heading>
        <Text as={Grid} justifyContent="center" fontSize={15} mb={30} fontWeight="bold"> Total : {total} </Text>
        <Container>
          <Grid size={315} justifyContent="center">
            { currPage && (
              <Fragment>
                {currPage.data.map((repos) => (
                  <RepoGithubStyle
                  key={repos.id}
                  title={repos.name}
                  description={repos.description}
                  language={repos.language}
                  langColors={this.languageColor(repos.language)}
                  onClick={() => window.open(repos.html_url, "_blank")}
                />
                ))}
              </Fragment>
            )}
          </Grid>
          <Grid justifyContent="center">
            <Button onClick={()=>this.handleChange(show ? total/2 : total)}>{show ? 'tampilkan lebih sedikit' : 'tampilkan lebih banyak'}</Button>
          </Grid>
        </Container>
      </Box>
    );
  }
}

export default RepoGithub;
