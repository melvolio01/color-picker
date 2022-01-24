import './App.css';
import Pallette from './Pallette';
import SeedColors from './SeedColors';
import { generatePalette } from './ColorHelpers';

function App() {
  return (
    <div className="App">
      <Pallette palette={generatePalette(SeedColors[5])} />
    </div>
  );
}

export default App;