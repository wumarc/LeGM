import Player from './Player';

function Comparator(props) {
  
  return (
      <div>
        {props.playersList.map((player, i) => (
          <Player key={i} player_data={player}/>
        ))}
      </div>
    );
  }
  
export default Comparator;