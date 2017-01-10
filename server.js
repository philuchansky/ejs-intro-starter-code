var
  express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  haikuRoutes = require('./routes/haikus.js')

mongoose.connect('mongodb://localhost/haiku-hub', (err) => {
  console.log(err || "Connected to MongoDB (haiku-app)")
})

// middleware (will run after a request, but before response):
app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('<h1>Welcome to HaikuHub</h1>')
})

app.use('/haikus', haikuRoutes)

app.listen(3000, (err) => {
  console.log(err || "Server running on 3000. Boom.")
})
