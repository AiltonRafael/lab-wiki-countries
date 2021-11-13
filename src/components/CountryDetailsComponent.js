import { Box } from '@chakra-ui/layout';
import { 
    Tr,
    Td,
    Th,
    Tbody,
    Thead,
    Table,
} from '@chakra-ui/table';
import React from 'react';
import { useParams } from 'react-router';
import data from '../data/countries.json'
let foundInfoCountry = []

export default function CountryDetailsComponent() {
    const params = useParams()
    const foundCity = data.find((currentData) => currentData.name.common === params.id)
    
    return (
        <Box>
            <Table variant="simple">
                <Thead>
                    <Tr>
                    <Th> {foundCity.name.common} {foundCity.flag} </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td> <strong> Capital </strong>  </Td>
                        <Td> {foundCity.capital} </Td>
                    </Tr>
                    <Tr>
                        <Td> <strong> Area </strong> </Td>
                        <Td> {foundCity.area} (km)</Td>
                    </Tr>
                    <Tr>
                        <Td> <strong> Border </strong> </Td>
                        <Td>
                          {foundCity.borders.map((currentBorder, index) => <div key={index}> {currentBorder} </div>)}
                        </Td>
                    </Tr>
                    <Tr>
                        <Td> <strong> Capital </strong>  </Td>
                        <Td> {foundCity.capital} </Td>
                    </Tr>
                    <Tr>
                        <Td> <strong> Continent </strong>  </Td>
                        <Td> {foundCity.region} </Td>
                    </Tr>
                </Tbody>
            </Table>
        </Box>
    )
}

console.log(foundInfoCountry)