const fs = require('fs');

const rs = fs.createReadStream('./text/j.txt', {encoding: 'utf8'});

const ws = fs.createWriteStream('./text/lorem.txt');

// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk);
// })

rs.pipe(ws);