import { Bar } from "react-chartjs-2";
import { Box, Text, Flex, Select, useColorModeValue } from "@chakra-ui/react";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const VendorHealthGraph = () => {
  const data = {
    labels: ["Vendor A", "Vendor B", "Vendor C", "Vendor D"],
    datasets: [
      {
        label: "Latency (ms)",
        data: [100, 150, 200, 90],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "Performance (%)",
        data: [90, 85, 80, 95],
        backgroundColor: "rgba(153, 102, 255, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: { beginAtZero: true },
      y: { beginAtZero: true },
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: useColorModeValue('gray.800', 'gray.200'),
        },
      },
    },
  };

  return (
    <Box p={6} bg={useColorModeValue("white", "gray.800")} borderRadius="md" boxShadow="base">
      <Flex justifyContent="space-between" alignItems="center" mb={6}>
        <Text fontSize="lg" fontWeight="semibold" color={useColorModeValue("gray.700", "gray.200")}>
          Vendor Health
        </Text>
        <Flex gap={3}>
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

export default VendorHealthGraph;
