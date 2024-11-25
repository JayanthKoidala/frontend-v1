import { Card, CardBody, Text, Flex, Box } from "@chakra-ui/react";
import ReactCountryFlag from "react-country-flag";

const VendorCard = ({ vendor }) => {
  return (
    <Card width="100%" p={4} borderRadius="md" boxShadow="sm" _hover={{ boxShadow: "md", bg: "gray.50" }}>
      <Text fontSize="xl" fontWeight="bold" mb={2} color="teal.700">
        {vendor.name}
      </Text>
      <CardBody p={0} display="flex" alignItems="center">
        <Text mr={2} color="gray.600">Supported in:</Text>
        <Flex gap={2}>
          {vendor.supportedIn.map((code, index) => (
            <Box key={index}>
              <ReactCountryFlag countryCode={code} svg style={{ width: '1.5em', height: '1.5em' }} />
            </Box>
          ))}
        </Flex>
      </CardBody>
    </Card>
  );
};

export default VendorCard;
