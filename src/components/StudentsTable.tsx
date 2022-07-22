import { Box, Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { findStudents } from "../graphql";
import { useStudentQuery } from "../hooks/useRequest";
import { IStudent } from "../interfaces/IStudent";
import LoadingScreen from "./generic/LoadingScreen";
import Student from "./Student";

const StudentsTable: React.FC = () => {
  const { loading, error, data } = useStudentQuery(findStudents);
  
  if (error) return <h1>Something went wrong!</h1>;

  if (loading) return <LoadingScreen />;

  return(
    <Box borderTopLeftRadius="2rem" borderTopRightRadius="2rem" bg="descomplica.100" h="100vh" w="100%">
      <TableContainer>
        <Table variant='unstyled'>
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>E-mail</Th>
              <Th>CPF</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.findStudents.map((student: IStudent) => (
              <Student key={student._id} student={student} />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default StudentsTable;
