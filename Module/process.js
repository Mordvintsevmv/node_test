// Пример работы с процессами

import dotenv from 'dotenv'

dotenv.config()

console.log(process.pid)
console.log(process.env.PORT)
console.log(process.env.description)

if (Math.random() > 0.5){
    while (true){

    }
} else {
    console.log('Закрыто');
    process.exit()
}