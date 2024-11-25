import { Box, Link, VStack, Text } from "@chakra-ui/react";
import { FaColumns, FaSearch, FaFileAlt, FaCogs } from "react-icons/fa";

const Sidebar = () => {
  const sidebarItems = [
    { href: "/dashboard", icon: <FaColumns />, label: "Dashboard" },
    { href: "/discover", icon: <FaSearch />, label: "Discover" },
    { href: "/decision", icon: <FaCogs />, label: "Decision" },
    { href: "/documents", icon: <FaFileAlt />, label: "Documents" },
  ];

  return (
    <Box as="nav" bg="gray.900" color="white" h="100vh" w="250px" p={5}>
      <VStack spacing={6} align="flex-start">
        {sidebarItems.map((item) => (
          <Link href={item.href} key={item.label}>
            {item.icon}
            <Text ml={2} as="span">
              {item.label}
            </Text>
          </Link>
        ))}
      </VStack>
    </Box>
  );
};

export default Sidebar;
