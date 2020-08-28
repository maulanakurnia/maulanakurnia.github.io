import * as React from "react";
import {
  useColorMode,
  IconButton,
} from "@chakra-ui/core";
import { FiMoon, FiSun } from "react-icons/fi";


export const ToggleMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
    display={["none", "block"]}
    aria-label="toggle mode"
    size="xs"
    icon={colorMode === "light" ? <FiSun /> : <FiMoon />}
    onClick={toggleColorMode}
    variant="ghost"
  />
  );
};
