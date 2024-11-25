import { useState } from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, Text, Flex, IconButton } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

const RankingTable = () => {
  const dummyData = Array.from({ length: 359 }, (_, index) => ({
    rank: index + 1,
    name: `Vendor ${index + 1}`,
    users: Math.floor(Math.random() * 1000),
  }));

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(dummyData.length / itemsPerPage);
  const currentData = dummyData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (direction) => {
    if (direction === "prev" && currentPage > 1) setCurrentPage(currentPage - 1);
    if (direction === "next" && currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <Box p={6} boxShadow="md" borderRadius="md">
      <Text fontSize="lg" fontWeight="semibold" mb={4}>
        Ranking
      </Text>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Rank</Th>
            <Th>Name</Th>
            <Th>Users</Th>
          </Tr>
        </Thead>
        <Tbody>
          {currentData.map((item) => (
            <Tr key={item.rank}>
              <Td>{item.rank}</Td>
              <Td>{item.name}</Td>
              <Td>{item.users}k</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Flex justifyContent="center" alignItems="center" mt={4}>
        <IconButton
          icon={<ArrowLeftIcon />}
          onClick={() => handlePageChange("prev")}
          isDisabled={currentPage === 1}
          aria-label="Previous Page"
          mr={2}
          bg="gray.200"
        />
        <Text>
          Page {currentPage} of {totalPages}
        </Text>
        <IconButton
          icon={<ArrowRightIcon />}
          onClick={() => handlePageChange("next")}
          isDisabled={currentPage === totalPages}
          aria-label="Next Page"
          ml={2}
          bg="gray.200"
        />
      </Flex>
    </Box>
  );
};

export default RankingTable;
