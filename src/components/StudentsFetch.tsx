import { Box, Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { useContext, useEffect, useMemo, useState } from "react";
import { StudentsDataContext } from "../context/StudentsDataContext";
import { findStudents } from "../graphql";
import { useStudentQuery } from "../hooks/useRequest";
import { IStudent, IStudents } from "../interfaces/IStudent";
import LoadingScreen from "./generic/LoadingScreen";
import Student from "./Student";
import StudentsTable from "./StudentsTable";

const StudentsFetch: React.FC = () => {
  const { loading, error, data } = useStudentQuery(findStudents);
  const { studentsData, setStudentsData } = useContext(StudentsDataContext)

  if (error) return <h1>Ops, algo deu errado.</h1>;

  if (loading) return <LoadingScreen />;

  return (
    <>
      { data && <StudentsTable data={data}/> }
    </>
  )
}

export default StudentsFetch;
