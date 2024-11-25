import { useState } from "react";
import { Tabs, TabList, Tab, Box, Flex } from "@chakra-ui/react";
import ApiDocuments from "./ApiDocuments";
import PricingTable from "./PricingTable";
import PerformancePanel from "./PerformancePanel";
import ApiDetailsView from "./ApiDetailsView";

const DiscoverTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedApi, setSelectedApi] = useState(null);

  return (
    <Flex w="100%" h="100vh" bg="gray.100" direction="column" overflow="hidden">
      <Box
        bg="white"
        borderBottom="1px solid"
        borderColor="gray.200"
        position="sticky"
        top={0}
        zIndex={10}
        px={4}
        py={2}
        boxShadow="sm"
      >
        <Tabs
          isFitted
          variant="unstyled"
          index={activeTab}
          onChange={(index) => setActiveTab(index)}
        >
          <TabList>
            {['API Documents', 'Pricing', 'Performance'].map((tabLabel, index) => (
              <Tab
                key={index}
                fontWeight="medium"
                _selected={{ color: "teal.600", borderBottom: "2px solid", borderColor: "teal.600" }}
                _hover={{ color: "teal.500" }}
                p={3}
              >
                {tabLabel}
              </Tab>
            ))}
          </TabList>
        </Tabs>
      </Box>

      <Box flex="1" bg="white" p={4} m={4} borderRadius="md" boxShadow="base" overflow="hidden">
        {activeTab === 0 && (
          <Flex gap={4} overflow="hidden">
            <ApiDocuments setSelectedApi={setSelectedApi} selectedApi={selectedApi} />
            {selectedApi && (
              <Box overflowY="auto" maxH="calc(100vh - 180px)" flex="1" bg="gray.50" p={4} borderRadius="md">
                <ApiDetailsView apiComponent={selectedApi} />
              </Box>
            )}
          </Flex>
        )}
        {activeTab === 1 && (
          <Box overflowY="auto" maxH="calc(100vh - 180px)" bg="gray.50" p={4} borderRadius="md">
            <PricingTable />
          </Box>
        )}
        {activeTab === 2 && (
          <Box overflowY="auto" maxH="calc(100vh - 180px)" bg="gray.50" p={4} borderRadius="md">
            <PerformancePanel />
          </Box>
        )}
      </Box>
    </Flex>
  );
};

export default DiscoverTabs;
