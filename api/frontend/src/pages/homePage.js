import React from 'react'
import {Text, Box, Container} from  "@chakra-ui/react"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Login from '../components/Authentication/Login'
import SignUp from '../components/Authentication/SignUp'

const homePage = () => {
  return (
    <Container maxW='xl'centerContent>
       <Box
        d = "flex"
        justifyContent="center"
        p = {3}
        bg ={"white"}
        w = "200%"
        m="50px 0 15px 0"
        borderRadius="lg"
        borderWidth={"1px"}
        textAlign={"center"}
        
       >
          <Text fontSize={"4xl"}fontFamily={"Work sands"} color={"black"}> Talk-Live</Text>
       </Box>
       <Box bg={"white"} p={4} w={"200%"} borderRadius={"lg"} borderwigth ={"1px"} textColor={"black"}>
        <Tabs variant={"soft-rounded"} colorScheme='gray'>
        <TabList mb={"1em"}>
          <Tab width={"50%"}>Login</Tab>
          <Tab width={"50%"}>Sign Up</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Login/>
          </TabPanel>
          <TabPanel>
            <SignUp/>
          </TabPanel>
        </TabPanels>
      </Tabs>
       </Box>
    </Container>
  )
}

export default homePage
