const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const axios = require('axios');
const routes = require('./routes.js');
const compression = require('compression');

app.use(cors());
app.use(compression());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));
app.use('/songs/:id', express.static(path.join(__dirname, '../public')));
app.use('/api', routes);

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

app.get('/api/stats/:id', (req, res) =>{
  axios.get(`http://localhost:3004/api/stats/${req.params.id}`)
  .then(({ data }) => {
    res.json(data);
  })
  .catch((error) => {
    // console.log(error);
  })
})

app.get('/relatedtracks/:id', (req, res) => {
  console.log('made it to rel. id')
 const songId = req.params.id;
 axios.get(`http://18.219.127.175/relatedTracks/${songId}`)
   .then(({ data }) => {
     res.json(data);
   })
   .catch((error) => {
     console.log(error.slice(35));
   });
});

app.get('/relatedalbums/:id', (req, res) => {
 const songId = req.params.id;
 axios.get(`http://18.219.127.175/relatedAlbums/${songId}`)
   .then(({ data }) => {
     res.json(data);
   })
   .catch((error) => {
     console.log(error.slice(35));
   });
});

app.get('/comments/:songid', (req, res) => {
  console.log('made it here')
 // console.log(`http:/localhost:3001/api/${req.params.songid}`);
 axios.get(`http://localhost:3001/api/${req.params.songid}`)
  .then(function (response) {
   res.send(response.data);
  })
  .catch(function (error) {
   // console.log(error);
  });
});