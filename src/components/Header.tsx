import { Button, Flex, Image, useControllableState } from "@chakra-ui/react";
import { useContext } from "react";
import { StudentsDataContext } from "../context/StudentsDataContext";
import StudentModal from "./StudentModal";

const Header: React.FC = () => {
  const { isCreateModalOpen, setIsCreateModalOpen } = useContext(StudentsDataContext)

  return (
    <Flex justifyContent="space-between" my="8">
      <Image src="https://d3awytnmmfk53d.cloudfront.net/landings/static/images/core/logo_verde.svg"/>
      <Button
        onClick={() => setIsCreateModalOpen(true)}
        size="md"
        color={"black"}
        border="2px"
        backgroundColor={"transparent"}
        borderRadius="2rem"
        fontWeight={"bold"}
      >
        Criar novo estudante
      </Button>
      { isCreateModalOpen && <StudentModal newStudent={true}/>}
    </Flex>
  )
}

export default Header;