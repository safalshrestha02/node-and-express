const fs = require('fs');

//create dir
if(!fs.existsSync('./new')){
    fs.mkdir('./new', (err)=>{
        if (err) throw err;
    
        console.log('Dir Created')
    });
}

//delete dir

if(fs.existsSync('./new')){
    fs.rmdir('./new', (err)=>{
        if (err) throw err;
    
        console.log('Dir Deleted')
    });
}