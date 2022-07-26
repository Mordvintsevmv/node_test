import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// fs.readFile(path.resolve(__dirname,"..", "picture.jpg"), (err, data) => {
//     if (err){
//         throw err;
//     }
//     console.log(data)
// })

const readStream = fs.createReadStream(path.resolve(__dirname,"..", "picture.jpg"))

let n = 0;

readStream.on('data', (chunk) =>{
    console.log(chunk);
    n++;
})

readStream.on('end', () =>{
    console.log(n + " кусочка");
})

readStream.on('error', (err) =>{
    console.log("NO!");
})


const writeStream = fs.createWriteStream(path.resolve(__dirname,"..", "streamText.txt"))

for (let i =0; i<20; i++){
    writeStream.write(i + "\n");
}

writeStream.end();