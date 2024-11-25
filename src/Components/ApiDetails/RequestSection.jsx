import { useState } from "react";
import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Table,
  Tbody,
  Tr,
  Td,
} from "@chakra-ui/react";

const schemaData = [
  {
    attribute: "panNumber",
    type: "string",
    description: "Valid PAN Number",
    validation: "Regex: [A-Z]{5}[0-9]{4}[A-Z]",
    mandatory: "Yes",
  },
  {
    attribute: "consent",
    type: "boolean",
    description: "Consent for verification",
    validation: "true/false",
    mandatory: "Yes",
  },
];

const bodyData = { panNumber: "ABCDE1234Z", consent: true };

const headerData = {
  Authorization: "Bearer token...",
  "Content-Type": "application/json",
};

const RequestSection = () => {
  const [activeTab, setActiveTab] = useState("schema");

  return (
    <Tabs isFitted>
      <TabList>
        <Tab onClick={() => setActiveTab("schema")}>Schema</Tab>
        <Tab onClick={() => setActiveTab("body")}>Body</Tab>
        <Tab onClick={() => setActiveTab("headers")}>Headers</Tab>
      </TabList>

      <TabPanels>
        {/* Schema Tab */}
        <TabPanel>
          <Table variant="simple">
            <Tbody>
              {schemaData.map((item, index) => (
                <Tr key={index}>
                  <Td>
                    <b>{item.attribute}</b>
                  </Td>
                  <Td>{item.type}</Td>
                  <Td>{item.description}</Td>
                  <Td>{item.validation}</Td>
                  <Td>{item.mandatory}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TabPanel>
\
        <TabPanel>
          <Box as="pre">{JSON.stringify(bodyData, null, 2)}</Box>
        </TabPanel>
\
        <TabPanel>
          <Box as="pre">{JSON.stringify(headerData, null, 2)}</Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default RequestSection;
