import React from "react";
import { Switch, VStack } from "@chakra-ui/react";

const ThemeSwitch = ({ changeTheme, isDarkTheme }) => {
  // Added function for chenging theme
  const handleSwitch = (e) => {
    const value = e.target.checked

    changeTheme(value)
  }

  return (
    <VStack>
      <p>Dark theme</p>
      <Switch onChange={handleSwitch} isChecked={isDarkTheme} colorScheme="teal" size="lg" />
    </VStack>
  );
};

export default ThemeSwitch;
