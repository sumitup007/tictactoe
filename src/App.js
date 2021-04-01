import './App.css';
import Header from './components/header'
import GameBoard from './components/gameboard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <div className='App-content'>
        <GameBoard/>
      </div>
    </div>
  );
}

export default App;
