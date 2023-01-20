

function Player({player_data: {first_name, last_name, position, team}, player_stats: {pts, ast, reb, stl, blk, fg_pct, ft_pct}}) {
  
  return (
      <div>
        {/* Player information */}
        <p>{first_name} {last_name}, {position} | {team.full_name} </p>
        {/* Player information */}
        <li>Points: {pts}</li>
        <li>Assists: {ast}</li>
        <li>Rebounds: {reb}</li>
        <li>Steals: {stl}</li>
        <li>Block: {blk}</li>
        <li>Fiel goal %: {fg_pct}</li>
        <li>Free throw %: {ft_pct}</li>
      </div>
    );
}

export default Player;