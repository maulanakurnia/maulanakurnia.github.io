import { Text, Box, Link } from "@chakra-ui/core";
import Image from "molecules/Image";
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
          mx="auto"
          src="licenses.png"
          width="88px"
          my="0px"
        />
      </Link>
      <Box fontSize="13px" ml={["0", "1em"]}>
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
