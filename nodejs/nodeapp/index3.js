import http from 'http';
let server = http.createServer((req, res) => {
    res.end('Requst received...');
});
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});