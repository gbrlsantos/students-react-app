import * as React from "react"
import {
  ChakraProvider,
  Center,
} from "@chakra-ui/react";

import theme from "./themes/theme";
import StudentsTable from "./components/StudentsTable";

const App: React.FC = () => {
  return (
      <ChakraProvider theme={theme}>
        <Center>
          <StudentsTable/>
        </Center>
      </ChakraProvider>
  );
};

export default App;
