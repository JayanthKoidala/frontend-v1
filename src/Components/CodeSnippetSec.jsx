import { Card, CardBody, Flex, Select } from "@chakra-ui/react";
import { CopyBlock, dracula } from "react-code-blocks";

const codeData = {
  code: `import re
for test_string in ['555-1212', 'ILL-EGAL']:
    if re.match(r'^d{3}-'^d{4}$', test_string):
        print (test_string, 'is a valid US local phone number')
    else:
        print (test_string, 'rejected')`,
  language: "Python",
};

const CodeSnippetSec = () => {
  return (
    <Card>
      <CardBody>
        <Flex direction={"column"}>
          <Flex justifyContent={"space-between"} mb={4}>
            <div>Request</div>
            <Select placeholder="Language" width="150px" />
          </Flex>
          <div style={{ backgroundColor: "#eeeeee" }}>
            <CopyBlock
              text={codeData.code}
              language={codeData.language}
              showLineNumbers
              wrapLines
              theme={dracula}
            />
          </div>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default CodeSnippetSec;
