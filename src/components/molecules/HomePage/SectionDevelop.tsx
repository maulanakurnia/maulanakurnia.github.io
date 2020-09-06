import { Text, Box } from "@chakra-ui/core";
import { CardGame } from "molecules/CardGame";
import { useContent } from "context/contentContext";

export const SectionDevelop = () => {
  const { myGame } = useContent();
  return (
    <>
      <Text fontSize="30px" fontWeight="600" mt={10}>
        Mainan Saya
      </Text>
      <Box m="20px">
        {myGame.map(({ color, title, icon, ...rest }) => (
          <CardGame
            aria-label={title}
            color={color}
            icon={icon}
            key={title}
            {...rest}
          />
        ))}
      </Box>
    </>
  );
};
