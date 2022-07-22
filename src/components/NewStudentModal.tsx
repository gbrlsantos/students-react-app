import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";

import React from "react";
import { IStudent } from "../interfaces/IStudent";
import NewStudentForm from "./NewStudentForm";

type Props = {
  isModalOpen: boolean
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  newStudent: boolean
  student?: IStudent
};

const NewStudentModal: React.FC<Props> = ({isModalOpen, setIsModalOpen, newStudent, student}) => {
  return(
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} size={"2xl"}>
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
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default NewStudentModal;