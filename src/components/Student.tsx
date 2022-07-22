import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, Slide, Td, Tooltip, Tr, useControllableState } from "@chakra-ui/react";
import * as React from "react"
import { IStudent } from "../interfaces/IStudent"
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { motion } from "framer-motion";
import { deleteStudent } from "../graphql";
import { useStudentMutation } from "../hooks/useRequest";

type Props = {
  student: IStudent;
};

const Student: React.FC<Props> = ({ student }) => {
  const [ removeStudent ] = useStudentMutation(deleteStudent)
  const [ removeStudentDialog, setRemoveStudentDialog ] = useControllableState({ defaultValue: false})
  const cancelRef = React.useRef(null)
  
  const [ pressedStudentId, setPressedStudentId ] = React.useState("")
  const [ areOptionsOpen, setAreOptionsOpen ] = useControllableState({ defaultValue: false })
  const { name, email, cpf, _id } = student;

  function handleMouseEnter() {
    setAreOptionsOpen(true);
    setPressedStudentId(_id)
  }

  function handleMouseLeave() {
    setAreOptionsOpen(false);
  }

  function handleDeleteConfirm() {
    setRemoveStudentDialog(true);
  }


  function handleStudentDelete() {
    console.log(pressedStudentId)
    removeStudent({
      variables: {
        _id: pressedStudentId
      }
    }).catch((err) => console.log(err))
    
  }

  return (
    <>
      <AlertDialog
        isOpen={removeStudentDialog}
        leastDestructiveRef={cancelRef}
        onClose={() => setRemoveStudentDialog(false)}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Deletar { name }
            </AlertDialogHeader>

            <AlertDialogBody>
              Você tem certeza? Essa ação não poderá ser desfeita.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={() => setRemoveStudentDialog(false)}>
                Cancelar
              </Button>
              <Button colorScheme='red' onClick={() => handleStudentDelete()} ml={3}>
                Deletar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
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
            />
          </Tooltip>
          <Tooltip label="Excluir usuário">
            <DeleteIcon 
              w={5} h={6}
              color="red.500"
              onClick={() => handleDeleteConfirm()}
            />
          </Tooltip>
        </motion.td>
      </Tr>
    </>
  );
};

export default Student;