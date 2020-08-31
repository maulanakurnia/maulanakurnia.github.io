import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  chakra,
  useClipboard,
} from "@chakra-ui/core"
import theme from "prism-react-renderer/themes/nightOwl"
import React, { useState } from "react"
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live"
import scope from "./react-live-scope"

export const liveEditorStyle: React.CSSProperties = {
  fontSize: 14,
  overflowX: "auto",
  fontFamily: "SF Mono, Menlo, monospace",
}

export const liveErrorStyle: React.CSSProperties = {
  fontFamily: "SF Mono, Menlo, monospace",
  fontSize: 14,
  padding: "1em",
  overflowX: "auto",
  color: "white",
  backgroundColor: "red",
}

const LiveCodePreview = chakra(LivePreview, {
  baseStyle: {
    fontFamily: "body",
    mt: 5,
    p: 3,
    borderWidth: 1,
    borderRadius: "12px",
  },
})

const CopyButton = (props: ButtonProps) => (
  <Button
    size="sm"
    position="absolute"
    textTransform="uppercase"
    fontSize="xs"
    height="24px"
    top={3}
    zIndex="1"
    right="1.25em"
    {...props}
  />
)


const CodeContainer = (props:any) => (
  <Box padding="5" rounded="8px" my="8" bg="#011627" {...props} />
)

function CodeBlock(props:any) {
  const { className, live = true, manual, render, children, ...rest } = props
  const [editorCode] = useState(children.trim())

  const language = className && className.replace(/language-/, "")
  const { hasCopied, onCopy } = useClipboard(editorCode)

  const liveProviderProps = {
    theme,
    language,
    code: editorCode,
    scope,
    noInline: manual,
    ...rest,
  }

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
  )
}

CodeBlock.defaultProps = {
  mountStylesheet: false,
}

export default CodeBlock
