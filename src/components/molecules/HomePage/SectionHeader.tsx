import { Box, Flex, Heading, Text } from "@chakra-ui/core";
import { SectionSocial } from "./SectionSocial";
import { css } from "@emotion/core";
export const SectionHeader = () => (
  <>
    <Box
      backgroundAttachment="fixed"
      backgroundPosition="center center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      borderBottomWidth="1px"
      css={css`
        background-image: url(/images/bg-min.jpg);
      `}
      display="block"
      h={"calc(30vh)"}
      minHeight={300}
      objectFit="cover"
      w="100%"
    />
    <Flex justifyContent="center">
      <Box
        backgroundSize="200px"
        borderRadius="50%"
        borderWidth="1px"
        css={css`
          background-image: url(/images/profile-min.jpg);
        `}
        display="flex"
        h={200}
        mt="-100px"
        w={200}
      />
    </Flex>
    <Flex direction="column" p={3} textAlign="center">
      <Heading as="h1" fontSize="20px">
        Maulana Kurnia
      </Heading>
      <Text as="span" fontSize="13px" fontStyle="italic">
        IT Student at UPN “Veteran” Yogyakarta
      </Text>
    </Flex>
    <SectionSocial />
  </>
);
