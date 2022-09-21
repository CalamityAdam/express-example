const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

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

app.listen(8080, () => console.log(`listening on port ${8080}`));
