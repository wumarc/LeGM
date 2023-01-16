import { getAllPlayers } from '../services/api.js';
import { useState } from 'react';

function Comparator() {
  
  const [players, setPlayers] = useState([]);

  const getPlayers = () => {
    console.log(getAllPlayers());
  }
  
  return (
      <div>
        <button onClick={getPlayers}>Show all the players</button>
        <div>
          
        </div>
      </div>
    );
  }
  
export default Comparator;