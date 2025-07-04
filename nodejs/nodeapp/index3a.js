import http from 'http';

const server = http.createServer((req, res) => {
    res.end("Good morning");
});

server.listen(4000, () => {
    console.log("Server icds running on port 4000");
});
