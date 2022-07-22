import * as React from "react"
import {
  ChakraProvider,
  Box,
  extendTheme,
  Center,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

import { findStudents } from "./graphql";
import { useStudentQuery } from "./hooks/useRequest";
import Student from "./components/Student";
import { IStudent } from "./interfaces/IStudent";

const theme = extendTheme({
  colors: {
    descomplica: {
      100: "#00E88F",
    },
  },
})

const App: React.FC = () => {
  const { loading, error, data } = useStudentQuery(findStudents);
  const students = data?.getStudents

  if (error) return <h1>Something went wrong!</h1>;

  if (loading) return <h1>Loading...</h1>;

  return (
      <ChakraProvider theme={theme}>
        <Center>
          <Box borderTopLeftRadius="2rem" borderTopRightRadius="2rem" mt='28' bg="descomplica.100" h="100vh" w="70vw">
            <TableContainer>
              <Table variant='unstyled'>
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>E-mail</Th>
                    <Th>CPF</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {students && students.map((student: IStudent) => (
                    <Student key={student._id} student={student} />
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Center>
      </ChakraProvider>
  );
};

export default App;
