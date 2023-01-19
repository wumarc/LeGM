


function Player({player_data: {first_name, last_name, position, height_feet, height_inches, weight_pounds, team}}) {
    return (
      <div>
        <p>{first_name} {last_name} {position} {height_feet} {height_inches} {weight_pounds}</p>
      </div>
    );
}
  
export default Player;