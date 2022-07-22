import * as React from "react"
import {
  ChakraProvider,
  Center,
  Container,
  Flex,
  Image,
  Button,
} from "@chakra-ui/react";

import theme from "./themes/theme";
import StudentsTable from "./components/StudentsTable";

const App: React.FC = () => {
  return (
      <ChakraProvider theme={theme}>
        <Container maxW="80vw">
          <Flex justifyContent="space-between" my="8">
            <Image src="https://d3awytnmmfk53d.cloudfront.net/landings/static/images/core/logo_verde.svg"/>
            <Button size="md" color={"black"} border="2px" backgroundColor={"transparent"} borderRadius="2rem" fontWeight={"bold"}>
              Criar novo estudante
            </Button>
          </Flex>
          <Center>
            <StudentsTable/>
          </Center>
        </Container>
      </ChakraProvider>
  );
};

export default App;
