import { Button, Flex, Image, useControllableState } from "@chakra-ui/react";
import NewStudentModal from "./NewStudentModal";

const Header: React.FC = () => {
  const [ isModalOpen, setIsModalOpen ] = useControllableState({ defaultValue: false })

  return (
    <Flex justifyContent="space-between" my="8">
      <Image src="https://d3awytnmmfk53d.cloudfront.net/landings/static/images/core/logo_verde.svg"/>
      <Button
        onClick={() => setIsModalOpen(true)}
        size="md"
        color={"black"}
        border="2px"
        backgroundColor={"transparent"}
        borderRadius="2rem"
        fontWeight={"bold"}
      >
        Criar novo estudante
      </Button>
      { isModalOpen && <NewStudentModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} newStudent={true}/>}
    </Flex>
  )
}

export default Header;