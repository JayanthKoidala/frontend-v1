import { Box } from "@chakra-ui/react";

const DocumentationSection = ({ apiComponent }) => {
  return (
    <Box p={5} bg="white" borderRadius="lg" boxShadow="md">
      {apiComponent}
    </Box>
  );
};

export default DocumentationSection;
