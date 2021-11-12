import data from '../data/countries.json';
import NavbarComponent from "./NavbarComponent";
import CountriesListComponent from './CountriesListComponent';
import CountryDetailsComponent from './CountryDetailsComponent';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <NavbarComponent />
       <Routes>
          <Route path='/about' element={<CountryDetailsComponent />} />    
      </Routes>
      <CountriesListComponent data={data}/>
    </>
  );
}

export default App;
