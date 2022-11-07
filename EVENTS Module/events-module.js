const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// myEmitter.on('event', () => {
//   console.log('an event occurred!');
// });

// myEmitter.emit('event');

myEmitter.on('Spotify', () => {

    console.log("play Taylor Swift songs");
    setTimeout(() => {
        
        console.log("playing Maroon by Taylor Swift");
    },3000);

});


console.log("Spotify running")
myEmitter.emit('Spotify');
console.log("playing song")
myEmitter.emit('Spotify');


