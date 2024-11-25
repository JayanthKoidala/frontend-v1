import { Flex, Box } from "@chakra-ui/react";
import LeftSideBar from "../Components/LeftSideBar";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

const MainLayout = () => {
  return (
    <Flex direction="column" height="100vh" bg="gray.50">
      {/* Navbar */}
      <Box height="7vh" width="100%" bg="white" boxShadow="sm" borderBottom="1px solid" borderColor="gray.200">
        <NavBar />
      </Box>

      {/* Main Content Area */}
      <Flex flex="1" overflow="hidden">
        <LeftSideBar />
        <Box
          flex="1"
          borderRadius="md"
          overflowY="auto"
          p={6}
          m={4}
        >
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  );
};

export default MainLayout;
