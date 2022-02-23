const fs = require('fs');

try{
    fs.writeFileSync('fyh.txt', new Date().toLocaleString());
    console.log(fs.readFileSync('fyh.txt', 'utf-8'))
}catch(error){
    console.log(error)
}