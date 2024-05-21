import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const Login = () => {
    const [show, setshow] = useState(false);
 
    const [L_email, setEmail] = useState('');
    const [L_password, setPassword] = useState('');
    const  handleShowClick = () => setshow(!show);
  return (
    <VStack spacing='5px'>
    <FormControl id ="L_email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
            placeholder='Enter your Email'
            value={L_email}
            onChange={(e) => setEmail(e.target.value)}
        />
    </FormControl>
    <FormControl id ="L_password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
            <Input
                placeholder='Enter your Password'
                type={show ? "text" : "password"}
                value={L_password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width = "4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                    { show ? "Hide" : "Show"}
                </Button>
            </InputRightElement>
        </InputGroup>
    </FormControl>
    <Button 
        colorScheme = "red" 
        width={"100%"} 
        style={{marginTop : 15}}
    >
        Login
    </Button>
    
    </VStack>
  )
}

export default Login
