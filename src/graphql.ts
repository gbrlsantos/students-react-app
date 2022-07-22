import gql from "graphql-tag";

export const findStudents = gql`
  {
    findStudents {
      name
      cpf
      email
      _id
    }
  }
`;

export const createStudent = gql`
  mutation CreateStudent($email: String!, $cpf: String!, $name: String!) {
    createStudent(email: $email, cpf: $cpf, name: $name) {
      name
      cpf
      email
    }
  }
`;

export const deleteStudent = gql`
  mutation DeleteStudent($id: String!) {
    deleteStudent(_id: $id) {
      name
      cpf
      email
    }
}`

export const updateStudent = gql`
  mutation UpdateStudent($id: String!, $name: String, $cpf: String, $email: String) {
    updateStudent(_id: $id, name: $name, cpf: $cpf, email: $email) {
      name
      cpf
      email
    }
}`