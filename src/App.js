import './App.css';
import Pallette from './Pallette';
import SeedColors from './SeedColors';

function App() {
  return (
    <div className="App">
      <Pallette {...SeedColors[6]} />
    </div>
  );
}

export default App;