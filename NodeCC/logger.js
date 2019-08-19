const Logger = require('./logger');
const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter{
    log(msg){
        //call event
        this.emit('Message', {id: uuid.v4(), msg:msg});
    }
}



// import file/class
//const person1= new Person('Bobby Lee', 33);
//person1.greeting();


// LOGGER
const logger = new Logger();

logger.on('Message', (data) => console.log('Called Listener', data));

logger.log('Hi World!');
logger.log('Hi');
logger.log('Hey');

