import * as React from "react"
import {
  ChakraProvider,
  Center,
  Container,
} from "@chakra-ui/react";

import theme from "./themes/theme";
import Header from "./components/Header";
import StudentsFetch from "./components/StudentsFetch";
import StudentsDataProvider from "./context/StudentsDataContext";

const App: React.FC = () => {
  return (
      <ChakraProvider theme={theme}>
        <StudentsDataProvider>
          <Container maxW="80vw">
            <Header/>
            <Center>
              <StudentsFetch/>
            </Center>
          </Container>
        </StudentsDataProvider>
      </ChakraProvider>
  );
};

export default App;
