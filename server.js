const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

//↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
//                NPM Packages
//======================================================
// Setting Up Port, Models, Express, Routes & MongoDB
//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

const PORT = process.env.PORT || 3000;

var app = express();

require('./models');

// Logger (Must be BELOW express)
app.use(logger('dev'));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(express.static('public'));

mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log('Database is conncted'))
  .catch((err) => console.log(err));

require('./routes/html-routes.js')(app);
require('./routes/api-routes.js')(app);

// Fire It UPP
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
