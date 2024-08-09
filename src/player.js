import './App.css';
import './players';


const Player = ({players}) =>{
    return( 
        <div className='container-card'>
            <div className="card" >
                <img src={players.image} className="card-img-top" width={"100px"} alt="..." />
                <div className="card-body">
                    <h5>{players.nom}</h5>
                    <p className="card-text">country : {players.country}</p>
                    <p className="card-text">team : {players.team}</p>
                    <p className="card-text">âge : {players.âge}</p>
                    <p className="card-text">numero du maillot : {players.numeroDuMaillot}</p>
                </div>
            </div>
        </div>

    )
}

export default Player; 