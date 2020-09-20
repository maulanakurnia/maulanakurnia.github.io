import { Text, Box, Link, Image } from "@chakra-ui/core";
import { HiOutlinePencilAlt } from "react-icons/hi";

export const SectionLicenses = ({ editUrl }: any) => (
  <Box mb="1em" mt="2em">
    <Text fontSize="20px" fontWeight="600">
      Lisensi
    </Text>
    <Box
      display={{ xs: "block", lg: "flex" }}
      mt="1em"
      textAlign={{ xs: "center", lg: "start" }}
    >
      <Link
        href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
        isExternal
        rel="license"
      >
        <Image
          alt="Lisensi Creative Commons"
          mb={["1em", "0"]}
          mx="auto"
          src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"
        />
      </Link>
      <Box fontSize="13px" mb={["1em", "0"]} ml={["0", "1em"]}>
        <Text as="span">This article is licensed under:</Text>
        <br></br>
        <Link
          href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
          isExternal
          rel="license"
        >
          Attribution-NonCommercial-ShareAlike International 4.0 (CC BY-NC-SA
          4.0)
        </Link>
      </Box>
      <Box
        fontSize="14px"
        justifyContent="flex-end"
        ml="auto"
        mt="1em"
        my="auto"
      >
        <Link display="flex" href={editUrl} isExternal justifyContent="center">
          <Text as="span" mr="0.5em" mt="0.2em">
            <HiOutlinePencilAlt />
          </Text>
          Edit on Github
        </Link>
      </Box>
    </Box>
  </Box>
);
