import data from '../data/countries.json';
import NavbarComponent from "./NavbarComponent";
import CountriesListComponent from './CountriesListComponent';

function App() {
  return (
    <div>
      <NavbarComponent />
      <CountriesListComponent data={data}/>
      
    </div>
  );
}

export default App;
