function GameLobby({match}){
    console.log(match.params);
    return (
        <div>
            <h3>Game Lobby {match.params.lobbyName} joined</h3>
        </div>
    )
}

export default GameLobby;