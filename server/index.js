const express = require("express");
const request = require("request");
const cors = require('cors');

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors({origin: '*'}));

app.get("/search", (req, res) => {
    request('https://balldontlie.io/api/v1/players?search=lebron' + req.query.name, (error, response, body) => {
        if (error) {
            console.log(error);
        }
        res.send(body);
    })
});

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