import { getAllPlayers } from '../services/api.js';
import useState from 'react';

function Comparator() {
  
  const [players, setPlayers] = useState([]);

  const getAllPlayers = () => {
    getAllPlayers()
      .then((response) => {
        console})
  }
  
  return (
      <div>
        <button onClick={getAllPlayers}>Show all the players</button>
      </div>
    );
  }
  
export default Comparator;