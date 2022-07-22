import { InputGroup, InputLeftElement, Stack, Input, Button, useControllableState } from "@chakra-ui/react"
import { AtSignIcon } from '@chakra-ui/icons'
import { useStudentMutation } from "../hooks/useRequest"
import { createStudent } from "../graphql"

const NewStudentForm: React.FC = () => {
  const [ addStudent ] = useStudentMutation(createStudent)

  const [ email, setEmail ] = useControllableState({ defaultValue: '' })
  const [ cpf, setCpf ] = useControllableState({ defaultValue: '' })
  const [ name, setName ] = useControllableState({ defaultValue: '' })

  function handleSubmitForm() {
    addStudent({
      variables: { name, cpf, email }
    })
  }

  return (
    <Stack spacing={4}>
      <Input
        type='text'
        placeholder='Nome do estudante' 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.currentTarget.value)}
      />
      <InputGroup>
        <InputLeftElement
          pointerEvents='none'
          children={<AtSignIcon color='gray.400'/>}
        />
        <Input
          type='email'
          placeholder='E-mail do estudante'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)}
        />
      </InputGroup>
      <Input
        type='text'
        placeholder='CPF do estudante'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCpf(e.currentTarget.value)}
      />
      <Button
        marginBottom={"28"}
        backgroundColor={"black"}
        color={"white"}
        onClick={() => handleSubmitForm()}
      >
        Cadastrar
      </Button>
    </Stack>
  )
}

export default NewStudentForm;