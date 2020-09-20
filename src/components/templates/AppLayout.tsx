import Head from "next/head";
import { myGame, projects } from "data/index";
import { Header, Footer } from "organisms/index";
import { ChakraProvider, Box } from "@chakra-ui/core";
import { GlobalStyle, theme } from "templates/index";
import { ContentProvider } from "context/contentContext";
export function AppLayout({ children }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <ContentProvider myGame={myGame} myProject={projects}>
        <GlobalStyle />
        <Header />
        <Box as="main" className="main" minHeight="84vh">
          {children}
        </Box>
        <Footer />
      </ContentProvider>
    </ChakraProvider>
  );
}
