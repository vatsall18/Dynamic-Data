
//Setup our server
const http = require('http');
// Define the port the app will be acccessed from (80,8080,8888 are default to the domain)
const port = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type" : "Text/Plain"})
    response.end("hEllO WoRld!")
})

// Start the server
server.listen(port, () => console.log("Server started on port "+ port + ". Press Cmd+C to stop."))