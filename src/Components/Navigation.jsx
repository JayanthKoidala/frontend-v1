import { Box, Link } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const links = [
    { path: "/", label: "Dashboard" },
    { path: "/Discover", label: "Discover" },
    { path: "/Decision", label: "Decision" },
    { path: "/Documents", label: "Documents" },
    { path: "/auth", label: "Auth" },
  ];

  return (
    <Box display="flex" flexDirection="column" p={4} bg="teal.50" borderRadius="md" boxShadow="sm">
      {links.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          p={2}
          borderRadius="md"
          bg={location.pathname === link.path ? "teal.500" : "transparent"}
          color={location.pathname === link.path ? "white" : "teal.700"}
          _hover={{ bg: "teal.100", color: "teal.800" }}
          transition="background-color 0.2s, color 0.2s"
          fontWeight="medium"
          mb={1}
        >
          {link.label}
        </Link>
      ))}
    </Box>
  );
};

export default Navigation;
