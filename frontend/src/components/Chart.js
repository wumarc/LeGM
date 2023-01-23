
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function Chart() {
  
  const data = [
    {name: 'Points', number: 0},
    {name: 'Assists', number: 0},
    {name: 'Rebounds', number: 0},
    {name: 'Steals', number: 0},
    {name: 'Blocks', number: 0},
  ];

  return (
      <div> 
        {/* Display the stats chart here */}
        <ResponsiveContainer width="60%" aspect={3}>
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