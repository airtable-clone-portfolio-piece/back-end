const express = require('express');
const db = require('./knexfile');
const helmet = require('helmet');
const lodash = require('lodash');

const PORT = process.env.PORT || 5000;
const server = express();

server.use(express.json(), cors, helmet, lodash);

// endpoints

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
