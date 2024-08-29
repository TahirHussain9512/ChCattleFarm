const http = require('http');

const app = require("./app");

const port = process.env.PORT || 5001;

const server = http.createServer(app);

console.log(port);
server.listen(port);