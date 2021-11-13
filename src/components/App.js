import data from '../data/countries.json';
import NavbarComponent from "./NavbarComponent";
import CountriesListComponent from './CountriesListComponent';
import CountryDetailsComponent from './CountryDetailsComponent';
import { Route, Routes } from 'react-router-dom';
import { Grid } from '@chakra-ui/react'


function App() {
  return (
    <div>
      <NavbarComponent />
      <Grid templateColumns='1fr 4fr'>
        <CountriesListComponent 
        data={data} 
        />
        <Routes>
            <Route path='/:id' element={<CountryDetailsComponent />}/>
        </Routes>
      </Grid>
    </div>
  );
}

export default App;
