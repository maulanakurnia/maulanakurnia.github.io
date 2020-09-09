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
        size="xs"
        textTransform="lowercase"
        variant="outline"
      >
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
