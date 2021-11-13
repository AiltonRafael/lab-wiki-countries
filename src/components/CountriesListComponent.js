import React, { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Button } from '@chakra-ui/button';
import { Link } from 'react-router-dom'

export default function CountriesListComponent(props) {
    const [isToggle, setIsToggle] = useState(false)
    const [currentCountry, setCurrentCountry] = useState('/');
    const [buttonState, setButtonState] = useState(true)

    function handleClick(){
        setIsToggle(!isToggle)
        setButtonState(!buttonState)
    }

    function handleSelectCountry(country){
        setCurrentCountry(country)
    }

    return (
        <Box
        h='100%'
        w='100%'
        >
            <Button
            onClick={handleClick}
            _hover={{
                bg: '100',
                color: 'white',
                cursor: 'pointer',
                border: '1px'
            }}
            > 
                {buttonState ? 'Click to Show' : 'Click to Hide'}
            </Button>

            <Box
            d={isToggle ? 'inline' : 'none'}
            flexWrap='wrap'
            position='absolute'
            h='100vh'
            top='140px'
            left='0px'
            right='83%'
            overflow='scroll'
            > 
            {props.data.map((country) => {
                return (
                    <Link to={currentCountry}>
                        <Text
                        flexDir='center'
                        w='250px'
                        mt='1px'
                        fontSize='20px'
                        key={country.name.common}
                        _hover={{
                            bg: '100',
                            color: 'white',
                            cursor: 'pointer',
                            border: '1px',
                        }}
                        onClick={() => handleSelectCountry(country.name.common)}
                        > 
                        {country.name.common} {country.flag}
                        </Text>
                    </Link>
                )
            })}
            </Box>        
        </Box>
    )
}
