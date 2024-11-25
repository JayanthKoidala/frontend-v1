import { QuestionIcon } from "@chakra-ui/icons";
import { Card, CardBody, Flex, Text, VStack } from "@chakra-ui/react";
import VendorCard from "./VendorCard";

export const vendorList = [
  {
    name: "Karza",
    supportedIn: ["IN", "US"],
    logo: "",
  },
  {
    name: "Signzy",
    supportedIn: ["IN", "US"],
    logo: "",
  },
  {
    name: "Hyperverge",
    supportedIn: ["IN", "US"],
    logo: "",
  },
  {
    name: "Perfios",
    supportedIn: ["IN", "US"],
    logo: "",
  },
  {
    name: "chalo",
    supportedIn: ["IN", "HR"],
    logo: "",
  },
];

const VendorList = () => {
  return (
    <Card p={"0px"}>
      <CardBody>
        <Flex alignItems={"center"} gap={"3"}>
          <Text fontSize="xl" fontFamily="Work sans">
            Select a Vendor
          </Text>
          <div style={{ position: "relative", bottom: "0.6rem" }}>
            <QuestionIcon />
          </div>
        </Flex>
        <VStack gap={"2"}>
          {vendorList.map((vendor, index) => (
            <VendorCard vendor={vendor} key={index} />
          ))}
        </VStack>
      </CardBody>
    </Card>
  );
};

export default VendorList;
