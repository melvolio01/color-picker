import './App.css';
import Pallette from './Pallette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import { Route, Routes, useParams } from 'react-router';
import SeedColors from './SeedColors';
import { generatePalette, findPalette } from './ColorHelpers';

function App() {

  return (
    <Routes>
      <Route exact path='/' element={<PaletteList palettes={SeedColors}/>}/>
      <Route exact path='/palette/:id' element={<WrappedPalette />} />
      <Route exact path= 'palette/:paletteId/:colorId' element={<WrappedSingleColorPalette />}/>
    </Routes>
  );
}

function WrappedPalette (props) {
  const params = useParams()
  const palette = findPalette(SeedColors, params.id)
  return <Pallette palette={generatePalette(palette)} params={params} {...props} />
}

function WrappedSingleColorPalette (props) {
  const params = useParams()
  const palette = findPalette(SeedColors, params.paletteId)
  return <SingleColorPalette palette={generatePalette(palette)} params={params} {...props} />
}


export default App;