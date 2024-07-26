import './App.css';


const player = ({player}) =>{
    return(
        <div id='player-card'>
            <h2>{player.nom}</h2>
            <p>{player.numeroDuMaillot}</p>
            <p>{player.position}</p>
            <p>{player.team}</p>
            <p>{player.âge}</p>
            <p>{player.country}</p>
        </div>
    )
}

export default player; 