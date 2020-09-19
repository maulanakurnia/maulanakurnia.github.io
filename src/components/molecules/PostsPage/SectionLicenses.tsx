import { Text, Box, Link, Image } from "@chakra-ui/core";
import { HiOutlinePencilAlt } from "react-icons/hi";

export const SectionLicenses = ({editUrl}:any) => (
  <Box mb="1em" mt="2em">
    <Text fontSize="20px" fontWeight="600">
      Lisensi
    </Text>
    <Box display={["block", "flex"]} textAlign={["center", "start"]} mt="1em">
      <Link
        rel="license"
        href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
        isExternal
      >
        <Image
          alt="Lisensi Creative Commons"
          src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"
          mx="auto"
          mb={["1em", "0"]}
        />
      </Link>
      <Box fontSize="13px" ml={["0", "1em"]} mb={["1em", "0"]}>
        <Text as="span">This article is licensed under:</Text>
        <br></br>
        <Link
          rel="license"
          href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
          isExternal
        >
          Attribution-NonCommercial-ShareAlike International 4.0 (CC BY-NC-SA
          4.0)
        </Link>
      </Box>
      <Box ml="auto" justifyContent="flex-end" my="auto" fontSize="14px">
        <Link display="flex" justifyContent="center" href={editUrl} isExternal>
          <Text as="span" mt="0.2em" mr="0.5em">
            <HiOutlinePencilAlt />
          </Text>
          Edit on Github
        </Link>
      </Box>
    </Box>
  </Box>
);
