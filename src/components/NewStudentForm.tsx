import { InputGroup, InputLeftElement, Stack, Input, Button, useControllableState } from "@chakra-ui/react"
import { AtSignIcon } from '@chakra-ui/icons'
import { useStudentMutation } from "../hooks/useRequest"
import { createStudent, findStudents, updateStudent } from "../graphql"
import { IStudent } from "../interfaces/IStudent"
import { useContext } from "react"
import { useLazyQuery } from "@apollo/client"
import { StudentsDataContext } from "../context/StudentsDataContext"

type Props = {
  newStudent: boolean
  student?: IStudent
}

const NewStudentForm: React.FC<Props> = ({student, newStudent}) => {
  const {setIsCreateModalOpen, setIsUpdateModalOpen, setStudentsData, setIsErrorAlert } = useContext(StudentsDataContext)

  const [ addStudent ] = useStudentMutation(createStudent)
  const [ alterStudent ] = useStudentMutation(updateStudent)

  const [ email, setEmail ] = useControllableState({ defaultValue: student? student.email : '' })
  const [ cpf, setCpf ] = useControllableState({ defaultValue: student? student.cpf : '' })
  const [ name, setName ] = useControllableState({ defaultValue: student? student.name : '' })

  const [ query ] = useLazyQuery(findStudents);

  function handleSubmitForm() {
    if (newStudent) {
      addStudent({
        variables: { name, cpf, email }
      })
      .then((result) => {
        setIsErrorAlert(false)
        query()
        .then((data) => {
          data.refetch()
          .then((result) => {
            setStudentsData(result.data)
            newStudent ? setIsCreateModalOpen(false) : setIsUpdateModalOpen(false)
          })
        })
      })
      .catch(() => setIsErrorAlert(true))
    }
    else {
      alterStudent({
        variables: { id: student?._id, name, cpf, email },
        refetchQueries: [{ query: findStudents }]
      })
      .then((result) => {
          setIsErrorAlert(false)
          query()
          .then((data) => {
            data.refetch()
            .then((result) => {
              setStudentsData(result.data)
              newStudent ? setIsCreateModalOpen(false) : setIsUpdateModalOpen(false)
            })
          })
        })
        .catch(() => setIsErrorAlert(true))
    }
  }

  return (
    <Stack spacing={4}>
      <Input
          value={ name }
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
          value={ email }
          type='email'
          placeholder='E-mail do estudante'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)}
        />
      </InputGroup>
      <Input
        value = { cpf }
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
        { newStudent? "Cadastrar" : "Confirmar" }
      </Button>
    </Stack>
  )
}

export default NewStudentForm;