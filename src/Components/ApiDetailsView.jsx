import { useState } from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import TryoutSection from "./Tryouts/TryoutSection";
import DocumentationSection from "./DocumentationSection/DocumentationSection";
import { apiConfig } from "./Tryouts/apiConfig";

const ApiDetailsView = ({ apiComponent }) => {
  const [view, setView] = useState("documentation");
  const apiDetails = apiConfig[apiComponent];

  if (!apiDetails) {
    return (
      <Box p={5} textAlign="center" color="gray.600" fontSize="lg" bg="gray.50" borderRadius="md" boxShadow="md">
        No details available for this API.
      </Box>
    );
  }

  return (
    <Flex flexDirection="column" p={6} bg="gray.50" borderRadius="lg" boxShadow="xl" h="100%">
      <Box mb={5}>
        <Heading as="h2" size="lg" color="teal.700" mb={3}>
          {apiDetails.name}
        </Heading>
        <Text fontSize="md" color="gray.700">
          {apiDetails.description}
        </Text>
      </Box>

      <Flex justifyContent="flex-end" mb={5}>
        <Button
          onClick={() => setView("documentation")}
          colorScheme="teal"
          variant={view === "documentation" ? "solid" : "outline"}
          mr={2}
        >
          Documentation
        </Button>
        <Button
          onClick={() => setView("tryout")}
          colorScheme="teal"
          variant={view === "tryout" ? "solid" : "outline"}
        >
          Tryout
        </Button>
      </Flex>

      <Box
        flex="1"
        overflowY="auto"
        p={5}
        bg="white"
        border="1px solid"
        borderColor="gray.200"
        borderRadius="lg"
        boxShadow="md"
        h="100%"
      >
        {view === "documentation" ? (
          <DocumentationSection {...apiDetails.documentationProps} />
        ) : (
          <TryoutSection {...apiDetails.tryoutProps} />
        )}
      </Box>
    </Flex>
  );
};

export default ApiDetailsView;
