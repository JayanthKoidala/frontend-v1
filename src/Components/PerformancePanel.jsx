import { useState } from "react";
import {
  Box,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Flex,
  Select,
  Input,
  HStack,
  useToast,
} from "@chakra-ui/react";

const PerformancePanel = () => {
  const data = [
    {
      vendor: "Karza",
      p50: "2.5 secs",
      p75: "3.0 secs",
      p90: "3.5 secs",
      p95: "4.0 secs",
      p99: "5.0 secs",
    },
    {
      vendor: "Signzy",
      p50: "2.1 secs",
      p75: "2.6 secs",
      p90: "3.0 secs",
      p95: "3.5 secs",
      p99: "4.5 secs",
    },
    {
      vendor: "Hyperverge",
      p50: "2.7 secs",
      p75: "3.1 secs",
      p90: "3.8 secs",
      p95: "4.2 secs",
      p99: "5.1 secs",
    },
    {
      vendor: "Bureau ID",
      p50: "2.8 secs",
      p75: "3.3 secs",
      p90: "3.9 secs",
      p95: "4.4 secs",
      p99: "5.3 secs",
    },
    {
      vendor: "Surepass",
      p50: "2.2 secs",
      p75: "2.7 secs",
      p90: "3.3 secs",
      p95: "3.8 secs",
      p99: "4.7 secs",
    },
    {
      vendor: "Netcore",
      p50: "2.9 secs",
      p75: "3.4 secs",
      p90: "3.9 secs",
      p95: "4.6 secs",
      p99: "5.5 secs",
    },
    {
      vendor: "GupShup",
      p50: "3.0 secs",
      p75: "3.5 secs",
      p90: "4.0 secs",
      p95: "4.5 secs",
      p99: "5.2 secs",
    },
    {
      vendor: "Kaleyra",
      p50: "3.1 secs",
      p75: "3.6 secs",
      p90: "4.1 secs",
      p95: "4.7 secs",
      p99: "5.4 secs",
    },
    {
      vendor: "Two Factor",
      p50: "2.8 secs",
      p75: "3.2 secs",
      p90: "3.7 secs",
      p95: "4.1 secs",
      p99: "4.8 secs",
    },
    {
      vendor: "Strac",
      p50: "2.5 secs",
      p75: "3.0 secs",
      p90: "3.6 secs",
      p95: "4.0 secs",
      p99: "4.9 secs",
    },
    {
      vendor: "Perfios",
      p50: "2.3 secs",
      p75: "2.8 secs",
      p90: "3.4 secs",
      p95: "3.9 secs",
      p99: "4.6 secs",
    },
    {
      vendor: "Arya.ai",
      p50: "2.7 secs",
      p75: "3.2 secs",
      p90: "3.8 secs",
      p95: "4.3 secs",
      p99: "5.0 secs",
    },
    {
      vendor: "Karza",
      p50: "2.5 secs",
      p75: "3.0 secs",
      p90: "3.5 secs",
      p95: "4.0 secs",
      p99: "5.0 secs",
    },
    {
      vendor: "Signzy",
      p50: "2.1 secs",
      p75: "2.6 secs",
      p90: "3.0 secs",
      p95: "3.5 secs",
      p99: "4.5 secs",
    },
    {
      vendor: "Hyperverge",
      p50: "2.7 secs",
      p75: "3.1 secs",
      p90: "3.8 secs",
      p95: "4.2 secs",
      p99: "5.1 secs",
    },
    {
      vendor: "Bureau ID",
      p50: "2.8 secs",
      p75: "3.3 secs",
      p90: "3.9 secs",
      p95: "4.4 secs",
      p99: "5.3 secs",
    },
    {
      vendor: "Surepass",
      p50: "2.2 secs",
      p75: "2.7 secs",
      p90: "3.3 secs",
      p95: "3.8 secs",
      p99: "4.7 secs",
    },
    {
      vendor: "Netcore",
      p50: "2.9 secs",
      p75: "3.4 secs",
      p90: "3.9 secs",
      p95: "4.6 secs",
      p99: "5.5 secs",
    },
    {
      vendor: "GupShup",
      p50: "3.0 secs",
      p75: "3.5 secs",
      p90: "4.0 secs",
      p95: "4.5 secs",
      p99: "5.2 secs",
    },
    {
      vendor: "Kaleyra",
      p50: "3.1 secs",
      p75: "3.6 secs",
      p90: "4.1 secs",
      p95: "4.7 secs",
      p99: "5.4 secs",
    },
    {
      vendor: "Two Factor",
      p50: "2.8 secs",
      p75: "3.2 secs",
      p90: "3.7 secs",
      p95: "4.1 secs",
      p99: "4.8 secs",
    },
    {
      vendor: "Strac",
      p50: "2.5 secs",
      p75: "3.0 secs",
      p90: "3.6 secs",
      p95: "4.0 secs",
      p99: "4.9 secs",
    },
    {
      vendor: "Perfios",
      p50: "2.3 secs",
      p75: "2.8 secs",
      p90: "3.4 secs",
      p95: "3.9 secs",
      p99: "4.6 secs",
    },
    {
      vendor: "Arya.ai",
      p50: "2.7 secs",
      p75: "3.2 secs",
      p90: "3.8 secs",
      p95: "4.3 secs",
      p99: "5.0 secs",
    },
    {
      vendor: "Karza",
      p50: "2.5 secs",
      p75: "3.0 secs",
      p90: "3.5 secs",
      p95: "4.0 secs",
      p99: "5.0 secs",
    },
    {
      vendor: "Signzy",
      p50: "2.1 secs",
      p75: "2.6 secs",
      p90: "3.0 secs",
      p95: "3.5 secs",
      p99: "4.5 secs",
    },
    {
      vendor: "Hyperverge",
      p50: "2.7 secs",
      p75: "3.1 secs",
      p90: "3.8 secs",
      p95: "4.2 secs",
      p99: "5.1 secs",
    },
    {
      vendor: "Bureau ID",
      p50: "2.8 secs",
      p75: "3.3 secs",
      p90: "3.9 secs",
      p95: "4.4 secs",
      p99: "5.3 secs",
    },
    {
      vendor: "Surepass",
      p50: "2.2 secs",
      p75: "2.7 secs",
      p90: "3.3 secs",
      p95: "3.8 secs",
      p99: "4.7 secs",
    },
    {
      vendor: "Netcore",
      p50: "2.9 secs",
      p75: "3.4 secs",
      p90: "3.9 secs",
      p95: "4.6 secs",
      p99: "5.5 secs",
    },
    {
      vendor: "GupShup",
      p50: "3.0 secs",
      p75: "3.5 secs",
      p90: "4.0 secs",
      p95: "4.5 secs",
      p99: "5.2 secs",
    },
    {
      vendor: "Kaleyra",
      p50: "3.1 secs",
      p75: "3.6 secs",
      p90: "4.1 secs",
      p95: "4.7 secs",
      p99: "5.4 secs",
    },
    {
      vendor: "Two Factor",
      p50: "2.8 secs",
      p75: "3.2 secs",
      p90: "3.7 secs",
      p95: "4.1 secs",
      p99: "4.8 secs",
    },
    {
      vendor: "Strac",
      p50: "2.5 secs",
      p75: "3.0 secs",
      p90: "3.6 secs",
      p95: "4.0 secs",
      p99: "4.9 secs",
    },
    {
      vendor: "Perfios",
      p50: "2.3 secs",
      p75: "2.8 secs",
      p90: "3.4 secs",
      p95: "3.9 secs",
      p99: "4.6 secs",
    },
    {
      vendor: "Arya.ai",
      p50: "2.7 secs",
      p75: "3.2 secs",
      p90: "3.8 secs",
      p95: "4.3 secs",
      p99: "5.0 secs",
    },
    {
      vendor: "Karza",
      p50: "2.5 secs",
      p75: "3.0 secs",
      p90: "3.5 secs",
      p95: "4.0 secs",
      p99: "5.0 secs",
    },
    {
      vendor: "Signzy",
      p50: "2.1 secs",
      p75: "2.6 secs",
      p90: "3.0 secs",
      p95: "3.5 secs",
      p99: "4.5 secs",
    },
    {
      vendor: "Hyperverge",
      p50: "2.7 secs",
      p75: "3.1 secs",
      p90: "3.8 secs",
      p95: "4.2 secs",
      p99: "5.1 secs",
    },
    {
      vendor: "Bureau ID",
      p50: "2.8 secs",
      p75: "3.3 secs",
      p90: "3.9 secs",
      p95: "4.4 secs",
      p99: "5.3 secs",
    },
    {
      vendor: "Surepass",
      p50: "2.2 secs",
      p75: "2.7 secs",
      p90: "3.3 secs",
      p95: "3.8 secs",
      p99: "4.7 secs",
    },
    {
      vendor: "Netcore",
      p50: "2.9 secs",
      p75: "3.4 secs",
      p90: "3.9 secs",
      p95: "4.6 secs",
      p99: "5.5 secs",
    },
    {
      vendor: "GupShup",
      p50: "3.0 secs",
      p75: "3.5 secs",
      p90: "4.0 secs",
      p95: "4.5 secs",
      p99: "5.2 secs",
    },
    {
      vendor: "Kaleyra",
      p50: "3.1 secs",
      p75: "3.6 secs",
      p90: "4.1 secs",
      p95: "4.7 secs",
      p99: "5.4 secs",
    },
    {
      vendor: "Two Factor",
      p50: "2.8 secs",
      p75: "3.2 secs",
      p90: "3.7 secs",
      p95: "4.1 secs",
      p99: "4.8 secs",
    },
    {
      vendor: "Strac",
      p50: "2.5 secs",
      p75: "3.0 secs",
      p90: "3.6 secs",
      p95: "4.0 secs",
      p99: "4.9 secs",
    },
    {
      vendor: "Perfios",
      p50: "2.3 secs",
      p75: "2.8 secs",
      p90: "3.4 secs",
      p95: "3.9 secs",
      p99: "4.6 secs",
    },
    {
      vendor: "Arya.ai",
      p50: "2.7 secs",
      p75: "3.2 secs",
      p90: "3.8 secs",
      p95: "4.3 secs",
      p99: "5.0 secs",
    },
    {
      vendor: "Karza",
      p50: "2.5 secs",
      p75: "3.0 secs",
      p90: "3.5 secs",
      p95: "4.0 secs",
      p99: "5.0 secs",
    },
    {
      vendor: "Signzy",
      p50: "2.1 secs",
      p75: "2.6 secs",
      p90: "3.0 secs",
      p95: "3.5 secs",
      p99: "4.5 secs",
    },
    {
      vendor: "Hyperverge",
      p50: "2.7 secs",
      p75: "3.1 secs",
      p90: "3.8 secs",
      p95: "4.2 secs",
      p99: "5.1 secs",
    },
    {
      vendor: "Bureau ID",
      p50: "2.8 secs",
      p75: "3.3 secs",
      p90: "3.9 secs",
      p95: "4.4 secs",
      p99: "5.3 secs",
    },
    {
      vendor: "Surepass",
      p50: "2.2 secs",
      p75: "2.7 secs",
      p90: "3.3 secs",
      p95: "3.8 secs",
      p99: "4.7 secs",
    },
    {
      vendor: "Netcore",
      p50: "2.9 secs",
      p75: "3.4 secs",
      p90: "3.9 secs",
      p95: "4.6 secs",
      p99: "5.5 secs",
    },
    {
      vendor: "GupShup",
      p50: "3.0 secs",
      p75: "3.5 secs",
      p90: "4.0 secs",
      p95: "4.5 secs",
      p99: "5.2 secs",
    },
    {
      vendor: "Kaleyra",
      p50: "3.1 secs",
      p75: "3.6 secs",
      p90: "4.1 secs",
      p95: "4.7 secs",
      p99: "5.4 secs",
    },
    {
      vendor: "Two Factor",
      p50: "2.8 secs",
      p75: "3.2 secs",
      p90: "3.7 secs",
      p95: "4.1 secs",
      p99: "4.8 secs",
    },
    {
      vendor: "Strac",
      p50: "2.5 secs",
      p75: "3.0 secs",
      p90: "3.6 secs",
      p95: "4.0 secs",
      p99: "4.9 secs",
    },
    {
      vendor: "Perfios",
      p50: "2.3 secs",
      p75: "2.8 secs",
      p90: "3.4 secs",
      p95: "3.9 secs",
      p99: "4.6 secs",
    },
    {
      vendor: "Arya.ai",
      p50: "2.7 secs",
      p75: "3.2 secs",
      p90: "3.8 secs",
      p95: "4.3 secs",
      p99: "5.0 secs",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [dateRange, setDateRange] = useState("last_24_hours"); // Default to last 24 hours
  const [customStartDate, setCustomStartDate] = useState("");
  const [customEndDate, setCustomEndDate] = useState("");

  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const toast = useToast();

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleDateRangeChange = (e) => {
    setDateRange(e.target.value);
    // Reset custom dates when changing date range
    if (e.target.value !== "custom") {
      setCustomStartDate("");
      setCustomEndDate("");
    }
  };

  const handleCustomRangeSubmit = () => {
    if (customStartDate && customEndDate) {
      // Validate date range
      const start = new Date(customStartDate);
      const end = new Date(customEndDate);
      if (start > end) {
        toast({
          title: "Invalid Date Range",
          description: "Start date cannot be after end date.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        return;
      }

      // Implement your custom range logic here
      // For demonstration, we'll just log the dates
      console.log(`Custom range from ${customStartDate} to ${customEndDate}`);

      // Optionally, reset to the first page after applying filters
      setCurrentPage(1);

      toast({
        title: "Custom Range Applied",
        description: `Showing data from ${customStartDate} to ${customEndDate}.`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Incomplete Selection",
        description: "Please select both start and end dates.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={4} borderRadius="md" bg="white" boxShadow="sm">
      {/* Filter Section */}
      <Flex mb={4} justifyContent="flex-end" alignItems="center" gap={4}>
        <Select
          onChange={handleDateRangeChange}
          value={dateRange}
          placeholder="Select Date Range"
          size="sm"
          width="200px"
          borderRadius="md"
          bg="gray.50"
          _focus={{ boxShadow: "outline" }}
        >
          <option value="last_24_hours">Last 24 Hours</option>
          <option value="last_72_hours">Last 72 Hours</option>
          <option value="last_month">Last Month</option>
          <option value="custom">Custom Range</option>
        </Select>

        {dateRange === "custom" && (
          <HStack spacing={2}>
            <Input
              type="date"
              placeholder="Start Date"
              value={customStartDate}
              onChange={(e) => setCustomStartDate(e.target.value)}
              size="sm"
              borderRadius="md"
              bg="gray.50"
              _focus={{ boxShadow: "outline" }}
            />
            <Input
              type="date"
              placeholder="End Date"
              value={customEndDate}
              onChange={(e) => setCustomEndDate(e.target.value)}
              size="sm"
              borderRadius="md"
              bg="gray.50"
              _focus={{ boxShadow: "outline" }}
            />
            <Button
              onClick={handleCustomRangeSubmit}
              colorScheme="blue"
              size="sm"
              borderRadius="md"
              type="button" // Explicitly set button type
            >
              Apply
            </Button>
          </HStack>
        )}
      </Flex>

      {/* Performance Table */}
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Vendor</Th>
            <Th>P50</Th>
            <Th>P75</Th>
            <Th>P90</Th>
            <Th>P95</Th>
            <Th>P99</Th>
          </Tr>
        </Thead>
        <Tbody>
          {currentItems.map((item, idx) => (
            <Tr key={`${item.vendor}-${idx}`}>
              <Td>{item.vendor}</Td>
              <Td>{item.p50}</Td>
              <Td>{item.p75}</Td>
              <Td>{item.p90}</Td>
              <Td>{item.p95}</Td>
              <Td>{item.p99}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      {/* Pagination Controls */}
      <Flex justifyContent="space-between" alignItems="center" mt={4}>
        <Button
          onClick={handlePreviousPage}
          isDisabled={currentPage === 1}
          colorScheme="blue"
          size="sm"
          borderRadius="md"
          type="button" // Explicitly set button type
        >
          Previous
        </Button>
        <Text>
          Page {currentPage} of {totalPages}
        </Text>
        <Button
          onClick={handleNextPage}
          isDisabled={currentPage === totalPages}
          colorScheme="blue"
          size="sm"
          borderRadius="md"
          type="button" // Explicitly set button type
        >
          Next
        </Button>
      </Flex>
    </Box>
  );
};

export default PerformancePanel;