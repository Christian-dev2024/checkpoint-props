import Player from "./player";
import players from "./players";



function PlayerList() {
    return (
    <>
        {
        players.map((data) => < Player key = {data.id} players = {data} /> )
        }
    </>
    );
}


export default PlayerList;