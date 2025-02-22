const http = require('http');
const path = require('path');
const fs = require('fs');

// Create server
const server = http.createServer((req, res) => {
	// Build file path for pages
	let filePath = './public/';
	switch (req.url) {
		case '/':
			filePath += 'index.html';
			res.statusCode = 200;
			res.setHeader('Content-Type', 'text/html');
			break;
		case '/about':
			filePath += 'about.html';
			res.statusCode = 200;
			res.setHeader('Content-Type', 'text/html');
			break;
		case '/contact-me':
			filePath += 'contact-me.html';
			res.statusCode = 200;
			res.setHeader('Content-Type', 'text/html');
			break;
		case '/styles.css':
			filePath += 'styles.css';
			res.statusCode = 200;
			res.setHeader('Content-Type', 'text/css');
			break;
		default:
			filePath += '404.html';
			res.statusCode = 404;
			res.setHeader('Content-Type', 'text/html');
			break;
	}

	// Read and serve file
	fs.readFile(filePath, (err, data) => {
		// Handle errors
		if (err) {
			// Handle page not found
			console.log(err);
			res.end();
		} else {
			// Successfully connected to server and found page
			res.end(data, 'utf8');
		}
	});
});

// Set up port for connection
const PORT = process.env.PORT || 8080;

// Create server event to listen for the port
server.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
