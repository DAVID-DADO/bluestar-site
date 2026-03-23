const http = require('http');
const fs = require('fs');
const path = require('path');
const ROOT = 'C:/Users/david/OneDrive/Desktop/bluestar-deploy';
const MIME = { '.html':'text/html', '.css':'text/css', '.js':'application/javascript', '.jpeg':'image/jpeg', '.jpg':'image/jpeg', '.png':'image/png', '.mp4':'video/mp4' };
http.createServer((req, res) => {
  const url = req.url === '/' ? '/index.html' : req.url;
  const file = path.join(ROOT, url);
  const ext = path.extname(file);
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'text/plain' });
    res.end(data);
  });
}).listen(9876, () => console.log('Server running at http://localhost:9876'));
