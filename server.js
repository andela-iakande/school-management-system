// This will be our application entry. We'll setup our server here.
import http from 'http';
import app from './server/src/app'; // The express app we just created

const port = process.env.PORT || 8000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
console.log('server is already running on port 8000');

