// Пример работы с путём до файла
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('Путь новый:')
console.log(path.join('first', 'second', 'third'));
console.log('\n')

console.log('Путь к папке:')
console.log(path.join(__dirname));
console.log(path.join(__dirname, '..'));
console.log(path.join(__dirname, '..', '..'));
console.log(path.join(__dirname, '..', '..', '..'));
console.log('\n')


console.log('Путь к файлу:')
console.log(path.join(__filename));
console.log('\n')

console.log('Resolve:')
console.log(path.resolve('first','second'));
console.log('\n')

console.log('Парсинг:')
console.log(path.parse(__filename));
console.log('\n')

