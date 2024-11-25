import { useState } from "react";
import { Box, List, ListItem, Collapse, Button, Heading, Input } from "@chakra-ui/react";

const ApiDocuments = ({ setSelectedApi, selectedApi }) => {
  const [openCategory, setOpenCategory] = useState(null);

  const handleCategoryToggle = (category) => {
    setOpenCategory((prevCategory) => (prevCategory === category ? null : category));
  };

  const handleApiSelect = (apiKey) => {
    setSelectedApi(apiKey);
  };

  const categories = [
    {
      name: "KYC Individual",
      items: [
        { key: "panAuth", label: "PAN Authentication" },
        { key: "panAdvanced", label: "PAN Profile (Detailed)" },
        { key: "aadhaarAuth", label: "Aadhaar Verification" },
        { key: "driversLicenseAuth", label: "Driver's License Verification" },
        { key: "passportAuth", label: "Passport Verification" },
      ],
    },
    {
      name: "KYC Entity",
      items: [
        { key: "businessAuth", label: "Business Verification" },
        { key: "taxIdAuth", label: "Tax ID Verification" },
        { key: "companyRegistration", label: "Company Registration Check" },
      ],
    },
    {
      name: "Utility Bills",
      items: [
        { key: "electricityBillAuth", label: "Electricity Bill Verification" },
        { key: "gasBillAuth", label: "Gas Bill Verification" },
        { key: "waterBillAuth", label: "Water Bill Verification" },
      ],
    },
    {
      name: "Banking and Financial",
      items: [
        { key: "bankAccountAuth", label: "Bank Account Verification" },
        { key: "creditCheck", label: "Credit Score Check" },
        { key: "loanEligibility", label: "Loan Eligibility Verification" },
      ],
    },
  ];

  return (
    <Box w="350px" h="100%" p={5} bg="gray.50" borderRight="1px solid" borderColor="gray.200" boxShadow="lg" overflowY="auto">
      {/* Search Input */}
      <Input
        placeholder="Search API"
        mb={4}
        bg="white"
        borderColor="gray.300"
        borderRadius="md"
        boxShadow="sm"
        _focus={{ borderColor: "teal.400", boxShadow: "0 0 0 1px teal.400" }}
      />

      <Heading as="h3" size="md" mb={4} color="teal.700">
        API Categories
      </Heading>

      <List spacing={3}>
        {categories.map((category) => (
          <ListItem key={category.name}>
            <Button
              onClick={() => handleCategoryToggle(category.name)}
              w="100%"
              bg={openCategory === category.name ? "teal.500" : "teal.400"}
              color="white"
              _hover={{ bg: "teal.600" }}
              borderRadius="md"
              boxShadow="sm"
            >
              {category.name} {openCategory === category.name ? "−" : "+"}
            </Button>
            <Collapse in={openCategory === category.name} animateOpacity>
              <List pl={5} spacing={2}>
                {category.items.map((api) => (
                  <ListItem key={api.key}>
                    <Button
                      variant="link"
                      onClick={() => handleApiSelect(api.key)}
                      colorScheme={selectedApi === api.key ? "teal" : "blackAlpha"}
                      fontWeight={selectedApi === api.key ? "bold" : "normal"}
                      _hover={{ textDecoration: "underline", color: "teal.600" }}
                    >
                      {api.label}
                    </Button>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ApiDocuments;
