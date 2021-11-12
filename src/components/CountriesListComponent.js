import React from 'react';
import { Box } from '@chakra-ui/react';
import { Button } from '@chakra-ui/button';

export default function CountriesListComponent(props) {
    return (
        <Box
        h='100%'
        w='30vh'
        >
            <Button> show/hide </Button>
            <Box> 
            {props.data.map((country) => {
                return (
                    <Button
                    w='100%'
                    mt='1px'
                    _hover={{
                        bg: '100',
                        color: 'white',
                        cursor: 'pointer',
                        border: '1px'
                    }}
                    > 
                    {country.name.common}
                     </Button>
                )
            })}
            /</Box>        
        </Box>
    )
}
