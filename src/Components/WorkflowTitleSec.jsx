import { SmallCloseIcon } from "@chakra-ui/icons";
import { Box, Button, Card, CardBody, Flex, Input } from "@chakra-ui/react";
import { MdSaveAlt } from "react-icons/md";

const WorkflowTitleSec = ({ workflowName, setWorkflowName, onCancel, onSave }) => {
  return (
    <Card p={4} borderRadius="md" boxShadow="md" mt={4}>
      <CardBody>
        <Flex justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={4}>
          <Box flex="1" maxW="300px" minW="200px">
            <Input
              placeholder="Workflow Name"
              size="md"
              backgroundColor="gray.100"
              color="black"
              borderRadius="md"
              value={workflowName}
              onChange={(e) => setWorkflowName(e.target.value)}
              _focus={{ borderColor: "teal.500", boxShadow: "0 0 0 1px teal.500" }}
            />
          </Box>
          <Flex gap={4} flexWrap="wrap">
            <Button
              variant="outline"
              colorScheme="red"
              onClick={onCancel}
              size="md"
              leftIcon={<SmallCloseIcon />}
            >
              Cancel
            </Button>
            <Button
              colorScheme="teal"
              onClick={onSave}
              size="md"
              leftIcon={<MdSaveAlt />}
              _hover={{ backgroundColor: "teal.600" }}
            >
              Save
            </Button>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default WorkflowTitleSec;
