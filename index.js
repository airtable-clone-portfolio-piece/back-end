const express = require('express');
require("dotenv").config();
const db = require('./knexfile');
const helmet = require('helmet');
const cors = require('cors')
const PORT = process.env.PORT || 5000;
const server = express();
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

server.use(express.json(), cors(), helmet());

server.listen(PORT, () => {
  console.log(`\n=== Web API Listening on http://localhost:${PORT} ===\n`)
});

const authConfig = {
  domain: process.env.domain,
  audience: process.env.apiID
};

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
  }),

  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithm: ["RS256"]
});


server.get("/api/external", checkJwt, (req, res) => {
  res.status(200).json({message: "You have been authenticated!"})
});
