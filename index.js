const http = require('http');
const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
	const options = {
		root: path.join(__dirname, 'public'),
		headers: {
			'Content-Type': 'text/html',
		},
	};

	res.sendFile('index.html', options, (err) => {
		if (err) {
			console.log(err);
			res.end();
		} else {
			console.log('Sent home');
			res.end();
		}
	});
});

app.get('/about', (req, res) => {
	const options = {
		root: path.join(__dirname, 'public'),
		headers: {
			'Content-Type': 'text/html',
		},
	};

	res.sendFile('about.html', options, (err) => {
		if (err) {
			console.log(err);
			res.end();
		} else {
			console.log('Sent about');
			res.end();
		}
	});
});

app.get('/contact-me', (req, res) => {
	const options = {
		root: path.join(__dirname, 'public'),
		headers: {
			'Content-Type': 'text/html',
		},
	};

	res.sendFile('contact-me.html', options, (err) => {
		if (err) {
			console.log(err);
			res.end();
		} else {
			console.log('Sent contact me');
			res.end();
		}
	});
});

app.get('/styles.css', (req, res) => {
	const options = {
		root: path.join(__dirname, 'public'),
		headers: {
			'Content-Type': 'text/css',
		},
	};

	res.sendFile('styles.css', options, (err) => {
		if (err) {
			console.log(err);
			res.end();
		} else {
			console.log('Sent styles');
			res.end();
		}
	});
});

app.all('*', (req, res) => {
	const options = {
		root: path.join(__dirname, 'public'),
		headers: {
			'Content-Type': 'text/html',
		},
	};

	res.sendFile('404.html', options, (err) => {
		if (err) {
			console.log(err);
			res.end();
		} else {
			console.log('Sent 404');
			res.end();
		}
	});
});

// // Create server
// const server = http.createServer((req, res) => {
// 	// Build file path for pages
// 	let filePath = './public/';
// 	switch (req.url) {
// 		case '/':
// 			filePath += 'index.html';
// 			res.statusCode = 200;
// 			res.setHeader('Content-Type', 'text/html');
// 			break;
// 		case '/about':
// 			filePath += 'about.html';
// 			res.statusCode = 200;
// 			res.setHeader('Content-Type', 'text/html');
// 			break;
// 		case '/contact-me':
// 			filePath += 'contact-me.html';
// 			res.statusCode = 200;
// 			res.setHeader('Content-Type', 'text/html');
// 			break;
// 		case '/styles.css':
// 			filePath += 'styles.css';
// 			res.statusCode = 200;
// 			res.setHeader('Content-Type', 'text/css');
// 			break;
// 		default:
// 			filePath += '404.html';
// 			res.statusCode = 404;
// 			res.setHeader('Content-Type', 'text/html');
// 			break;
// 	}

// 	// Read and serve file
// 	fs.readFile(filePath, (err, data) => {
// 		// Handle errors
// 		if (err) {
// 			// Handle page not found
// 			console.log(err);
// 			res.end();
// 		} else {
// 			// Successfully connected to server and found page
// 			res.end(data, 'utf8');
// 		}
// 	});
// });

// Set up port for connection
const PORT = process.env.PORT || 8080;

// Create app event to listen for the port
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
