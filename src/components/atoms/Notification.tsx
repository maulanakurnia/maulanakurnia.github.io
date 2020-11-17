import {
  CloseButton,
  Stack,
  useColorModeValue,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useQueryState } from "next-usequerystate";

interface NotificationProps {
  content: string;
  icon?: React.ReactElement;
}

export const Notification = ({ content, icon }: NotificationProps) => {
  const [tag, setTag] = useQueryState("tags");
  const borderColorStack = useColorModeValue("blue.200", "blue.800");
  const bgStack = useColorModeValue("blue.50", "gray.800");
  const colorStack = useColorModeValue("blue.900", "blue.300");

  return (
    <Stack
      alignItems="center"
      bg={bgStack}
      borderColor={borderColorStack}
      borderWidth="1px"
      color={colorStack}
      fontSize="sm"
      isInline
      justifyContent="space-between"
      mb="10px"
      p={2}
      pl={3}
      rounded="md"
      spacing={3}
    >
      <Flex alignItems="center">
        <Text marginRight="10px">{icon}</Text>
        <Text fontSize={{ xs: "10px", sm: "12px", md: "14px" }}>{content}</Text>
      </Flex>
      <CloseButton
        aria-label="Clear"
        onClick={() => setTag(null)}
        rounded="full"
        size="sm"
      />
    </Stack>
  );
};
