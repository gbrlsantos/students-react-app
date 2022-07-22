import { InputGroup, InputLeftElement, Stack, Input, Button } from "@chakra-ui/react"
import { AtSignIcon } from '@chakra-ui/icons'

const NewStudentForm: React.FC = () => {
  return (
    <Stack spacing={4}>
      <Input type='text' placeholder='Nome do estudante' />
      <InputGroup>
        <InputLeftElement
          pointerEvents='none'
          children={<AtSignIcon color='gray.400'/>}
        />
        <Input type='email' placeholder='E-mail do estudante' />
      </InputGroup>
      <Input type='text' placeholder='CPF do estudante' />
      <Button
        marginBottom={"28"}
        backgroundColor={"black"}
        color={"white"}
      >
        Cadastrar
      </Button>
    </Stack>
  )
}

export default NewStudentForm;