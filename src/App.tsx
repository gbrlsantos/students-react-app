import * as React from "react"
import {
  ChakraProvider,
  Center,
  Container,
} from "@chakra-ui/react";

import theme from "./themes/theme";
import StudentsTable from "./components/StudentsTable";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
      <ChakraProvider theme={theme}>
        <Container maxW="80vw">
          <Header/>
          <Center>
            <StudentsTable/>
          </Center>
        </Container>
      </ChakraProvider>
  );
};

export default App;
