import axios from 'axios';


export const getAllPlayers = async (input) => {
    return axios.get('https://balldontlie.io/api/v1/players')
    .then(response => response.data)
    .catch(error => console.log(error));
}

export const getStats = async (player_id) => {
    return axios.get('https://www.balldontlie.io/api/v1/season_averages?player_ids[]=' + player_id)
    .then(response => console.log(response.data))
    .catch(error => console.log(error));
}