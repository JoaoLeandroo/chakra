npm i @chakra-ui/react @chakra-ui/next-js @emotion/react @emotion/styled framer-motion

Após a instalação, ir dentro da pasta app, no arquivo principal, e adiciona o seguinte nome
'use client' na parte superior do arquivo.

Em seguite importar o ChakraProvider, e colocar ele em volta da aplicação.

import { ChakraProvider } from "@chakra-ui/react"


    <ChakraProvider>
        <Button 
        colorScheme='blue'
        size='lg'>Button</Button>

        <Button 
        colorScheme="teal"
        size="sm">
          Button 2
        </Button>
    </ChakraProvider>

