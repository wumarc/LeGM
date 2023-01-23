import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function Chart({players}, {stats}) {
  
  const [data, setData] = useState([]);

  useEffect(() => {
  //   players.map(player => {
  //     return (data.push(
  //       {type: 'first_name', name: player.first_name},
  //       {type: 'last_name', name: player.last_name},
  //       {type: 'team', name: player.team})
  //   )})
    
  //   stats.map(player => {
  //     return (data.push(
  //       {name: 'Points', number: player.pts},
  //       {name: 'Assists', number: player.ast},
  //       {name: 'Rebounds', number: player.reb},
  //       {name: 'Steals', number: player.stl},
  //       {name: 'Blocks', number: player.blk}
  //   ))})
  }, [players, stats, data])

  return (
      <div>
        {/* Display the stats chart here */}
        <ResponsiveContainer width="100%" aspect={2}>
          <BarChart width={250} height={300} data={data} margin={{top: 5, bottom: 5}} >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Bar dataKey="number" fill="#2D6EFD" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
}

export default Chart;