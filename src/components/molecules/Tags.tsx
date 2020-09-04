import React from "react";
import { Flex, FlexProps, Button, ButtonProps, useColorModeValue } from "@chakra-ui/core";
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
    return <Button _hover={{ cursor: "pointer", bg: "#2e7ad1", color: useColorModeValue('white','black'), border: 'none' }}
    _focus={{outline: 'none'}}
    textTransform="lowercase"
    size="xs"
    variant="outline"
    mr={2} {...props}>{name}</Button>;
  }
  return (
    <NextLink href={`/blog?tags=${name}`}>
      <Button
        {...props}
        _hover={{ cursor: "pointer", bg: "#2e7ad1", color: useColorModeValue('white','black'), border: 'none' }}
        _focus={{outline: 'none'}}
        textTransform="lowercase"
        size="xs"
        variant="outline"
        mr={2}
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
