import React from "react";
import Timer from "./Timer";
import ThemeSwitch from "./ThemeSwitch";
import { HStack } from "@chakra-ui/react";

// Removed some strange setTimeout logic
const Header = ({ changeTheme, isDarkTheme }) =>
  <HStack justifyContent="space-between" padding="20px" height="10vh">
    <Timer />
    <ThemeSwitch changeTheme={changeTheme} isDarkTheme={isDarkTheme}/>
  </HStack>

export default Header;
