import { useState } from "react";
import { useDrop } from "react-dnd";
import { Box, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";

const WorkflowArea = () => {
  const [vendors, setVendors] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "vendor",
    drop: (item) => addVendorToWorkflow(item.vendor),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addVendorToWorkflow = (vendor) => {
    setVendors((prevVendors) => [...prevVendors, vendor]);
  };

  return (
    <Box
      ref={drop}
      h="300px"
      w="100%"
      maxW="400px"
      borderWidth="2px"
      borderColor={isOver ? "teal.400" : "gray.200"}
      borderRadius="md"
      bg={isOver ? "teal.50" : "white"}
      p={4}
      boxShadow="md"
      transition="background-color 0.3s ease, border-color 0.3s ease"
    >
      <Heading as="h3" size="md" mb={3} color="teal.700">
        Workflow Area
      </Heading>
      {vendors.length === 0 && (
        <Text color="gray.500">Drag and drop a vendor here</Text>
      )}
      <UnorderedList spacing={2} mt={2}>
        {vendors.map((vendor, index) => (
          <ListItem key={index} color="teal.800" fontWeight="medium">
            {vendor}
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default WorkflowArea;
