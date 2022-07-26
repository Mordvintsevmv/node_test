// Работа с файлами

import fs from 'fs'
import fsPromise from 'fs/promises'
import path from 'Module/path.js'
import { fileURLToPath } from 'Module/url.js';
import { dirname } from 'Module/path.js';
import dotenv from "dotenv";

dotenv.config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// console.log('\nSTART SYNC');
// fs.mkdirSync(path.resolve(__dirname, 'newDirSync', 'newDirSync2'), {recursive: true})
// console.log('END SYNC\n');
//
// console.log('\nSTART ASYNC');
// fs.mkdir(path.resolve(__dirname, 'newDir'), (err) => {
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log('\nПапка создана\n')
// })
// console.log('END ASYNC\n');


// console.log('\nSTART SYNC REMOVE');
// fs.rmdirSync(path.resolve(__dirname, 'newDirSync'), {recursive: true})
// console.log('END SYNC REMOVE\n');


// console.log('\nSTART ASYNC REMOVE');
// fs.rmdir(path.resolve(__dirname, 'newDir'), (err) => {
//     if (err){
//         throw err;
//     }
//     console.log('\nПапка удалена\n')
// })
// console.log('END ASYNC REMOVE\n');

await fsPromise.writeFile(path.resolve(__dirname, 'newDir', 'text.txt'), 'TEST TEXT', (err) => {
    if (err) {
        throw err;
    }
    console.log('Файл Записан!');
})

await fsPromise.appendFile(path.resolve(__dirname, 'newDir', 'text.txt'), '\nAPPEND TEXT', (err) =>{
    if (err){
        throw err;
    }
    console.log('Файл Записан!');
});

const text = await fsPromise.readFile(path.resolve(__dirname, 'newDir', 'text.txt'),{encoding: 'utf-8'});

console.log(text)

try {
    await fsPromise.rm(path.resolve(__dirname, 'newDir', 'text.txt'));
    console.log("SUCCESS!")
}
catch (err){
    console.log("NO!")
    console.log(err)
}

const writeText = process.env.text || 'NO!'

await fsPromise.writeFile(path.resolve(__dirname, 'newDirSync', 'textenv1.txt'), writeText)
await fsPromise.appendFile(path.resolve(__dirname, 'newDirSync', 'textenv1.txt'), '\nAppend text')
const newText = await fsPromise.readFile(path.resolve(__dirname, 'newDirSync', 'textenv1.txt'), {encoding: 'utf-8'})
await fsPromise.rm(path.resolve(__dirname, 'newDirSync', 'textenv1.txt'))
await fsPromise.writeFile(path.resolve(__dirname, 'newDirSync', 'textenv2.txt'), newText)
console.log(newText.split(/[ .:;?!~,`"&|()<>{}\[\]\r\n/\\]+/))
await fsPromise.writeFile(path.resolve(__dirname, 'newDirSync', 'textenvlength.txt'), 'Количесвто слов: ' + newText.split(/[ .:;?!~,`"&|()<>{}\[\]\r\n/\\]+/).length)
