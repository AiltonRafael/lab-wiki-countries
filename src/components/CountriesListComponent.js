import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { Button } from '@chakra-ui/button';

export default function CountriesListComponent(props) {
    const [isToggle, setIsToggle] = useState(false)
    function handleClick(){
        setIsToggle(!isToggle)
    }

    return (
        <Box
        h='100%'
        w='30vh'
        >
            <Button
            onMouseOver={handleClick}
            > 
                show/hide 
            </Button>

            <Box
            d={isToggle ? 'inline' : 'none'}
            position='fixed'
            top='140px'
            left='0px'
            right='50%'
            > 
            {props.data.map((country) => {
                return (
                    <Button
                    w='20%'
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
