import { Box, Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Categories from "./Categories";

function DocumentsCategory() {
  const { category } = useParams();

  const selectedCategory = Categories.find(
    (cat) => cat.path.toLowerCase() === category.toLowerCase()
  );

  if (!selectedCategory) {
    return (
      <Box p={5}>
        <Heading mb={4}>Category Not Found</Heading>
        <Text fontSize="lg">
          The category you are looking for does not exist.
        </Text>
      </Box>
    );
  }

  return (
    <Box p={5}>
      <Heading mb={4}>{selectedCategory.name}</Heading>
      <Text fontSize="lg">{selectedCategory.content}</Text>
    </Box>
  );
}

export default DocumentsCategory;
