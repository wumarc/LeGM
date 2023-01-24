import { useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

function Chart({players}) {
  
  const colours = ['#e60049', '#0bb4ff', '#50e991', '#e6d800', '#9b19f5', '#ffa300', '#dc0ab4', '#b3d4ff', '#00bfa0']
  const chart_data = [
    {name: 'Points'},
    {name: 'Assists'},
    {name: 'Rebounds'},
    {name: 'Steals'},
    {name: 'Blocks'}
  ];

  useEffect(() => {
    Promise.all(players.map(async player => {
      try {
        await fetch(process.env.REACT_APP_SERVER_URL + 'get_stats?player_id=' + player.id)
        .then(response => response.json())
        .then(data => {
          const player_name = player.first_name + ' ' + player.last_name;
          chart_data[0][player_name] = data.data[0].pts;
          chart_data[1][player_name] = data.data[0].ast;
          chart_data[2][player_name] = data.data[0].reb;
          chart_data[3][player_name] = data.data[0].stl;
          chart_data[4][player_name] = data.data[0].blk;
        })
      } catch (err) {
        console.log(err)
      }
    }));
  }, [players])

  return (
      <div>
        {/* Display the stats chart here */}
        <ResponsiveContainer width="99%" aspect={2}>
          <BarChart width={300} height={400} data={chart_data} margin={{top: 5, left: 30, right: 20, bottom: 5}} >
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Legend/>
            {players.map((player, id) => {
              const name = player.first_name + ' ' + player.last_name;
              return ( <Bar key={id} dataKey={name} fill={colours[id]} />)
              })
            }
          </BarChart>
        </ResponsiveContainer>
      </div>
  );
  
}

export default Chart;