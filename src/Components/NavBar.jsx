import { Button } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/avatar";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    navigate("/auth");
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      height="60px"
      bg="#071c42"
      px="1.5rem" // Reduced padding to match tighter spacing in the image
    >
      <Text fontSize="1.25rem" fontFamily="Work sans" color="white" pb="2px">
        Tenacio
      </Text>

      <Menu>
        <MenuButton
          as={Button}
          size="md" // Adjusted size to match a more compact design
          rightIcon={<ChevronDownIcon color="white" />}
          color="white"
          bg="#071c42"
          _hover={{ bg: "#0a2c6b" }}
          _active={{ bg: "#0a2c6b" }}
          borderRadius="0.25rem" // Slight rounding to match modern UI trends
          transition="background-color 0.3s ease;"
          padding="0.4rem 0.8rem" // Reduced padding for a sleeker appearance
        >
          <Avatar size="sm" cursor="pointer" />
        </MenuButton>
        <MenuList bg="#071c42" borderColor="#0a2c6b">
          <MenuItem color="black">My Profile</MenuItem>
          <MenuDivider />
          <MenuItem color="black" onClick={logoutHandler}>
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default NavBar;
