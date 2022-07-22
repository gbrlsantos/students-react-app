import { Center, ChakraProvider, Flex, Spinner, VStack } from "@chakra-ui/react"
import * as React from "react"
import theme from "../../themes/theme"

const LoadingScreen: React.FC = () => {
  return(
      <VStack direction="row" h={"100vh"} justifyContent={"center"}>
        <Spinner 
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='descomplica.100'
            size='xl'
        />
      </VStack>
  )
}

export default LoadingScreen;