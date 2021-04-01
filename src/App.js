import './App.css';
import Header from './components/header';
import Game from './components/game';
import GameLobby from './components/gameLobby';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <div className='App-content'>
        <Router>
          <Switch>
            <Route path="/" exact component={Game}/>
            <Route path="/:lobbyName" exact component={GameLobby}/>
          </Switch>            
        </Router>
      </div>
    </div>
  );
}

export default App;
