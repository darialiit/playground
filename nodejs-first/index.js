const http = require('http');
const fs = require('fs');
const path = require('path');

http
  .createServer((req, res) => {
    let filePath = '';
    let contentType = 'text/html';
    let statusCode = 200;

    switch (req.url) {
      case '/':
        filePath = path.join(__dirname, 'index.html');
        break;
      case '/about':
        filePath = path.join(__dirname, 'about.html');
        break;
      case '/contactme':
        filePath = path.join(__dirname, 'contactme.html');
        break;
      default:
        filePath = path.join(__dirname, '404.html');
        statusCode = 404;
        break;
    }

    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(`Server Error: ${err.code}`);
        console.error(err);
      } else {
        res.writeHead(statusCode, { 'Content-Type': contentType });
        res.end(content);
      }
    });
  })
  .listen(8080, () => {
    console.log('Server running on port 8080');
  });
