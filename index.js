require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

// Allow CORS requests
app.use(cors());

// parsing middleware for form input data & json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// api router
app.use('/api', require('./routes'));

app.get('/', (req, res, next) => {
  res.send('Stay awhile and listen!');
});

// any remaining requests with an extension send 404
app.use((req, res, next) => {
  const err = new Error('Not found');
  err.status = 404;
  next(err);
});

// error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
