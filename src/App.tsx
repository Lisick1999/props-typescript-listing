import './App.css';
import { Listing } from './components/Listing';
import json from './data/etsy.json';

function App() {
  return (
    <div className="App">
      <Listing items={json}/>
    </div>
  );
};

export default App;
