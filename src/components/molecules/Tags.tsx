import React from "react";
import { Flex, FlexProps, ButtonProps, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { Badge } from "atoms/Badge";
export interface TagProps extends ButtonProps {
  name: string;
}

export const Tag: React.FC<TagProps> = ({ name, ...props }) => {
  return (
    <Badge {...props} className="tags">
      <NextLink href={`/blog?tags=${name}`}>
        <Text as="span">{name}</Text>
      </NextLink>
    </Badge>
  );
};

export interface TagsProps extends FlexProps {
  tags?: string[];
  tagProps?: TagProps;
}

export const Tags: React.FC<TagsProps> = ({
  tags,
  tagProps = {},
  ...props
}) => {
  if (!tags || tags.length === 0) {
    return null;
  }
  return (
    <Flex alignItems="center" flexWrap="wrap" m="-2px" {...props}>
      {tags.map((tag) => (
        <Tag key={tag} mb={2} mr={1} name={tag} {...tagProps} />
      ))}
    </Flex>
  );
};
