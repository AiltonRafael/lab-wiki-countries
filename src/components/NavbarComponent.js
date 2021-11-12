import React from 'react';
import { Box, Text } from '@chakra-ui/layout';

export default function NavbarComponent() {
    return (
        <Box
        h='100px'
        bg='100'
        d='flex'
        alignItems='center'
        >
            <Text
            textAlign='center'
            color='white'
            > 
                WikiCountry 
            </Text>
        </Box>
    )
}
