import React from 'react';
import { useHistory } from "react-router-dom";

function Game(){
    const history = useHistory();
    const [lobbyName, setLobbyName] = React.useState('');

    const createLobby = () =>{
        history.push(`/${lobbyName}`);
    }
    const lobbyNameChange = (e) =>{
        setLobbyName(e.target.value);
    }

    return (
        <div>
            <h3>Create new game or join an existing game here</h3>

            <input type='text' className='newLobbyName' placeholder='Enter Lobby Name' value={lobbyName} onChange={lobbyNameChange}/>
            <button onClick={createLobby}>GO</button>
            
        </div>
    )
}

export default Game;