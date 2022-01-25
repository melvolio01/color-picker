import './App.css';
import Pallette from './Pallette';
import { Route, Routes } from 'react-router';
import SeedColors from './SeedColors';
import { generatePalette } from './ColorHelpers';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<h1>PALLET LIST HERE!</h1>}/>
      <Route exact path='/palette/:id' element={<h1>Individual Palette...</h1>} />
    </Routes>
    // <div className="App">
    //   <Pallette palette={generatePalette(SeedColors[5])} />
    // </div>
  );
}

export default App;