const express = require('express'),
      bodyParser = require('body-parser'),
      photogs = require('./photographers'),
      cors = require('cors'),
      app = express();

app.use(bodyParser.json())

app.get('/api/getPhotographers', (req, res) => {
  res.status(200).send(photogs)
})

app.listen(3001, () => console.log('listening on port 3001'))