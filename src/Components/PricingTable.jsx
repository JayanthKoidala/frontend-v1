import { useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Box, Button, Flex, Text } from '@chakra-ui/react';

const PricingTable = () => {
  const pricingData = Array.from({ length: 50 }, (_, index) => ({
    vendor: `Vendor ${index + 1}`,
    "0-100K": 'xxx',
    "100K-250K": 'xxx',
    "250K+": 'xxx',
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(pricingData.length / itemsPerPage);

  const currentItems = pricingData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (direction) => {
    if (direction === 'next' && currentPage < totalPages) setCurrentPage(currentPage + 1);
    if (direction === 'prev' && currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <Box p={4} borderRadius="md" boxShadow="sm">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Vendor</Th>
            <Th>0-100K</Th>
            <Th>100K-250K</Th>
            <Th>250K+</Th>
          </Tr>
        </Thead>
        <Tbody>
          {currentItems.map((data, idx) => (
            <Tr key={idx}>
              <Td>{data.vendor}</Td>
              <Td>{data["0-100K"]}</Td>
              <Td>{data["100K-250K"]}</Td>
              <Td>{data["250K+"]}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Flex justifyContent="space-between" alignItems="center" mt={4}>
        <Button onClick={() => handlePageChange('prev')} isDisabled={currentPage === 1} colorScheme="blue">
          Previous
        </Button>
        <Text>Page {currentPage} of {totalPages}</Text>
        <Button onClick={() => handlePageChange('next')} isDisabled={currentPage === totalPages} colorScheme="blue">
          Next
        </Button>
      </Flex>
    </Box>
  );
};

export default PricingTable;
