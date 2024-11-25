import { QuestionIcon, EditIcon } from "@chakra-ui/icons";
import {
  Button,
  Card,
  CardBody,
  Divider,
  Flex,
  Select,
  Text,
  Box,
} from "@chakra-ui/react";
import DecisionTable from "../Components/DecisionTable";
import { Link } from "react-router-dom";

const DecisionMainPage = () => {
  return (
    <Box p={6} bg="gray.50" minH="100vh">
      <Card bg="white" boxShadow="md" borderRadius="lg" p={6}>
        <CardBody>
          <Flex justifyContent="space-between" mb={6} alignItems="center">
            {/* Title and Icon Section */}
            <Flex alignItems="center" gap={2}>
              <Text fontSize="2xl" fontFamily="Work sans" color="teal.700" fontWeight="bold">
                Templates
              </Text>
              <QuestionIcon color="teal.500" />
            </Flex>

            {/* Build Your Own Button */}
            <Link to="/Decision/Workflow">
              <Button
                size="sm"
                bg="teal.600"
                color="white"
                rightIcon={<EditIcon />}
                _hover={{ bg: "teal.700" }}
                borderRadius="md"
              >
                Build Your Own
              </Button>
            </Link>
          </Flex>

          <Divider mb={4} />

          {/* Filters Section */}
          <Flex gap={2} w={"50%"} mb={6}>
            <Select placeholder="Category" size="xs">
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </Select>
            <Select placeholder="Use Cases" size="xs">
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </Select>
            <Select placeholder="Document" size="xs">
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </Select>
          </Flex>

          {/* Decision Table Section */}
          <Card bg="white" boxShadow="sm" borderRadius="lg">
            <CardBody>
              <DecisionTable />
            </CardBody>
          </Card>
        </CardBody>
      </Card>
    </Box>
  );
};

export default DecisionMainPage;
