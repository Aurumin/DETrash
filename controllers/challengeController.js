const Create = require("../queries/createChallenge");
const Challenges = require("../models/challenge");
const request = require("request");

module.exports = {
  async createChallenge (req, res) {
    await Create.CreateChallenge(req.body);
    res.send("Challenge created");
  },

  async listChallenges(req, res) {
    res.send(
      await Challenges.find({})
      );
  },

  async listOne(req, res) {
    res.send(
      await Challenges.findById(req.body.challengeID)
    );
  },

  async getLocation(req,res) {
    const {lat,lng,type} = req.body;

    let query = "";

    switch(type){
        case 'coffee':
            query = "4bf58dd8d48988d16a941735,4bf58dd8d48988d16d941735,4bf58dd8d48988d1e0931735,4bf58dd8d48988d1d0941735";
            break;
        default:
            query = "";
            break;
    }

    request({
        url: 'https://api.foursquare.com/v2/venues/search',
        method: 'GET',
        qs: {
          client_id: 'C1HZ1UIB4CSXHFVNN4KRX3BCES2JTECJDSRUX35HKTUBSDNA',
          client_secret: 'LM1PL3ZJ5AZBM2DQXDQHVC5H0CQBNWES34JHYADFNJYEXJPF',
          ll: `${lat},${lng}`,
          intent: 'checkin',
          radius: 75,
          categoryId: `${query}`,
          v: '20180323',
          limit: 5
        }
      }, function(err, response, body) {
        if (err) {
            res.status(400).json({error: ["Failed to load locations!"]});
        } else {
            let results = JSON.parse(body);
            if(results.meta.code !== 400){
                if(results.response.venues.length > 0){
                    let venue = {
                        id: results.response.venues[0].id,
                        name: results.response.venues[0].name,
                        location: results.response.venues[0].location,
                    }
                    // res.json(results);
                    res.json(venue);
                }else{
                    res.status(402).json({error: ["No results found!"]});    
                }
            }else{
                res.status(401).json({error: ["Invalid arguments!"]});
            }
        }
      });
  }
};
