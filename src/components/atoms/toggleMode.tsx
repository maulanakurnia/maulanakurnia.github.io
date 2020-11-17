import * as React from "react";
import { useColorMode, IconButton } from "@chakra-ui/react";
import { FiMoon, FiSun } from "react-icons/fi";

export interface State {
  colorMode: string;
  toggleColorMode: boolean;
}

export const ToggleMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label="toggle mode"
      icon={colorMode === "light" ? <FiSun /> : <FiMoon />}
      onClick={toggleColorMode}
      pr={10}
      size="xs"
      variant="ghost"
    />
  );
};
