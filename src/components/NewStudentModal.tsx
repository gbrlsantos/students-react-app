import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import React from "react";

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
          Blablabla
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={() => setIsModalOpen(false)}>
            Close
          </Button>
          <Button variant='ghost'>Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default NewStudentModal;