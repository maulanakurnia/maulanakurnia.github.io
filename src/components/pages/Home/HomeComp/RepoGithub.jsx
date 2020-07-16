import React, {Component, Fragment} from "react";
import styled from "styled-components";
import axios from 'axios';
import { Box, Heading, Text,Flex, Link} from "@primer/components";
import Moment from 'react-moment';

const CardWrapper = styled.div`
  background: ${props => props.bg};
  width: 350px;
  /* margin: auto; */
  padding-bottom: 20px;
  border-radius: ${props => props.borderRadius}px;
  margin: 0px 0px 10px 10px;
  display: inline-block;
  /* position: relative; */
  @media only screen and (min-width: 360px){
    width: 250px;
  }
  @media only screen and (min-width: 992px){
    width: 350px;
  }
  &:hover{
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: ${props =>
    `${props.borderRadius}px ${props.borderRadius}px 0 0`};
`;

const Title = styled.h3`
  color: ${props => props.titleColor};
  margin: 0;
  padding-left: 15px;
`;

const Language = styled.p`
  color: #000000;
  margin: 0;
  padding: 0px 0px 15px 15px;
  font-style: italic;
  /* padding-top: -15px; */
`;
const Description = styled.p`
  color: ${props => props.textColor};
  padding: 0px 15px;
  margin: 0;
`;

const ExtraContent = styled.div`
  max-width: 100%;
  min-height: 0!important;
  -webkit-box-flex: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
  border-top: 1px solid rgba(0,0,0,.05)!important;
  position: static;
  background: 0 0;
  width: auto;
  margin: 0 0;
  padding: 10px 0px 0px 10px;
  font-size: 13px;
  top: 0;
  left: 0;
  color: rgba(0,0,0,.4);
  box-shadow: none;
  -webkit-transition: color .1s ease;
  transition: color .1s ease;
`;
const Card = ({
  image,
  title,
  language,
  description,
  titleColor,
  textColor,
  borderRadius,
  created,
  ...props
}) => (
  <CardWrapper borderRadius={borderRadius} {...props}>
    <Image src={image} borderRadius={borderRadius} alt={title} />
    <Title titleColor={titleColor}>{title}</Title>
    <Language>{language}</Language>
    <Description textColor={textColor}>{description}</Description>
    <ExtraContent><Moment sx={{color: 'red'}}>{created}</Moment></ExtraContent>
  </CardWrapper>
);

Card.defaultProps = {
  bg: "white",
  titleColor: "#1982c4",
  textColor: "#999",
  borderRadius: 9
};

class RepoGithub extends Component {
  state = {
    repos: [],
    longeur: '',
  }
  componentDidMount(){
    // getPostAPI = () => {
        axios.get('https://api.github.com/users/maulanakurnia/repos')
        .then((result) => { //parameter result penamaannya bebas...
          // console.log(result);
          this.setState({
            repos: result.data,
            longeur: result.data.length
          })
        })
    // }

  }

  render(){
    return(
      <Fragment>
        <Heading textAlign="center" fontSize={30} fontWeight="700" sx={{
            '@media screen and (min-width: 823px)': {
            // marginBottom: "100px",
            marginTop: '200px'
            },
            '@media screen and (max-width: 823px)': {
            // marginBottom: '20px',
            marginTop: '450px'
            }
        }}>My Repository</Heading>
        <Text as={Flex} justifyContent="center" fontSize={15} mb={30} color="grey">Total : {this.state.longeur}</Text>
        <Box sx={{  display: 'inline-block',
                        justifyContent: 'center!important',

                        '@media screen and (min-width: 320px) and (max-width: 568px)': {
                        position:"absolute",
                        left: '15%',
                        transform: 'translate(-5%, -0%)',
                        },
                        '@media screen and (min-width: 360px) and (max-width: 640px)': {
                        position:"absolute",
                        left: '25%',
                        transform: 'translate(-15%, -0%)',
                        },
                        '@media screen and (min-width: 411px) and (max-width: 731px)': {
                        position:"absolute",
                        left: '25%',
                        transform: 'translate(-10%, -0%)',
                        },
                        '@media screen and (min-width: 732px)': {
                        position:"absolute",
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        },
                        '@media screen and (min-width: 768px) and (max-width: 1024px)': {
                        position:"absolute",
                        left: '5%',
                        transform: 'translate(2%, -0%)',
                        },
                        '@media screen and (min-width: 1024px) and (max-width: 1366px)': {
                        position:"absolute",
                        left: '12%',
                        transform: 'translate(-0%, -50%)',
                        } }}>
          {
            this.state.repos.map(repos => {
              return (
                <Card key = {repos.id} 
                      image="https://www1.bournemouth.ac.uk/sites/default/files/assets/images/student-project-bank-summary.jpg" 
                      title={repos.name} 
                      language={repos.language} 
                      created={repos.created_at}
                      onClick={() => window.location.href=repos.html_url}/>
                );
            })
          }
          </Box>
      </Fragment>
    );
  }
}

export default RepoGithub;