
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function Player({player_data: {first_name, last_name, position, team}, player_stats: {pts, ast, reb, stl, blk, fg_pct, ft_pct}}) {
  
  const data = [
    {name: 'Points', number: pts},
    {name: 'Assists', number: ast},
    {name: 'Rebounds', number: reb},
    {name: 'Steals', number: stl},
    {name: 'Blocks', number: blk},
    {name: 'Field Goal %', number: fg_pct},
    {name: 'Free Throw %', number: ft_pct}
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
              <Bar dataKey="number" fill="#00BFFF	" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
}

export default Player;