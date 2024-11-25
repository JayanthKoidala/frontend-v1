import {
  Box,
  Heading,
  SimpleGrid,
  Center,
  Text,
  Stack,
  Image,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import Categories from "../Components/Documents/Categories";
import { useState } from "react";

function DocumentsPage() {
  const cardBg = useColorModeValue("gray.50", "gray.700");
  const cardHoverBg = useColorModeValue("gray.100", "gray.600");
  const selectedCardBg = useColorModeValue("teal.50", "teal.700");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.path === selectedCategory ? null : category.path);
  };

  return (
    <Box p={5} bg={useColorModeValue("gray.100", "gray.800")} minH="100vh">
      <Stack spacing={8} maxW="1200px" mx="auto">
        <Heading as="h1" size="2xl" textAlign="center" color={useColorModeValue("teal.600", "teal.300")}>
          Documents
        </Heading>

        <Box>
          <Heading size="md" mb={4} color={useColorModeValue("gray.700", "gray.300")}>
            Categories
          </Heading>

          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
            {Categories.map((category) => (
              <VStack
                key={category.name}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                p={6}
                bg={selectedCategory === category.path ? selectedCardBg : cardBg} // Highlight if selected
                _hover={{
                  bg: cardHoverBg,
                  boxShadow: "lg",
                  transform: "scale(1.05)",
                  transition: "0.3s",
                }}
                transition="0.3s"
                height="100%"
                cursor="pointer"
                onClick={() => handleCategoryClick(category)}
              >
                {category.icon && (
                  <Image
                    src={category.icon}
                    alt={`${category.name} icon`}
                    boxSize="50px"
                    mb={4}
                  />
                )}
                <Center>
                  <Text fontWeight="bold" fontSize="lg" color={useColorModeValue("gray.800", "gray.200")}>
                    {category.name}
                  </Text>
                </Center>
              </VStack>
            ))}
          </SimpleGrid>
        </Box>

        {/* Conditionally render content based on selected category */}
        {selectedCategory && (
          <Box
            mt={10}
            p={6}
            borderWidth="1px"
            borderRadius="lg"
            bg={useColorModeValue("white", "gray.700")}
            boxShadow="md"
          >
            <Heading mb={4} color={useColorModeValue("teal.600", "teal.300")}>
              {Categories.find((cat) => cat.path === selectedCategory)?.name}
            </Heading>
            <Text fontSize="lg" color={useColorModeValue("gray.800", "gray.200")}>
              {Categories.find((cat) => cat.path === selectedCategory)?.content}
            </Text>
          </Box>
        )}
      </Stack>
    </Box>
  );
}

export default DocumentsPage;
