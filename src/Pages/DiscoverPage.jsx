import { Box, Flex } from "@chakra-ui/react";
import DiscoverTabs from "../Components/DiscoverTabs";

const DiscoverPage = () => {
  return (
    <Flex h="100vh">
      <Box flex="1" p={5}>
        <DiscoverTabs />
      </Box>
    </Flex>
  );
};

export default DiscoverPage;
