import { DocumentNode, useQuery, useMutation } from "@apollo/react-hooks";
import { IStudents, IStudentMutation } from "../interfaces/IStudent";

export function useStudentQuery(gqlQuery: DocumentNode) {
  const { loading, error, data, refetch } = useQuery<IStudents>(gqlQuery);
  return { loading, error, data, refetch };
}

export function useStudentMutation(gqlQuery: DocumentNode) {
  const [addStudent] = useMutation<IStudentMutation>(gqlQuery);
  return [addStudent];
}
