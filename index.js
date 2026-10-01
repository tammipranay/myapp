const http = require("http");

const PORT = 8000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, my Node.js application is running!");
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});