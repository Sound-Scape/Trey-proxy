const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const axios = require('axios');
const routes = require('./routes.js');

app.use(cors());

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));
app.use('/songs/:id', express.static(path.join(__dirname, '../public')));
app.use('/api', routes);

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

app.get('/relatedtracks/:id', (req, res) => {
  console.log('made it to rel. id')
 const songId = req.params.id;
 axios.get(`http://localhost:3002/relatedTracks/${songId}`)
   .then(({ data }) => {
     console.log('Related Tracks', data);
     res.json(data);
   })
   .catch((error) => {
     console.log(error);
   });
});

app.get('/relatedalbums/:id', (req, res) => {
  console.log('made it to rel. albums')
 const songId = req.params.id;
 axios.get(`http://localhost:3002/relatedAlbums/${songId}`)
   .then(({ data }) => {
     console.log('Related Albums', data);
     res.json(data);
   })
   .catch((error) => {
     console.log(error);
   });
});