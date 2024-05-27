import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Container } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';
const ChatPages = () => {
    const [chats, setChats] = useState([]);

    const fetchChats = async () => {
        try {
            const { data } = await axios.get("/api/chat");
            setChats(data);
        } catch (error) {
            console.error('Error fetching chats:', error);
        }
    };

    useEffect(() => {
        fetchChats();
    }, []);

    return (
        //<div>
            //{
               // chats.map(chat => <div key={chat.id}>{chat.chatName}</div>)
            //}
        //</div>
        <Container maxW={'xl'} centerContent>
            <Box 
            d = "flex"
            justifyContent="center"
            p = {3}
            bg ={"white"}
            w = "370%"
            h={"10%"}
            m="60px 0 15px 0"
            borderRadius="lg"
            borderWidth={"1px"}
            >
                
            </Box>
            <Grid>
                t
            </Grid>
           

        </Container>
    );
};

export default ChatPages;

