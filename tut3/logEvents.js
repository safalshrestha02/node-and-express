const {format} = require('date-fns');
const { v4: uuid, __esModule } = require('uuid');
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvents = async (message, logName) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
    console.log(logItem);

    try{
        if(!fs.existsSync(path.join(__dirname, 'logs'))){
            await fsPromises.mkdir(path.join(__dirname,'logs'));
        }
       //text
        await fsPromises.appendFile(path.join(__dirname, 'logs',logName), logItem);
    }
    catch(err){
        console.log(err);
    }
}

module.exports = logEvents;
// console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'));

// console.log(uuid())

// console.log("hello");