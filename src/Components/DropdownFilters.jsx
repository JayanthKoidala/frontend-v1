import { Flex, Select } from "@chakra-ui/react";

const DropdownFilters = () => {
  return (
    <Flex gap={2} mb={4}>
      <Select placeholder="Category" size="md" variant="filled" bg="white" borderRadius="md" borderColor="gray.300">
        <option value="categoryA">Category A</option>
        <option value="categoryB">Category B</option>
        <option value="categoryC">Category C</option>
      </Select>
      <Select placeholder="Use case" size="md" variant="filled" bg="white" borderRadius="md" borderColor="gray.300">
        <option value="usecaseA">Use Case A</option>
        <option value="usecaseB">Use Case B</option>
        <option value="usecaseC">Use Case C</option>
      </Select>
      <Select placeholder="Document" size="md" variant="filled" bg="white" borderRadius="md" borderColor="gray.300">
        <option value="documentA">Document A</option>
        <option value="documentB">Document B</option>
        <option value="documentC">Document C</option>
      </Select>
    </Flex>
  );
};

export default DropdownFilters;
