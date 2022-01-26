import './App.css';
import Pallette from './Pallette';
import PaletteList from './PaletteList';
import { Route, Routes, useParams } from 'react-router';
import SeedColors from './SeedColors';
import { generatePalette, findPalette } from './ColorHelpers';

function App() {

  return (
    <Routes>
      <Route exact path='/' element={<PaletteList palettes={SeedColors}/>}/>
      <Route exact path='/palette/:id' element={<WrappedPalette />} />
    </Routes>
    // <div className="App">
    //   <Pallette palette={generatePalette(SeedColors[5])} />
    // </div>Pallette
  );
}

function WrappedPalette (props) {
  const params = useParams()
  const pallette = findPalette(SeedColors, params.id)
  return <Pallette palette={generatePalette(pallette)} params={params} {...props} />
}

export default App;
