require('dotenv').config();
const server = require('./server.js');

const PORT = process.env.PORT || 5000;
const MESSAGE = process.env.MESSAGE || `lay those staccs down at port:`;

server.listen(PORT, () => {
  console.log(`${MESSAGE} ${PORT}...`);
});