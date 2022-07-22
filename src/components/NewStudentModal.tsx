import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";

import React from "react";
import NewStudentForm from "./NewStudentForm";

type Props = {
  isModalOpen: boolean
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
};

const NewStudentModal: React.FC<Props> = ({isModalOpen, setIsModalOpen}) => {
  return(
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} size={"2xl"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Criar novo estudante</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <NewStudentForm />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default NewStudentModal;