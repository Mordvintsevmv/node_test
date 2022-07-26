// Работа с событиями

import Events from 'Module/events.js'
import dotenv from "dotenv";

const events = new Events()

events.on('message', (data, first, second) => {
    console.log('Сообщение: ' + data);
    console.log('Первый аргумент: ' + first);

})

dotenv.config()
const MESSAGE = process.env.message || '';

if (MESSAGE){
    events.emit('message', MESSAGE, '.env');
} else{
    events.emit('message', MESSAGE, 'Пустой');
}

