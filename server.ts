import fs from "fs";
import { createServer } from "http";
import generateFile from "./generateFile.js";

const server = createServer();

server.on('request', (req, res) => {
    const src = fs.createReadStream('./big.file');
    src.pipe(res);
});

server.listen(8000, 'localhost', undefined, () => generateFile());