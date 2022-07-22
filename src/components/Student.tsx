import { Td, Tr } from "@chakra-ui/react";
import * as React from "react"
import { IStudent } from "../interfaces/IStudent"

type Props = {
  student: IStudent;
};

const Student: React.FC<Props> = ({ student }) => {
  const { name, email, cpf } = student;
  console.log(name)

  return (
    <Tr>
      <Td>{name}</Td>
      <Td>{email}</Td>
      <Td>{cpf}</Td>
    </Tr>
  );
};

export default Student;