export interface IStudent {
  _id: string,
  name: string,
  cpf: string,
  email: string,
  createdAt: Date,
  updatedAt?: Date
}

export interface IStudents {
  findStudents: IStudent[]
}

export type IStudentMutation = {
  addStudent: IStudent;
}