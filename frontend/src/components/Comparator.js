import { useState } from 'react';

function Comparator() {
  
  const [players, setPlayers] = useState([]);

  const getPlayers = () => {
    fetch(process.env.REACT_APP_SERVER_URL + 'search')
    .then(response => response.json())
    .then(data => {
      console.log(data.data);
    })
  }
  
  return (
      <div>
        <button onClick={getPlayers}>Show all the players</button>
        <div>
          {players}
        </div>
      </div>
    );
  }
  
export default Comparator;