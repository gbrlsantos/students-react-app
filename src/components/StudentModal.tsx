import { Alert, AlertIcon, AlertTitle, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";

import React, { useContext } from "react";
import { StudentsDataContext } from "../context/StudentsDataContext";
import { IStudent } from "../interfaces/IStudent";
import NewStudentForm from "./NewStudentForm";

type Props = {
  newStudent: boolean
  student?: IStudent
};

const StudentModal: React.FC<Props> = ({newStudent, student}) => {
  const { isCreateModalOpen, setIsCreateModalOpen, isUpdateModalOpen, setIsUpdateModalOpen, isErrorAlert } = useContext(StudentsDataContext)
  return(
    <Modal isOpen={ newStudent ? isCreateModalOpen : isUpdateModalOpen} onClose={() => newStudent ? setIsCreateModalOpen(false) : setIsUpdateModalOpen(false)} size={"2xl"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          { newStudent && "Criar novo estudante" }
          { student && `Editar ${student.name}` }
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          { newStudent && <NewStudentForm newStudent={true} /> }
          { student && <NewStudentForm newStudent={false} student={student} /> }
          {
            isErrorAlert && 
              <Alert status='error' mt={"4"}>
                <AlertIcon />
                <AlertTitle>Por favor, preencha todos os campos. </AlertTitle>
              </Alert>
            }
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default StudentModal;