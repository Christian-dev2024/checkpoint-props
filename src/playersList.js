import Player from "./player";
import players from "./players";



function PlayerList() {
    return (
    <>
        {
        players.map((data) => < Player key = {data.id} player = {data} /> )
        }
    </>
    );
}


export default PlayerList;