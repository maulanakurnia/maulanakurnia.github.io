import { mode, Styles } from "@chakra-ui/theme-tools";
import theme from "@chakra-ui/theme";

const styles: Styles = {
  ...theme.styles,
  global: (props) => ({
    ...theme.styles.global,
    color: mode("blackAlpha.900", "whiteAlpha.900")(props),
    bg: mode("#ffffff", "#031e3e")(props),
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
};

const customTheme: any = {
  ...theme,
  config: {
    ...theme.config,
    useSystemColorMode: true,
    initialColorMode: "dark",
  },
  styles,
};
export default customTheme;