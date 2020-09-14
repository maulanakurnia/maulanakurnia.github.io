import React, { useState } from "react";
import styled from "styled-components";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import { Box, Button, ButtonProps, useClipboard } from "@chakra-ui/core";
import { MdContentCopy, MdContentPaste } from "react-icons/md";

const CopyButton = (props: ButtonProps) => (
  <Button
    fontSize="13px"
    padding="5px"
    position="absolute"
    right="0.3em"
    size="sm"
    textTransform="uppercase"
    top={5.5}
    zIndex="1"
    display="none"
    bg="#3b3b3b"
    _hover={{ bg: "#4f4f4f" }}
    _focus={{ outline: "none" }}
    {...props}
  />
);
const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: auto;
  border-radius: 6px;
  background-color: #111216 !important;
  border: 1px solid rgb(55, 56, 59);
  &:hover .copy {
    display: flex;
  }
`;

const Line = styled.div`
  display: table-row;
`;

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
  border-right: 1px solid rgb(55, 56, 59);
  padding-left: 10px;
`;

const LineContent = styled.span`
  padding-left: 10px;
  display: table-cell;
  margin-left: 10px;
`;

const WithLineNumbers = (props: any) => {
  const { className, render, children, ...rest } = props;
  const [editorCode] = useState(children.trim());
  const language = className && className.replace(/language-/, "");
  const { hasCopied, onCopy } = useClipboard(editorCode);
  const customProps = {
    theme,
    language,
    code: editorCode,
    ...rest,
  };
  if (language !== "bash" && language !== undefined) {
    return (
      <Highlight {...defaultProps} {...customProps}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Box position="relative">
            <Pre className={className} style={style}>
              {tokens.map((line, i) => (
                <Line key={i} {...getLineProps({ line, key: i })}>
                  <LineNo>{i + 1}</LineNo>
                  <LineContent>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </LineContent>
                </Line>
              ))}
              <CopyButton onClick={onCopy} className="copy">
                {hasCopied ? <MdContentPaste /> : <MdContentCopy />}
              </CopyButton>
            </Pre>
          </Box>
        )}
      </Highlight>
    );
  }
  return (
    <Highlight {...defaultProps} {...customProps}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Box position="relative">
          <Pre className={className} style={style}>
            {tokens.map((line, i) => (
              <Line key={i} {...getLineProps({ line, key: i })}>
                <LineContent>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </LineContent>
              </Line>
            ))}
            <CopyButton onClick={onCopy} className="copy">
              {hasCopied ? <MdContentPaste /> : <MdContentCopy />}
            </CopyButton>
          </Pre>
        </Box>
      )}
    </Highlight>
  );
};

export default WithLineNumbers;
