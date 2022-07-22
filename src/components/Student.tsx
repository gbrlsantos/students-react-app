import { Td, Tooltip, Tr, useControllableState } from "@chakra-ui/react";
import * as React from "react"
import { IStudent } from "../interfaces/IStudent"
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { motion } from "framer-motion";
import DeleteDialog from "./DeleteDialog";
import NewStudentModal from "./NewStudentModal";

type Props = {
  student: IStudent;
};

const Student: React.FC<Props> = ({ student }) => {
  const [ isModalOpen, setIsModalOpen ] = useControllableState({ defaultValue: false })
  const [ removeStudentDialog, setRemoveStudentDialog ] = useControllableState({ defaultValue: false})
  const [ areOptionsOpen, setAreOptionsOpen ] = useControllableState({ defaultValue: false })
  const { name, email, cpf, _id } = student;

  function handleMouseEnter() {
    setAreOptionsOpen(true);
  }

  function handleMouseLeave() {
    setAreOptionsOpen(false);
  }

  return (
    <>
      {
        isModalOpen
        && <NewStudentModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          newStudent={false}
          student={student}
        />
      }
      { removeStudentDialog
        && <DeleteDialog
        _id={_id}
        name={name}
        removeStudentDialog={removeStudentDialog}
        setRemoveStudentDialog={setRemoveStudentDialog}
        /> }
      <Tr
        id={_id}
        cursor={"pointer"}
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
      >
        <Td>{name}</Td>
        <Td>{email}</Td>
        <Td
          width={"fit-content"}
        >{cpf}</Td>
        <motion.td
          animate={{
            x: areOptionsOpen ? '-20px' : '0',
            display: areOptionsOpen ? 'table-cell' : 'none',
          }}
        >
          <Tooltip label="Editar usuário">
            <EditIcon 
              w={5} h={6}
              marginRight="2"
              onClick={() => setIsModalOpen(true)}
            />
          </Tooltip>
          <Tooltip label="Excluir usuário">
            <DeleteIcon 
              w={5} h={6}
              color="red.500"
              onClick={() => setRemoveStudentDialog(true)}
            />
          </Tooltip>
        </motion.td>
      </Tr>
    </>
  );
};

export default Student;