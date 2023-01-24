import React, { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Chart from "./Chart";

function Search() {

  const active_players = [
    { name: 'Precious Achiuwa'},
    { name: 'Steven Adams'},
    { name: 'Bam Adebayo'},
    { name: 'Ochai Agbaji'},
    { name: 'Santi Aldama'},
    { name: 'Nickeil Alexander-Walker'},
    { name: 'Grayson Allen'},
    { name: 'Jarrett Allen'},
    { name: 'Jose Alvarado'},
    { name: 'Kyle Anderson'},
    { name: 'Giannis Antetokounmpo'},
    { name: 'Thanasis Antetokounmpo'},
    { name: 'Cole Anthony'},
    { name: 'OG Anunoby'},
    { name: 'Ryan Arcidiacono'},
    { name: 'Deni Avdija'},
    { name: 'Deandre Ayton'},
    { name: 'Udoka Azubuike'},
    { name: 'Marvin Bagley III'},
    { name: 'Patrick Baldwin Jr.'},
    { name: 'LaMelo Ball'},
    { name: 'Mo Bamba'},
    { name: 'Paolo Banchero'},
    { name: 'Desmond Bane'},
    { name: 'Dalano Banton'},
    { name: 'Dominick Barlow'},
    { name: 'Harrison Barnes'},
    { name: 'Scottie Barnes'},
    { name: 'RJ Barrett'},
    { name: 'Will Barton'},
    { name: 'Charles Bassey'},
    { name: 'Keita Bates-Diop'},
    { name: 'Nicolas Batum'},
    { name: 'Darius Bazley'},
    { name: 'Bradley Beal'},
    { name: 'Malik Beasley'},
    { name: 'MarJon Beauchamp'},
    { name: 'Patrick Beverley'},
    { name: 'Saddiq Bey'},
    { name: 'Khem Birch'},
    { name: 'Goga Bitadze'},
    { name: 'Bismack Biyombo'},
    { name: 'Buddy Boeheim'},
    { name: 'Bogdan Bogdanovic'},
    { name: 'Bojan Bogdanovic'},
    { name: 'Bol Bol'},
    { name: 'Leandro Bolmaro'},
    { name: 'Devin Booker'},
    { name: 'Brandon Boston Jr.'},
    { name: 'Chris Boucher'},
    { name: 'James Bouknight'},
    { name: 'Tony Bradley'},
    { name: 'Malaki Branham'},
    { name: 'Christian Braun'},
    { name: 'Mikal Bridges'},
    { name: 'Oshae Brissett'},
    { name: 'Malcolm Brogdon'},
    { name: 'Dillon Brooks'},
    { name: 'Bruce Brown'},
    { name: 'Greg Brown III'},
    { name: 'Jaylen Brown'},
    { name: 'Kendall Brown'},
    { name: 'Moses Brown'},
    { name: 'Troy Brown Jr.'},
    { name: 'Jalen Brunson'},
    { name: 'Thomas Bryant'},
    { name: 'Reggie Bullock'},
    { name: 'Alec Burks'},
    { name: 'Jimmy Butler'},
    { name: 'John Butler'},
    { name: 'Jamal Cain'},
    { name: 'Kentavious Caldwell-Pope'},
    { name: 'Facundo Campazzo'},
    { name: 'Clint Capela'},
    { name: 'Vernon Carey Jr.'},
    { name: 'Jevon Carter'},
    { name: 'Wendell Carter Jr.'},
    { name: 'Alex Caruso'},
    { name: 'Julian Champagnie'},
    { name: 'Justin Champagnie'},
    { name: 'Kennedy Chandler'},
    { name: 'Max Christie'},
    { name: 'Josh Christopher'},
    { name: 'Brandon Clarke'},
    { name: 'Jordan Clarkson'},
    { name: 'Nic Claxton'},
    { name: 'Amir Coffey'},
    { name: 'John Collins'},
    { name: 'Zach Collins'},
    { name: 'Mike Conley'},
    { name: 'Pat Connaughton'},
    { name: 'Robert Covington'},
    { name: 'Torrey Craig'},
    { name: 'Jarrett Culver'},
    { name: 'Cade Cunningham'},
    { name: 'Seth Curry'},
    { name: 'Stephen Curry'},
    { name: 'Dyson Daniels'},
    { name: 'Anthony Davis'},
    { name: 'Johnny Davis'},
    { name: 'Terence Davis'},
    { name: 'JD Davison'},
    { name: 'Dewayne Dedmon'},
    { name: 'Matthew Dellavedova'},
    { name: 'DeMar DeRozan'},
    { name: 'Moussa Diabaté'},
    { name: 'Mamadi Diakite'},
    { name: 'Hamidou Diallo'},
    { name: 'Gorgui Dieng'},
    { name: 'Ousmane Dieng'},
    { name: 'Spencer Dinwiddie'},
    { name: 'Donte DiVincenzo'},
    { name: 'Luka Doncic'},
    { name: 'Tyler Dorsey'},
    { name: 'Luguentz Dort'},
    { name: 'Ayo Dosunmu'},
    { name: 'Devon Dotson'},
    { name: 'Jeff Dowtin'},
    { name: 'Goran Dragic'},
    { name: 'Andre Drummond'},
    { name: 'Chris Duarte'},
    { name: 'David Duke Jr.'},
    { name: 'Kevin Durant'},
    { name: 'Jalen Duren'},
    { name: 'Tari Eason'},
    { name: 'Anthony Edwards'},
    { name: 'Kessler Edwards'},
    { name: 'Keon Ellis'},
    { name: 'Joel Embiid'},
    { name: 'Drew Eubanks'},
    { name: 'Bruno Fernando'},
    { name: 'Dorian Finney-Smith'},
    { name: 'Malachi Flynn'},
    { name: 'Simone Fontecchio'},
    { name: 'Bryn Forbes'},
    { name: 'Trent Forrest'},
    { name: 'Michael Foster Jr.'},
    { name: 'Evan Fournier'},
    { name: 'DeAaron Fox'},
    { name: 'Markelle Fultz'},
    { name: 'Wenyen Gabriel'},
    { name: 'Daniel Gafford'},
    { name: 'Darius Garland'},
    { name: 'Usman Garuba'},
    { name: 'Luka Garza'},
    { name: 'Rudy Gay'},
    { name: 'Paul George'},
    { name: 'Taj Gibson'},
    { name: 'Josh Giddey'},
    { name: 'Shai Gilgeous-Alexander'},
    { name: 'Anthony Gill'},
    { name: 'Rudy Gobert'},
    { name: 'Jordan Goodwin'},
    { name: 'Aaron Gordon'},
    { name: 'Eric Gordon'},
    { name: 'Jerami Grant'},
    { name: 'A.J. Green'},
    { name: 'Draymond Green'},
    { name: 'Jalen Green'},
    { name: 'JaMychal Green'},
    { name: 'Javonte Green'},
    { name: 'Jeff Green'},
    { name: 'Josh Green'},
    { name: 'AJ Griffin'},
    { name: 'Blake Griffin'},
    { name: 'Quentin Grimes'},
    { name: 'Rui Hachimura'},
    { name: 'Tyrese Haliburton'},
    { name: 'Jordan Hall'},
    { name: 'R.J. Hampton'},
    { name: 'Tim Hardaway Jr.'},
    { name: 'James Harden'},
    { name: 'Jaden Hardy'},
    { name: 'Ron Harper Jr.'},
    { name: 'Montrezl Harrell'},
    { name: 'Gary Harris'},
    { name: 'Joe Harris'},
    { name: 'Kevon Harris'},
    { name: 'Tobias Harris'},
    { name: 'Josh Hart'},
    { name: 'Isaiah Hartenstein'},
    { name: 'Udonis Haslem'},
    { name: 'Sam Hauser'},
    { name: 'Jaxson Hayes'},
    { name: 'Killian Hayes'},
    { name: 'Gordon Hayward'},
    { name: 'Juancho Hernangómez'},
    { name: 'Willy Hernangómez'},
    { name: 'Tyler Herro'},
    { name: 'Buddy Hield'},
    { name: 'Haywood Highsmith'},
    { name: 'George Hill'},
    { name: 'Malcolm Hill'},
    { name: 'Aaron Holiday'},
    { name: 'Jrue Holiday'},
    { name: 'Justin Holiday'},
    { name: 'Richaun Holmes'},
    { name: 'Al Horford'},
    { name: 'Talen Horton-Tucker'},
    { name: 'Danuel House Jr.'},
    { name: 'Caleb Houstan'},
    { name: 'Trevor Hudgins'},
    { name: 'Kevin Huerter'},
    { name: 'Bones Hyland'},
    { name: 'Serge Ibaka'},
    { name: 'Brandon Ingram'},
    { name: 'Kyrie Irving'},
    { name: 'Jaden Ivey'},
    { name: 'Isaiah Jackson'},
    { name: 'Jaren Jackson Jr.'},
    { name: 'Justin Jackson'},
    { name: 'Reggie Jackson'},
    { name: 'LeBron James'},
    { name: 'Ty Jerome'},
    { name: 'Isaiah Joe'},
    { name: 'Nikola Jokic'},
    { name: 'Damian Jones'},
    { name: 'Derrick Jones Jr.'},
    { name: 'Herbert Jones'},
    { name: 'Kai Jones'},
    { name: 'Tre Jones'},
    { name: 'Tyus Jones'},
    { name: 'DeAndre Jordan'},
    { name: 'Mfiondu Kabengele'},
    { name: 'Frank Kaminsky'},
    { name: 'Trevor Keels'},
    { name: 'Luke Kennard'},
    { name: 'Walker Kessler'},
    { name: 'Braxton Key'},
    { name: 'Corey Kispert'},
    { name: 'Maxi Kleber'},
    { name: 'Nathan Knight'},
    { name: 'Kevin Knox'},
    { name: 'Christian Koloko'},
    { name: 'John Konchar'},
    { name: 'Furkan Korkmaz'},
    { name: 'Luke Kornet'},
    { name: 'Vit Krejci'},
    { name: 'Jonathan Kuminga'},
    { name: 'Kyle Kuzma'},
    { name: 'Anthony Lamb'},
    { name: 'Jock Landale'},
    { name: 'Romeo Langford'},
    { name: 'Jake LaRavia'},
    { name: 'Zach LaVine'},
    { name: 'A.J. Lawson'},
    { name: 'Damion Lee'},
    { name: 'Saben Lee'},
    { name: 'Alex Len'},
    { name: 'Kawhi Leonard'},
    { name: 'Caris LeVert'},
    { name: 'Kira Lewis Jr.'},
    { name: 'Damian Lillard'},
    { name: 'Nassir Little'},
    { name: 'Isaiah Livers'},
    { name: 'Kenneth Lofton Jr.'},
    { name: 'Kevon Looney'},
    { name: 'Brook Lopez'},
    { name: 'Robin Lopez'},
    { name: 'Kevin Love'},
    { name: 'Kyle Lowry'},
    { name: 'Trey Lyles'},
    { name: 'Théo Maledon'},
    { name: 'Sandro Mamukelashvili'},
    { name: 'Terance Mann'},
    { name: 'Tre Mann'},
    { name: 'Boban Marjanovic'},
    { name: 'Lauri Markkanen'},
    { name: 'Naji Marshall'},
    { name: 'Caleb Martin'},
    { name: 'Cody Martin'},
    { name: 'Kenyon Martin Jr.'},
    { name: 'Tyrese Martin'},
    { name: 'Garrison Mathews'},
    { name: 'Bennedict Mathurin'},
    { name: 'Wesley Matthews'},
    { name: 'Tyrese Maxey'},
    { name: 'Miles McBride'},
    { name: 'CJ McCollum'},
    { name: 'T.J. McConnell'},
    { name: 'Jaden McDaniels'},
    { name: 'Jalen McDaniels'},
    { name: 'Doug McDermott'},
    { name: 'JaVale McGee'},
    { name: 'Bryce McGowens'},
    { name: 'Rodney McGruder'},
    { name: 'Jordan McLaughlin'},
    { name: 'Chimezie Metu'},
    { name: 'Khris Middleton'},
    { name: 'Patty Mills'},
    { name: 'Shake Milton'},
    { name: 'Josh Minott'},
    { name: 'Davion Mitchell'},
    { name: 'Donovan Mitchell'},
    { name: 'Evan Mobley'},
    { name: 'Isaiah Mobley'},
    { name: 'Chima Moneke'},
    { name: 'Malik Monk'},
    { name: 'Moses Moody'},
    { name: 'Wendell Moore Jr.'},
    { name: 'Ja Morant'},
    { name: 'Marcus Morris'},
    { name: 'Markieff Morris'},
    { name: 'Monte Morris'},
    { name: 'Trey Murphy III'},
    { name: 'Dejounte Murray'},
    { name: 'Jamal Murray'},
    { name: 'Keegan Murray'},
    { name: 'Mike Muscala'},
    { name: 'Svi Mykhailiuk'},
    { name: 'Larry Nance Jr.'},
    { name: 'Andrew Nembhard'},
    { name: 'Aaron Nesmith'},
    { name: 'Raul Neto'},
    { name: 'Georges Niang'},
    { name: 'Daishen Nix'},
    { name: 'Zeke Nnaji'},
    { name: 'Nerlens Noel'},
    { name: 'Jaylen Nowell'},
    { name: 'Frank Ntilikina'},
    { name: 'Kendrick Nunn'},
    { name: 'Jusuf Nurkic'},
    { name: 'Jordan Nwora'},
    { name: 'Chuma Okeke'},
    { name: 'Josh Okogie'},
    { name: 'Onyeka Okongwu'},
    { name: 'Isaac Okoro'},
    { name: 'KZ Okpala'},
    { name: 'Victor Oladipo'},
    { name: 'Kelly Olynyk'},
    { name: 'Eugene Omoruyi'},
    { name: 'Cedi Osman'},
    { name: 'Kelly Oubre Jr.'},
    { name: 'Chris Paul'},
    { name: 'Cameron Payne'},
    { name: 'Theo Pinson'},
    { name: 'Scotty Pippen Jr.'},
    { name: 'Mason Plumlee'},
    { name: 'Jakob Poeltl'},
    { name: 'Aleksej Pokusevski'},
    { name: 'Jordan Poole'},
    { name: 'Kevin Porter Jr.'},
    { name: 'Michael Porter Jr.'},
    { name: 'Otto Porter Jr.'},
    { name: 'Bobby Portis'},
    { name: 'Micah Potter'},
    { name: 'Dwight Powell'},
    { name: 'Norman Powell'},
    { name: 'Cam Reddish'},
    { name: 'Davon Reed'},
    { name: 'Paul Reed'},
    { name: 'Naz Reid'},
    { name: 'Nick Richards'},
    { name: 'Josh Richardson'},
    { name: 'Austin Rivers'},
    { name: 'Duncan Robinson'},
    { name: 'Mitchell Robinson'},
    { name: 'Orlando Robinson'},
    { name: 'Jeremiah Robinson-Earl'},
    { name: 'Isaiah Roby'},
    { name: 'David Roddy'},
    { name: 'Ryan Rollins'},
    { name: 'Derrick Rose'},
    { name: 'Terrence Ross'},
    { name: 'Terry Rozier'},
    { name: 'DAngelo Russell'},
    { name: 'Matt Ryan'},
    { name: 'Domantas Sabonis'},
    { name: 'Jordan Schakel'},
    { name: 'Admiral Schofield'},
    { name: 'Dennis Schröder'},
    { name: 'Dereon Seabron'},
    { name: 'Alperen Þengün'},
    { name: 'Collin Sexton'},
    { name: 'Shaedon Sharpe'},
    { name: 'Pascal Siakam'},
    { name: 'Ben Simmons'},
    { name: 'Marko Simonovic'},
    { name: 'Anfernee Simons'},
    { name: 'Jericho Sims'},
    { name: 'Marcus Smart'},
    { name: 'Dennis Smith Jr.'},
    { name: 'Dru Smith'},
    { name: 'Ish Smith'},
    { name: 'Jabari Smith Jr.'},
    { name: 'Jalen Smith'},
    { name: 'Jeremy Sochan'},
    { name: 'Jaden Springer'},
    { name: 'Lamar Stevens'},
    { name: 'Isaiah Stewart'},
    { name: 'Max Strus'},
    { name: 'Jalen Suggs'},
    { name: 'Edmond Sumner'},
    { name: 'Cole Swider'},
    { name: 'Jayson Tatum'},
    { name: 'Terry Taylor'},
    { name: 'Garrett Temple'},
    { name: 'Dalen Terry'},
    { name: 'Cam Thomas'},
    { name: 'Klay Thompson'},
    { name: 'JT Thor'},
    { name: 'Matisse Thybulle'},
    { name: 'Xavier Tillman Sr.'},
    { name: 'Isaiah Todd'},
    { name: 'Obi Toppin'},
    { name: 'Juan Toscano-Anderson'},
    { name: 'Karl-Anthony Towns'},
    { name: 'Gary Trent Jr.'},
    { name: 'P.J. Tucker'},
    { name: 'Myles Turner'},
    { name: 'Jarred Vanderbilt'},
    { name: 'Fred VanVleet'},
    { name: 'Devin Vassell'},
    { name: 'Gabe Vincent'},
    { name: 'Noah Vonleh'},
    { name: 'Dean Wade'},
    { name: 'Franz Wagner'},
    { name: 'Moritz Wagner'},
    { name: 'Ish Wainright'},
    { name: 'Jabari Walker'},
    { name: 'Kemba Walker'},
    { name: 'Lonnie Walker IV'},
    { name: 'John Wall'},
    { name: 'T.J. Warren'},
    { name: 'Duane Washington Jr.'},
    { name: 'P.J. Washington'},
    { name: 'TyTy Washington Jr.'},
    { name: 'Yuta Watanabe'},
    { name: 'Lindy Waters III'},
    { name: 'Trendon Watford'},
    { name: 'Peyton Watson'},
    { name: 'Blake Wesley'},
    { name: 'Russell Westbrook'},
    { name: 'Coby White'},
    { name: 'Derrick White'},
    { name: 'Jack White'},
    { name: 'Aaron Wiggins'},
    { name: 'Andrew Wiggins'},
    { name: 'Alondes Williams'},
    { name: 'Grant Williams'},
    { name: 'Jalen Williams'},
    { name: 'Jaylin Williams'},
    { name: 'Kenrich Williams'},
    { name: 'Mark Williams'},
    { name: 'Patrick Williams'},
    { name: 'Robert Williams'},
    { name: 'Vince Williams Jr.'},
    { name: 'Ziaire Williams'},
    { name: 'Zion Williamson'},
    { name: 'Justise Winslow'},
    { name: 'James Wiseman'},
    { name: 'Christian Wood'},
    { name: 'Delon Wright'},
    { name: 'McKinley Wright IV'},
    { name: 'Thaddeus Young'},
    { name: 'Trae Young'},
    { name: 'Ivica Zubac'}
  ]
  const [players, setPlayers] = useState([]);
  const [currentInput, setCurrentInput] = useState("");
  const [validInput, setValidInput] = useState(true);
  const [playersDetails, setPlayersDetails] = useState([]);

  const getStats = async () => {
    const details = []
    // Get general player information
    await Promise.all(players.map(async player => {
        try {
          await fetch(process.env.REACT_APP_SERVER_URL + 'search?name=' + player)
          .then(response => response.json())
          .then(data => details.push(data.data[0]))
        } catch (err) {
          console.log(err)
        }
    }));
    setPlayersDetails(details)
  }

  const handleChange = (e, value) => { setPlayers(value); };

  useEffect(() => {
    if (currentInput.length === 0) { setValidInput(true);}
  }, [currentInput]);

  return (
    <div>
        {/* Search bar */}
        <div>
            <div className="Autocomplete">
                <Autocomplete multiple autoSelect
                    options={active_players.map((option) => option.name)}
                    value={players}
                    onChange={handleChange}
                    inputValue={currentInput}
                    onInputChange={(e, v) => setCurrentInput(v)}
                    renderInput={(params) => ( <TextField {...params} variant="outlined" error={!validInput} placeholder="Enter a player's name" />)}
                />
            </div>
            <div className="d-grid gap-2 mt-2">
                <button 
                  className="btn btn-primary" 
                  type="button" 
                  onClick={getStats}
                >
                  Compare the players
                </button>
            </div>
        </div>
        {/* Results */}
        <div className="mt-5"><Chart players={playersDetails}/></div>
    </div>
  );

};

export default Search;