import { Box, Stack } from "@chakra-ui/layout";
import { MdDashboard } from "react-icons/md";
import { IoEarthSharp } from "react-icons/io5";
import { IoIosDocument } from "react-icons/io";
import { VscTypeHierarchySuper } from "react-icons/vsc";
import SideBarItem from "./SideBarItem";
import { Link, useLocation } from "react-router-dom";

const sideBarList = [
  { title: "Dashboard", icon: <MdDashboard />, path: "/" },
  { title: "Discover", icon: <IoEarthSharp />, path: "/Discover" },
  { title: "Decision", icon: <VscTypeHierarchySuper />, path: "/Decision" },
  { title: "Documents", icon: <IoIosDocument />, path: "/Documents" },
];

const LeftSideBar = () => {
  const location = useLocation();

  return (
    <Box
      display="flex"
      flexDirection="column"
      padding="1rem"
      background="blue.50" // Changed to a light blue color for a softer look
      borderRadius="8px"
      overflowY="hidden"
      width="18%"
      minWidth="200px"
      boxShadow="sm"
    >
      <Stack spacing="0.5rem">
        {sideBarList.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <Link className="links" key={index} to={item.path}>
              <SideBarItem
                title={item.title}
                icon={item.icon}
                bg={isActive ? "teal.500" : "transparent"}
                color={isActive ? "white" : "gray.700"}
                _hover={{ bg: "teal.100", color: "teal.700" }}
                borderRadius="md"
                padding="0.75rem"
                transition="background-color 0.2s ease"
              />
            </Link>
          );
        })}
      </Stack>
    </Box>
  );
};

export default LeftSideBar;
