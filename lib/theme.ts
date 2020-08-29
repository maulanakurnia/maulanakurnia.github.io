// theme.js
import theme from "@chakra-ui/theme"
import { merge } from "@chakra-ui/utils"

// You'll need the @chakra-ui/theme-tools to have access to the mode function
import { mode } from "@chakra-ui/theme-tools"

// Remember, you can access special theme variables if you
// declare a style as a function, rather than an object.

const overrides = {
  styles: {
    global: (props) => ({
      body: {
        fontFamily: "body",
        color: mode("#363537", "#929497")(props),
        bg: mode("#FFF", "#121212")(props),
        lineHeight: "base",
      },
      header: {
          bg: mode("#FFF", "#121212")(props),
          color: mode('#363537', '#929497')(props),
          boxShadow: mode("0px -20px 20px #000", "0px -20px 20px #FFF")(props)
      }
    }),
  },
}

// WARNING: If you do use a function in a style override, you will NOT
// inherit the existing styles like you will with an object.
// merge() will only merge objects, not functions
export default merge(theme, overrides)