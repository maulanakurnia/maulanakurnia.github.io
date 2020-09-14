import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  chakra,
  useClipboard,
} from "@chakra-ui/core";
import theme from "prism-react-renderer/themes/nightOwl";
import React, { useState } from "react";
import { LiveEditor, LiveProvider } from "react-live";

export const liveEditorStyle: React.CSSProperties = {
  fontSize: 14,
  overflowX: "auto",
  fontFamily: "SF Mono, Menlo, monospace",
};

export const liveErrorStyle: React.CSSProperties = {
  fontFamily: "SF Mono, Menlo, monospace",
  fontSize: 14,
  padding: "1em",
  overflowX: "auto",
  color: "white",
  backgroundColor: "red",
};

const CopyButton = (props: ButtonProps) => (
  <Button
    fontSize="xs"
    height="24px"
    position="absolute"
    right="1.25em"
    size="sm"
    textTransform="uppercase"
    top={3}
    zIndex="1"
    {...props}
  />
);

const CodeContainer = (props: any) => (
  <Box bg="#011627" my="8" padding="5" rounded="8px" {...props} />
);

function CodeBlock(props: any) {
  const { className, live = true, manual, render, children, ...rest } = props;

  const [editorCode] = useState(children.trim());

  const language = className && className.replace(/language-/, "");
  const { hasCopied, onCopy } = useClipboard(editorCode);

  const liveProviderProps = {
    theme,
    language,
    code: editorCode,

    noInline: manual,
    ...rest,
  };

  return (
    <LiveProvider disabled {...liveProviderProps}>
      <Box position="relative" zIndex="0">
        <CodeContainer>
          <LiveEditor style={liveEditorStyle} />
          <CopyButton onClick={onCopy}>
            {hasCopied ? "copied" : "copy"}
          </CopyButton>
        </CodeContainer>
      </Box>
    </LiveProvider>
  );
}

CodeBlock.defaultProps = {
  mountStylesheet: false,
};

export default CodeBlock;
