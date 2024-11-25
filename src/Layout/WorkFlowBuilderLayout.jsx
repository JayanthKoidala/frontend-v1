import { Flex, Box } from "@chakra-ui/react";
import WorkflowTitleSec from "../Components/WorkflowTitleSec";
import VendorList from "../Components/VendorList";
import WorkFlowDesign from "../Components/WorkFlowDesign";
import CodeSnippetSec from "../Components/CodeSnippetSec";
import RequestSection from "../Components/ApiDetails/RequestSection";

const WorkFlowBuilderLayout = () => {
  return (
    <Flex direction="column" gap={6} h="100%" p={6} bg="gray.100">
      <WorkflowTitleSec />

      <Flex gap={6} justifyContent="space-between" flexGrow={1}>
        <Box flex="1" bg="white" borderRadius="md" boxShadow="md" p={6}>
          <VendorList />
        </Box>

        <Box flex="3" bg="white" borderRadius="md" boxShadow="md" p={6}>
          <WorkFlowDesign />
        </Box>

        <Flex direction="column" gap={6} flex="1">
          <Box bg="white" borderRadius="md" boxShadow="md" p={6}>
            <CodeSnippetSec />
          </Box>
          <Box bg="white" borderRadius="md" boxShadow="md" p={6}>
            <RequestSection />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default WorkFlowBuilderLayout;
