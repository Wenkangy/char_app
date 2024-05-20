import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const SignUp = () => {
    const [show, setshow] = useState(false);
    const [showC, setshowC] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [pic, setPic] = useState(null);

    const  handleShowClick = () => setshow(!show);
    const  handleConfimClick = () => setshowC(!showC);
    const  postDetails = (pic) => {};
    
    return (
        <VStack spacing='5px'>
            <FormControl id ="firts-name" is isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                    placeholder='Enter your Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </FormControl>
            <FormControl id ="email" is isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                    placeholder='Enter your Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormControl>
            <FormControl id ="password" is isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input
                        placeholder='Enter your Password'
                        type={show ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement width = "4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                            { show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <FormControl id ="confirm password" is isRequired>
                <FormLabel>Confim Password</FormLabel>
                <InputGroup>
                    <Input
                        placeholder='Enter your Password'
                        type={showC ? "text" : "Password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <InputRightElement width = "4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleConfimClick}>
                            { showC ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <FormControl id="pic">
                <FormLabel>Profile Picture</FormLabel>
                <Input
                    type='file'
                    p = {1.5}
                    accept='image/'
                    onChange={(e) => postDetails(e.target.files[0])}
                />
            </FormControl>

            <Button 
                colorScheme = "red" 
                width={"100%"} 
                style={{marginTop : 15}}
            >
                Sign Up
            </Button>
            
        </VStack>
    );
};

export default SignUp;
