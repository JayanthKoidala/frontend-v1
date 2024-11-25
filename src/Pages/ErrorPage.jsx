import { Box, Heading, Text, Button, VStack, useColorModeValue } from "@chakra-ui/react";
import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate("/");
  };

  const getErrorMessage = () => {
    if (error?.status === 404) {
      return "Page Not Found";
    } else if (error?.status === 500) {
      return "Internal Server Error";
    } else {
      return "Oops! Something went wrong.";
    }
  };

  const renderAdditionalInfo = () => {
    if (error?.status === 404) {
      return "The page you are looking for does not exist.";
    } else if (error?.status === 500) {
      return "It seems there was a server error or the page is not available.";
    } else {
      return "Please check the URL or try again later.";
    }
  };

  return (
    <Box
      textAlign="center"
      py={10}
      px={6}
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg={useColorModeValue("gray.50", "gray.900")}
    >
      <VStack spacing={6} maxW="lg" p={8} bg={useColorModeValue("white", "gray.800")} borderRadius="md" boxShadow="lg">
        <Heading fontSize="4xl" color={useColorModeValue("red.600", "red.400")}>
          {getErrorMessage()}
        </Heading>
        <Text fontSize="md" color={useColorModeValue("gray.700", "gray.300")}>
          {renderAdditionalInfo()}
        </Text>

        <VStack spacing={3} mt={4}>
          <Button colorScheme="teal" size="md" onClick={handleGoHome}>
            Go to Homepage
          </Button>
          <Button variant="outline" colorScheme="teal" size="md" onClick={handleGoBack}>
            Go Back
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
};

export default ErrorPage;
