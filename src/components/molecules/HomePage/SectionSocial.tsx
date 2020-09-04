import { Stack, Button, useColorModeValue } from "@chakra-ui/core";
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

export const SectionSocial = () => {
const textColor = useColorModeValue("#000", "#929497");
  return (
    <Stack direction="row" justifyContent="center" spacing={2}>
      <Button
        _hover={{ bg: "#004ba0", color: "white" }}
        variant="outline"
        color={textColor}
        borderRadius={3}
        leftIcon={<FaTwitter />}
        onClick={() =>
          window.open("https://www.twitter.com/maulanaakurniaa", "_blank")
        }
        size="sm"
      >
        twitter
      </Button>
      <Button
        _hover={{ bg: "gray.300", color: "black" }}
        variant="outline"
        color={textColor}
        borderRadius={3}
        leftIcon={<FaInstagram />}
        onClick={() =>
          window.open("https://www.instagram.com/maulanaakurniaa", "_blank")
        }
        size="sm"
      >
        Instagram
      </Button>
      <Button
        _hover={{ bg: "#24292e", color: "white" }}
        variant="outline"
        color={textColor}
        borderRadius={3}
        leftIcon={<FaGithub />}
        onClick={() =>
          window.open("https://www.github.com/maulanakurnia", "_blank")
        }
        size="sm"
      >
        Github
      </Button>
    </Stack>
  );
};
