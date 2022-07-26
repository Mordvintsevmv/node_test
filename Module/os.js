// Информация о системе

import os from 'os'
import cluster from 'cluster'

if (cluster.isMaster){
    for (let i = 0; i < os.cpus().length - 2; i++) {
        cluster.fork()
    }
    cluster.on('exit', (worker) => {
        console.log(`Процесс PID = ${process.pid} отключен!`);
        cluster.fork();
    })
} else{
    console.log(`PID = ${process.pid} запущен!`)

    setInterval( () =>{
        console.log(`PID = ${process.pid} всё ещё работает!`)
        }, 5000)
}
