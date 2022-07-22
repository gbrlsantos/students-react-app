import { Box, Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { StudentsDataContext } from "../context/StudentsDataContext";
import { IStudent, IStudents } from "../interfaces/IStudent";
import Student from "./Student";

type Props = {
  data: IStudents,
}

const StudentsTable: React.FC<Props> = ({data}) => {
  console.log(data)
  let { studentsData } = useContext(StudentsDataContext)
  studentsData = data

  return(
    <Box
      borderTopLeftRadius="2rem"
      borderTopRightRadius="2rem"
      bg="descomplica.100"
      h="100vh"
      w="100%"
    >
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
            {studentsData && studentsData.findStudents.map((student: IStudent, index: number) => (
              <Student key={index} student={student} />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default StudentsTable;
