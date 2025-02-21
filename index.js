const http = require("http");
const path = require("path");
const fs = require("fs");

// Create server
const server = http.createServer((req, res) => {});

// Set up port for connection
const PORT = process.env.PORT || 8080;

// Create server event to listen for the port
server.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
