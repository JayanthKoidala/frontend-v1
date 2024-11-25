import { useState } from "react";
import { Card, CardBody, VStack, Select, Box, Text, Divider } from "@chakra-ui/react";
import { vendorList } from "./VendorList";

const WorkFlowDesign = () => {
  const [selectedVendors, setSelectedVendors] = useState([""]);

  const handleVendorSelect = (index, value) => {
    const updatedVendors = [...selectedVendors];
    updatedVendors[index] = value;

    if (value && index === selectedVendors.length - 1) {
      const availableVendorsCount = vendorList.length - updatedVendors.filter((v) => v).length;
      if (availableVendorsCount > 0) {
        updatedVendors.push("");
      }
    }

    setSelectedVendors(updatedVendors);
  };

  const getAvailableVendors = () => {
    return vendorList.filter((vendor) => !selectedVendors.includes(vendor.name));
  };

  const allVendorsSelected = selectedVendors.filter((v) => v).length >= vendorList.length;

  return (
    <Card p={4} borderRadius="md" boxShadow="md">
      <CardBody>
        <Text fontSize="2xl" fontWeight="bold" mb={6} textAlign="center" color="teal.600">
          Workflow Design
        </Text>

        <VStack spacing={4} align="stretch">
          {selectedVendors.map((selected, index) => (
            <Box key={index}>
              <Select
                placeholder={`Select Vendor for Priority ${index + 1}`}
                value={selected}
                onChange={(e) => handleVendorSelect(index, e.target.value)}
                size="md"
                borderColor="gray.300"
                _hover={{ borderColor: "teal.400" }}
                _focus={{ borderColor: "teal.500", boxShadow: "0 0 0 1px teal.500" }}
              >
                {getAvailableVendors().map((vendor, i) => (
                  <option key={i} value={vendor.name}>
                    {vendor.name}
                  </option>
                ))}
                {selected && (
                  <option disabled value={selected}>
                    {selected} (Selected)
                  </option>
                )}
              </Select>

              {index < selectedVendors.length - 1 && <Divider borderColor="gray.300" my={4} />}
            </Box>
          ))}

          {allVendorsSelected && (
            <Box>
              <Text fontSize="lg" color="green.500" textAlign="center">
                All vendors have been selected.
              </Text>
            </Box>
          )}
        </VStack>

        <Box mt={6}>
          <Text fontSize="lg" fontWeight="bold" mb={2} color="teal.700">
            Selected Vendors Priority List:
          </Text>
          {selectedVendors.length === 0 || selectedVendors.every((v) => v === "") ? (
            <Text color="gray.500">No vendors selected</Text>
          ) : (
            selectedVendors.map((vendor, index) => (
              <Text key={index} fontSize="md" color="gray.700">{`${index + 1}. ${vendor}`}</Text>
            ))
          )}
        </Box>
      </CardBody>
    </Card>
  );
};

export default WorkFlowDesign;
