import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Heading,
} from "@chakra-ui/react";
import Login from "../misc/Login";
import Signup from "../misc/Signup";

function AuthPage() {
  return (
    <Container maxW="md" centerContent py={8} bg="gray.50" borderRadius="lg" boxShadow="base" mt={8}>
      <Box
        bg="white"
        w="100%"
        p={6}
        borderRadius="lg"
        boxShadow="md"
        textAlign="center"
        mb={4}
      >
        <Heading as="h1" size="lg" fontFamily="Work Sans" color="teal.600">
          Tenacio
        </Heading>
      </Box>

      <Box bg="white" w="100%" p={6} borderRadius="lg" boxShadow="md">
        <Tabs isFitted variant="enclosed" colorScheme="teal">
          <TabList mb={4}>
            <Tab _selected={{ bg: "teal.500", color: "white", borderRadius: "md" }}>
              Login
            </Tab>
            <Tab _selected={{ bg: "teal.500", color: "white", borderRadius: "md" }}>
              Sign Up
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default AuthPage;
