import { useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

function Chart({players}) {
  
  // Colours used for the chart
  const colours = ['#e60049', '#0bb4ff', '#50e991', '#e6d800', '#9b19f5', '#ffa300', '#dc0ab4', '#b3d4ff', '#00bfa0']
  // Chart data
  const chart_data = [
    {name: 'Points'},
    {name: 'Assists'},
    {name: 'Rebounds'},
    {name: 'Steals'},
    {name: 'Blocks'}
  ];

  useEffect(() => {
    
    // Fetch stats for each player and add the stats to the chat_data
    Promise.all(players.map(async player => {
      try {
        await fetch('http://localhost:3001/get_stats?player_id=' + player.id)
        .then(response => response.json())
        .then(data => {
          const player_name = player.first_name + ' ' + player.last_name;
          // Add new attributes for each stat category based on player's name to chart_data
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
    // eslint-disable-next-line
  }, [players])

  return (

    <ResponsiveContainer width="85%" aspect={1.7}>
      {/* Chart code source: https://recharts.org/en-US/examples/SimpleBarChart */}
      <BarChart 
        width={600} 
        height={300} 
        data={chart_data} 
        margin={{top: 5, left: 20, right: 20, bottom: 5}}
      >
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name"/>
        <YAxis/>
        <Tooltip/>
        <Legend/>
        {players.map((player, id) => {
          const name = player.first_name + ' ' + player.last_name;
          return ( 
            <Bar key={id} dataKey={name} fill={colours[id]} />
          )
        })}
      </BarChart>
    </ResponsiveContainer>

  );
  
}

export default Chart;