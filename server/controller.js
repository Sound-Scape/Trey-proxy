const axios = require('axios');

module.exports = {
  waveformPlayer: function(req, res) {
    axios(`http://localhost:3003/api/songs/${req.params.id}`)
    .then(function(response) {
     res.send(response.data)
    })  
    .catch(function(error) {
      console.log(error);
    })
  }
}