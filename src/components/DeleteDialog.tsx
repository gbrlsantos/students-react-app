import { useLazyQuery } from "@apollo/client"
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button } from "@chakra-ui/react"
import React, { useContext } from "react"
import { StudentsDataContext } from "../context/StudentsDataContext"
import { deleteStudent, findStudents } from "../graphql"
import { useStudentMutation } from "../hooks/useRequest"

type Props = {
  _id: string,
  name: string,
  removeStudentDialog: boolean,
  setRemoveStudentDialog: React.Dispatch<React.SetStateAction<boolean>>
}

const DeleteDialog: React.FC<Props> = ({ _id, name, setRemoveStudentDialog, removeStudentDialog }) => {
  const [ removeStudent ] = useStudentMutation(deleteStudent)
  const { setStudentsData, setIsErrorAlert } = useContext(StudentsDataContext)
  const [ query ] = useLazyQuery(findStudents);

  const cancelRef = React.useRef(null)
  function handleStudentDelete() {
    removeStudent({
      variables: {
        id: _id
      }
    }).catch(() => setIsErrorAlert(true))
    query()
    .then((data) => {
      data.refetch()
      .then((result) => {
        setStudentsData(result.data)
        setRemoveStudentDialog(false)
      })
    })
  }

  return (
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
  )
}

export default DeleteDialog;