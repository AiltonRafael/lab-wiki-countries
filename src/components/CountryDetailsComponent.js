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
import data from '../data/countries.json';
import { Link } from 'react-router-dom'

let foundInfoCountry = []

export default function CountryDetailsComponent() {
    const params = useParams()
    const foundCity = data.find((currentData) => currentData.cca3 === params.id)
    console.log(foundCity.cca3)
    
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
                        <Td> 
                            {foundCity.capital.map((element) => {
                                return <div> {element} </div>
                            })} 
                        </Td>
                    </Tr>
                    <Tr>
                        <Td> <strong> Area </strong> </Td>
                        <Td> {foundCity.area} (km)</Td>
                    </Tr>
                    <Tr>
                        <Td> <strong> Border </strong> </Td>
                        <Td>
                          {foundCity.borders.map((currentBorder, index) => {
                              return (
                                  <Link to={data.find((element) => {
                                      return element.cca3 === currentBorder
                                  })}>
                                      <div> {currentBorder} </div>
                                        {/* <div key={index}> 
                                                {data.find((country) => {
                                                    return country.cca3 === currentBorder
                                                })}
                                        </div> */}
                                    </Link>
                                    )
                                }
                              )
                          }
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