import './App.css';


const Player = ({player}) =>{
    return( 
        <div className='container-card'>
            <div className="card" >
                <img src={player.image} className="card-img-top" width={"100px"} alt="..." />
                <div className="card-body">
                    <h5>{player.nom}</h5>
                    <p className="card-text">country : {player.country}</p>
                    <p className="card-text">team : {player.team}</p>
                    <p className="card-text">âge : {player.âge}</p>
                    <p className="card-text">numero du maillot : {player.numeroDuMaillot}</p>
                </div>
            </div>
        </div>

    )
}

export default Player; 