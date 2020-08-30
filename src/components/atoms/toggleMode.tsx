import * as React from "react";
import {
  useColorMode,
  IconButton,
} from "@chakra-ui/core";
import { FiMoon, FiSun } from "react-icons/fi";

export interface State {
    colorMode: string,
    toggleColorMode: boolean
}

export const ToggleMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
        pr={10}
        aria-label="toggle mode"
        size="xs"
        icon={colorMode === "light" ? <FiSun /> : <FiMoon />}
        onClick={toggleColorMode}
        variant="ghost"
  />
  );
};
