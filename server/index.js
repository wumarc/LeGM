const express = require("express");
const request = require("request");
const cors = require('cors');

// Port to listen on
const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors({origin: '*'}));

// Call the NBA API to get a list of players
app.get("/search", (req, res) => {
    request('https://balldontlie.io/api/v1/players?search=' + req.query.name, (error, response, body) => {
        if (error) {
            console.log(error);
        }
        res.send(body);
    })
});

// Call the NBA API to get a list of stats of players
app.get("/get_stats", (req, res) => {
    request('https://www.balldontlie.io/api/v1/season_averages?player_ids[]=' + req.query.player_id, (error, response, body) => {
        if (error) {
            console.log(error);
        }
        res.send(body);
    })
});


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});