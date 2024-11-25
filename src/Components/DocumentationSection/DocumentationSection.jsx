import { Box, Heading, Text } from "@chakra-ui/react";
import RequestSection from "../ApiDetails/RequestSection";
import ServiceProviders from "../ApiDetails/ServiceProviders";

const DocumentationSection = ({ apiName, apiUrl, description, providers, headers, successResponse, errorResponse }) => {
  const disableTextSelection = (e) => {
    e.preventDefault();
  };

  return (
    <Box p={5}>
      <Heading as="h2" size="xl" mb={4}>
        {apiName}
      </Heading>

      <Box
        mb={4}
        p={2}
        bg="blue.500"
        color="white"
        borderRadius="md"
        textAlign="center"
        userSelect="none"
        onContextMenu={disableTextSelection}
      >
        POST: {apiUrl}
      </Box>

      <Text fontSize="md" fontWeight="bold" mb={4}>
        {description}
      </Text>

      <Heading size="lg" mt={6} mb={2}>
        Service Providers
      </Heading>
      <ServiceProviders providers={providers} />

      <Heading size="lg" mt={6} mb={2}>
        Requests
      </Heading>
      <RequestSection />

      <Box mt={6}>
        <Heading size="lg" mb={4}>
          Headers
        </Heading>
        <Text>
          {headers.map((header) => (
            <span key={header.name}>
              <b>{header.name}</b>: {header.value}
              <br />
            </span>
          ))}
        </Text>

        <Heading size="lg" mt={6} mb={4}>
          Response
        </Heading>
        <Text>
          The response will include a JSON object with the status of the request.
        </Text>
        <Text>
          <b>Success Response:</b>
          <br />
          <pre>{JSON.stringify(successResponse, null, 2)}</pre>
        </Text>

        <Text>
          <b>Error Response:</b>
          <br />
          <pre>{JSON.stringify(errorResponse, null, 2)}</pre>
        </Text>
      </Box>
    </Box>
  );
};

export default DocumentationSection;
