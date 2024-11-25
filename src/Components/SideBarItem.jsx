import { Box, Text } from "@chakra-ui/react";

const SideBarItem = ({ title, icon, bg, color }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      padding="0.6rem 1rem"
      borderRadius="8px"
      backgroundColor={bg}
      color={color}
      cursor="pointer"
      _hover={{ bg: "blue.200", color: "white" }}
      transition="background-color 0.2s ease-in-out"
    >
      {icon}
      <Text marginLeft="0.8rem" fontWeight="medium" fontSize="1rem">
        {title}
      </Text>
    </Box>
  );
};

export default SideBarItem;
