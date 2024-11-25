import { useState, useEffect } from "react";
import { Box, Button, Input, Text, Spinner, Alert, AlertIcon } from "@chakra-ui/react";

const TryoutSection = ({ apiName, placeholder, defaultInput, validateInput, mockSuccessResponse, mockErrorResponse }) => {
  const [inputValue, setInputValue] = useState(defaultInput);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setInputValue(defaultInput);
    setError(null);
    setResponse(null);
  }, [apiName, defaultInput]);

  const handleSubmit = () => {
    if (!inputValue || !validateInput(inputValue)) {
      setError(`${apiName} is required and must be valid.`);
      return;
    }

    setLoading(true);
    setError(null);
    setResponse(null);

    setTimeout(() => {
      if (validateInput(inputValue)) {
        setResponse(mockSuccessResponse);
      } else {
        setResponse(mockErrorResponse);
      }
      setLoading(false);
    }, 500);
  };

  return (
    <Box>
      <Text fontWeight="bold">{apiName} Tryout</Text>
      <Input
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        mb={4}
        isInvalid={!!error}
      />
      {error && (
        <Alert status="error" mb={4}>
          <AlertIcon />
          {error}
        </Alert>
      )}
      <Button onClick={handleSubmit} colorScheme="blue" isDisabled={loading}>
        {loading ? <Spinner size="sm" /> : "Send Request"}
      </Button>
      {response && (
        <Box mt={4}>
          {response.status === "success" ? (
            <Alert status="success" mb={4}>
              <AlertIcon />
              {response.message}
            </Alert>
          ) : (
            <Alert status="error" mb={4}>
              <AlertIcon />
              {response.message}
            </Alert>
          )}
          <Text fontWeight="bold">Response:</Text>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </Box>
      )}
    </Box>
  );
};

export default TryoutSection;
