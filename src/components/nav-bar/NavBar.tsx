import { Box, Flex, HStack, Spacer } from "@chakra-ui/react";
import React from "react";
import "./NavBar.scss";

const NavBar: React.FC = () => {
  const menuEntries: string[] = ["home", "skills", "projects", "contacts"];

  const showMenuEntries = () => {
    return menuEntries.map((entry) => (
      <a className="menu-list-item" href={`#${entry}`}>{entry.toUpperCase()}</a>
    ));
  };
  return (
      <Flex boxShadow={'md'} bg="#16131D"  py={'1rem'} px={'3rem'}>
        <Box>
            <p>N.A</p>
        </Box>
        <Spacer />
        <HStack justify={'flex-end'}>
            {showMenuEntries()}
        </HStack>
      </Flex>
  );
}
export default NavBar;