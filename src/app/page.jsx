'use client'
import { ChakraProvider } from "@chakra-ui/react"
import { Button, ButtonGroup } from '@chakra-ui/react'

export default function Home() {
  return (  
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

  )
}
