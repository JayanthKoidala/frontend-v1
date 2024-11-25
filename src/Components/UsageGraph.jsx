import { Bar } from "react-chartjs-2";
import { Box, Text, Flex, Select, useColorModeValue } from "@chakra-ui/react";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const UsageGraph = () => {
  const data = {
    labels: ["Service A", "Service B", "Service C", "Service D"],
    datasets: [
      { label: "Approved", data: [50, 30, 40, 60], backgroundColor: "rgba(54, 162, 235, 0.6)" },
      { label: "Rejected", data: [20, 10, 15, 25], backgroundColor: "rgba(255, 99, 132, 0.6)" },
      { label: "Manual", data: [5, 8, 12, 4], backgroundColor: "rgba(255, 206, 86, 0.6)" },
    ],
  };

  const options = {
    responsive: true,
    indexAxis: "y",
    scales: {
      x: { beginAtZero: true },
      y: { beginAtZero: true },
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: useColorModeValue('gray.800', 'gray.200')
        }
      },
    },
  };

  return (
    <Box p={6} bg={useColorModeValue("white", "gray.800")} borderRadius="md" boxShadow="base">
      <Flex justifyContent="space-between" alignItems="center" mb={6}>
        <Text fontSize="lg" fontWeight="semibold" color={useColorModeValue("gray.700", "gray.200")}>
          Usage Statistics
        </Text>
        <Flex gap={3}>
          <Select placeholder="Vendor" size="sm" width="150px" borderColor="gray.300" _focus={{ borderColor: "teal.500" }}>
            <option value="vendorA">Vendor A</option>
            <option value="vendorB">Vendor B</option>
            <option value="vendorC">Vendor C</option>
            <option value="vendorD">Vendor D</option>
          </Select>
          <Select placeholder="Time Range" size="sm" width="150px" borderColor="gray.300" _focus={{ borderColor: "teal.500" }}>
            <option value="last7days">Last 7 Days</option>
            <option value="last30days">Last 30 Days</option>
            <option value="last6months">Last 6 Months</option>
            <option value="lastyear">Last Year</option>
          </Select>
          <Select placeholder="Time Grain" size="sm" width="150px" borderColor="gray.300" _focus={{ borderColor: "teal.500" }}>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
          </Select>
        </Flex>
      </Flex>
      <Box maxH="500px" overflowX="auto">
        <Bar data={data} options={options} />
      </Box>
    </Box>
  );
};

export default UsageGraph;
