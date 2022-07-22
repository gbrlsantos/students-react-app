import gql from "graphql-tag";

export const findStudents = gql`
  {
    findStudents {
      name
      cpf
      email
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