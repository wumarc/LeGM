import Player from './Player';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

function Comparator(props) {

  const [players, setPlayers] = useState([]);
  const [stats, setStats] = useState([]);

  const getStats = async (player_id) => {
    await fetch(process.env.REACT_APP_SERVER_URL + 'get_stats?player_id=' + player_id)
    .then(response => response.json())
    .then(data => {
      setStats(data.data[0])
    })
    .catch(error => console.log(error));
  }

  return (
      <Card>
        {props.playersList.map((player, i) => (
          <div key={i}>
            <Player player_data={player} player_stats={stats}/>
            <Button onClick={() => getStats(player.id)}>Stats</Button>
          </div>
        ))}
      </Card>
  );

}

export default Comparator;