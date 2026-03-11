import http from "http";
import fs from "fs";
import path from "path";

//Streaming with http server 

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const filePath = path.resolve("hugefile.txt");

    //created read stream
    const stream = fs.createReadStream(filePath);

    res.writeHead(200, {
      "Content-Type": "text/plain",
    });

    //streaming to response object 
    stream.pipe(res);

    stream.on("error", (err) => {
      res.writeHead(500);
      res.end("Error reading file");
    });
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

