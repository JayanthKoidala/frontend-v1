import { Box, Grid, GridItem, Link, Text } from "@chakra-ui/react";
import VendorHealthGraph from "../Components/VendorHealthGraph";
import UsageGraph from "../Components/UsageGraph";
import RankingTable from "../Components/RankingTable";
import DropdownFilters from "../Components/DropdownFilters";

const DashboardPage = () => {
  return (
    <Box p={6} bg="gray.50" minH="100vh" display="flex" flexDirection="column">
      {/* Dropdown Filters */}
      <Box
        bg="white"
        p={4}
        mb={6}
        borderRadius="md"
        boxShadow="base"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
      >
        <DropdownFilters />
      </Box>

      {/* Main Dashboard Grid */}
      <Grid
        templateColumns={{ base: "1fr", lg: "2fr 1fr" }}
        gap={6}
        flex="1"
        height="calc(100vh - 180px)"
      >
        {/* Vendor Health and Usage Graphs Section */}
        <GridItem
          w="100%"
          bg="white"
          boxShadow="sm"
          p={6}
          borderRadius="lg"
          display="flex"
          flexDirection="column"
          maxHeight="100%"
          overflowY="auto"
        >
          {/* Vendor Health Graph Section */}
          <Box flex="1" mb={8}>
            <VendorHealthGraph />
            <Text textAlign="center" mt={4}>
              <Link color="teal.600" fontWeight="semibold" href="/discover">
                Click here to discover
              </Link>
            </Text>
          </Box>

          {/* Usage Graph Section */}
          <Box flex="1" mt={8}>
            <UsageGraph />
            <Text textAlign="center" mt={4}>
              <Link color="teal.600" fontWeight="semibold" href="/create-service">
                Click here to create a service
              </Link>
            </Text>
          </Box>
        </GridItem>

        {/* Ranking Table Section */}
        <GridItem
          w="100%"
          bg="white"
          boxShadow="sm"
          p={6}
          borderRadius="lg"
          position="sticky"
          top="10px" // Adjusted for better alignment in the viewport
          maxHeight="calc(100vh - 180px)"
        >
          <RankingTable />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default DashboardPage;
