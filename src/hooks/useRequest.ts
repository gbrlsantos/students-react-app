import { DocumentNode, useQuery, useMutation } from "@apollo/react-hooks";
import { IStudents, IStudentMutation } from "../interfaces/IStudent";

export function useStudentQuery(gqlQuery: DocumentNode) {
  const { loading, error, data } = useQuery<IStudents>(gqlQuery);
  return { loading, error, data };
}

export function useStudentMutation(gqlQuery: DocumentNode) {
  const [addStudent] = useMutation<IStudentMutation>(gqlQuery);
  return [addStudent];
}
