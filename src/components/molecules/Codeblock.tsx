import React, { useState } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import nightOwlLight from "prism-react-renderer/themes/nightOwlLight";
import nightOwl from "prism-react-renderer/themes/nightOwl";
import {
  Box,
  Button,
  ButtonProps,
  useClipboard,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { MdContentCopy, MdContentPaste } from "react-icons/md";

const CopyButton = (props: ButtonProps) => (
  <Button
    _focus={{ outline: "none" }}
    _hover={{ bg: useColorModeValue("#f4f4f4", "#1d1f1f") }}
    bg={useColorModeValue("#f6f8fa", "#27292e")}
    border={useColorModeValue("1px solid #dadce0", "1px solid rgb(39, 41, 46)")}
    css={{ ":hover": { ".text-copy": { display: "flex" } } }}
    display="none"
    fontSize="13px"
    padding="5px"
    position="absolute"
    right="0.3em"
    size="sm"
    textTransform="uppercase"
    top={5.5}
    zIndex="1"
    {...props}
  />
);

const Codeblock = (props: any) => {
  const { className, render, children, ...rest } = props;
  const [editorCode] = useState(children.trim());
  const language = className && className.replace(/language-/, "");
  const { hasCopied, onCopy } = useClipboard(editorCode);
  const theme = useColorModeValue(nightOwlLight, nightOwl);
  const customProps = {
    theme,
    language,
    code: editorCode,
    ...rest,
  };
  const Border = useColorModeValue(
    "1px solid #dadce0",
    "1px solid rgb(39, 41, 46)"
  );
  if (language !== "bash" && language !== undefined) {
    return (
      <Highlight {...defaultProps} {...customProps}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Box position="relative">
            <Box
              as="pre"
              bg="transparent!important"
              border={Border}
              borderRadius="6px"
              className={className}
              css={{
                ":hover": {
                  ".copy": {
                    display: "flex",
                  },
                },
                "::-webkit-scrollbar": {
                  width: "5px",
                  height: "7px",
                  backgroundColor: "transparent!important",
                },
                "::-webkit-scrollbar-thumb": {
                  backgroundColor: "darkgrey",
                  borderRadius: "6px",
                },
              }}
              m="1em 0"
              maxH={["320px", "736px"]}
              overflow="auto"
              p="0.5em"
              style={style}
            >
              {tokens.map((line, i) => (
                <Box
                  display="table-row"
                  key={i}
                  {...getLineProps({ line, key: i })}
                  fontSize={["14px", "16px"]}
                >
                  <Text
                    as="span"
                    borderRight={Border}
                    display="table-cell"
                    opacity="0.6"
                    paddingLeft="0.5em"
                    paddingRight="1em"
                    userSelect="none"
                  >
                    {i + 1}
                  </Text>
                  <Text as="span" display="table-cell" pl="0.5em">
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </Text>
                </Box>
              ))}
              <CopyButton className="copy" onClick={onCopy}>
                {hasCopied ? (
                  <Text as="span" display="flex">
                    <MdContentPaste />
                    <Text ml="0.5em">Berhasil Di copy</Text>
                  </Text>
                ) : (
                  <Text as="span" display="flex">
                    <MdContentCopy />
                    <Text className="text-copy" display="none" ml="0.5em">
                      Copy
                    </Text>
                  </Text>
                )}
              </CopyButton>
            </Box>
          </Box>
        )}
      </Highlight>
    );
  }
  return (
    <Highlight {...defaultProps} {...customProps}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Box position="relative">
          <Box
            as="pre"
            bg="transparent!important"
            border={Border}
            borderRadius="6px"
            className={className}
            css={{
              ":hover": {
                ".copy": {
                  display: "flex",
                },
              },
            }}
            m="1em 0"
            overflow="auto"
            p="0.5em"
            style={style}
          >
            {tokens.map((line, i) => (
              <Box
                display="table-row"
                fontSize={["14px", "16px"]}
                key={i}
                {...getLineProps({ line, key: i })}
              >
                <Text as="span" display="table-cell" ml="0.5em" pl="0.5em">
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </Text>
              </Box>
            ))}
            <CopyButton className="copy" onClick={onCopy}>
              {hasCopied ? (
                <Text as="span" display="flex">
                  <MdContentPaste />
                  <Text ml="0.5em">Berhasil Di copy</Text>
                </Text>
              ) : (
                <Text as="span" display="flex">
                  <MdContentCopy />
                  <Text className="text-copy" display="none" ml="0.5em">
                    Copy
                  </Text>
                </Text>
              )}
            </CopyButton>
          </Box>
        </Box>
      )}
    </Highlight>
  );
};

export default Codeblock;
