
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function Player({player_data: {first_name, last_name, position, team}, player_stats: {pts, ast, reb, stl, blk}}) {
  
  const data = [
    {name: 'Points', number: pts},
    {name: 'Assists', number: ast},
    {name: 'Rebounds', number: reb},
    {name: 'Steals', number: stl},
    {name: 'Blocks', number: blk}
  ];

  return (
      <div>
        {/* Player information */}
        <h4>{first_name} {last_name}, {position} | {team.full_name} </h4>
        {/* Display the stats chart here */}
        <div>
          <ResponsiveContainer width="100%" aspect={3}>
            <BarChart width={300} height={300} data={data} margin={{ top: 5, bottom: 5,}} >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name"/>
              <YAxis/>
              <Tooltip/>
              <Bar dataKey="number" fill="#2D6EFD" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
}

export default Player;