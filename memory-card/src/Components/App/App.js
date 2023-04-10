import './App.css';
import Card from '../Card/Card';
import GameBoard from '../GameBoard/GameBoard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Card cardName="Space Ishtar" cardImageSource="/Assets/Images/spaceIshtar.jpg" /> */}
        <GameBoard />
      </header>
    </div>
  );
}

export default App;
