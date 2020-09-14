import React from "react";
import {
  Flex,
  FlexProps,
  Button,
  ButtonProps,
  Text,
  useColorModeValue,
} from "@chakra-ui/core";
import NextLink from "next/link";
import { AiFillTags } from "react-icons/ai";
export interface TagProps extends ButtonProps {
  name: string;
  interactive?: boolean;
}

export const Tag: React.FC<TagProps> = ({
  name,
  interactive = true,
  ...props
}) => {
  if (!interactive) {
    return (
      <Text
        fontSize={{ xs: "10px", sm: "12px", md: "14px" }}
        fontWeight="700"
        ml={1}
      >
        {name}
      </Text>
    );
  }

  return (
    <NextLink href={`/blog?tags=${name}`}>
      <Button
        {...props}
        _focus={{ outline: "none" }}
        _hover={{ cursor: "pointer", bg: "#004ba0", color: "#fff" }}
        color={useColorModeValue("#000", "#929497")}
        mr={2}
        size="13px"
        fontSize="13px"
        px="5px"
        py="2px"
        my="auto"
        textTransform="lowercase"
        variant="outline"
      >
          <Text as="span" mr="5px">
            <AiFillTags />
          </Text>
        {name}
      </Button>
    </NextLink>
  );
};

export interface TagsProps extends FlexProps {
  interactive?: boolean;
  tags?: string[];
  tagProps?: TagProps;
}

export const Tags: React.FC<TagsProps> = ({
  tags,
  interactive = true,
  tagProps = {},
  ...props
}) => {
  if (!tags || tags.length === 0) {
    return null;
  }
  return (
    <Flex alignItems="center" flexWrap="wrap" m="-2px" {...props}>
      {tags.map((tag) => (
        <Tag
          interactive={interactive}
          key={tag}
          mb={2}
          name={tag}
          {...tagProps}
        />
      ))}
    </Flex>
  );
};
