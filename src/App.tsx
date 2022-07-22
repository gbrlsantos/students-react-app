import * as React from "react"
import {
  ChakraProvider,
  Center,
  Container,
  Flex,
} from "@chakra-ui/react";

import theme from "./themes/theme";
import StudentsTable from "./components/StudentsTable";

const App: React.FC = () => {
  return (
      <ChakraProvider theme={theme}>
        <Container maxW="70vw">
          <Flex>

          </Flex>
          <Center>
            <StudentsTable/>
          </Center>
        </Container>
      </ChakraProvider>
  );
};

export default App;
