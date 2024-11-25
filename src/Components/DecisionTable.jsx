import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
  Box,
  Button,
} from "@chakra-ui/react";
import { FaPencilAlt } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const tableData = [
  {
    sNo: "1",
    templateName: "PAN Verification",
    category: "Identity Verification",
    createdBy: "Admin",
  },
  {
    sNo: "2",
    templateName: "Aadhaar Verification",
    category: "Identity Verification",
    createdBy: "User1",
  },
  {
    sNo: "3",
    templateName: "Document Verification",
    category: "Identity Verification",
    createdBy: "User2",
  },
  {
    sNo: "4",
    templateName: "KYC Verification",
    category: "Compliance",
    createdBy: "Admin",
  },
  {
    sNo: "5",
    templateName: "Address Verification",
    category: "Identity Verification",
    createdBy: "User3",
  },
  {
    sNo: "6",
    templateName: "Credit Score Check",
    category: "Financial",
    createdBy: "User1",
  },
  {
    sNo: "7",
    templateName: "Identity Check",
    category: "Identity Verification",
    createdBy: "Admin",
  },
  {
    sNo: "8",
    templateName: "Employment Verification",
    category: "Employment",
    createdBy: "User4",
  },
  {
    sNo: "9",
    templateName: "Bank Statement Verification",
    category: "Financial",
    createdBy: "User2",
  },
  {
    sNo: "10",
    templateName: "SSN Verification",
    category: "Identity Verification",
    createdBy: "Admin",
  },
  {
    sNo: "11",
    templateName: "Passport Verification",
    category: "Identity Verification",
    createdBy: "User3",
  },
  {
    sNo: "12",
    templateName: "Utility Bill Verification",
    category: "Address Verification",
    createdBy: "User4",
  },
  {
    sNo: "13",
    templateName: "Tax Document Verification",
    category: "Financial",
    createdBy: "Admin",
  },
  {
    sNo: "14",
    templateName: "Loan Application Verification",
    category: "Financial",
    createdBy: "User1",
  },
  {
    sNo: "15",
    templateName: "Background Check",
    category: "Employment",
    createdBy: "User2",
  },
  {
    sNo: "16",
    templateName: "Criminal Record Check",
    category: "Compliance",
    createdBy: "Admin",
  },
  {
    sNo: "17",
    templateName: "Credit Card Verification",
    category: "Financial",
    createdBy: "User3",
  },
  {
    sNo: "18",
    templateName: "Voter ID Verification",
    category: "Identity Verification",
    createdBy: "User4",
  },
  {
    sNo: "19",
    templateName: "Birth Certificate Verification",
    category: "Identity Verification",
    createdBy: "Admin",
  },
  {
    sNo: "20",
    templateName: "Marriage Certificate Verification",
    category: "Identity Verification",
    createdBy: "User1",
  },
  {
    sNo: "21",
    templateName: "Insurance Verification",
    category: "Financial",
    createdBy: "User2",
  },
  {
    sNo: "22",
    templateName: "Reference Check",
    category: "Employment",
    createdBy: "Admin",
  },
  {
    sNo: "23",
    templateName: "Professional License Verification",
    category: "Employment",
    createdBy: "User3",
  },
  {
    sNo: "24",
    templateName: "Identity Proof Verification",
    category: "Identity Verification",
    createdBy: "User4",
  },
  {
    sNo: "25",
    templateName: "Employee ID Verification",
    category: "Employment",
    createdBy: "Admin",
  },
  {
    sNo: "26",
    templateName: "Credit Report Verification",
    category: "Financial",
    createdBy: "User1",
  },
];

const DecisionTable = () => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;
  const totalPages = Math.ceil(tableData.length / rowsPerPage);

  const handleClick = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <TableContainer>
      <Table variant="striped" colorScheme="gray" size="sm">
        <Thead bg="teal.600">
          <Tr>
            <Th color="white">#</Th>
            <Th color="white">Template Names</Th>
            <Th color="white">Category</Th>
            <Th color="white">Created By</Th>
            <Th color="white">Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tableData
            .slice((page - 1) * rowsPerPage, page * rowsPerPage)
            .map((data, index) => (
              <Tr key={index}>
                <Td>{data.sNo}</Td>
                <Td>{data.templateName}</Td>
                <Td>{data.category}</Td>
                <Td>{data.createdBy}</Td>
                <Td>
                  <Link to="/Decision/Workflow">
                    <Button size="xs" variant="ghost" colorScheme="teal">
                      <FaPencilAlt />
                    </Button>
                  </Link>
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>

      {/* Pagination Controls */}
      <Flex justifyContent="space-between" mt="1rem" alignItems="center">
        <Box fontSize="sm" color="gray.600">
          {`Showing ${(page - 1) * rowsPerPage + 1}-${Math.min(
            page * rowsPerPage,
            tableData.length
          )} of ${tableData.length}`}
        </Box>
        <Flex gap={2}>
          <Button
            size="xs"
            onClick={() => handleClick(page - 1)}
            disabled={page === 1}
            _hover={{ bg: "teal.500", color: "white" }}
          >
            &laquo;
          </Button>
          {[...Array(totalPages)].map((_, i) => (
            <Button
              key={i}
              size="xs"
              onClick={() => handleClick(i + 1)}
              bg={i + 1 === page ? "teal.600" : "gray.100"}
              color={i + 1 === page ? "white" : "black"}
              _hover={{ bg: "teal.500", color: "white" }}
            >
              {i + 1}
            </Button>
          ))}
          <Button
            size="xs"
            onClick={() => handleClick(page + 1)}
            disabled={page === totalPages}
            _hover={{ bg: "teal.500", color: "white" }}
          >
            &raquo;
          </Button>
        </Flex>
      </Flex>
    </TableContainer>
  );
};

export default DecisionTable;