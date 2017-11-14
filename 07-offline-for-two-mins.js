const keypress = require('keypress');
// Press c for exit

keypress(process.stdin);

const OFFLINE_INTERVAL = 1000; // 1 second
const ONLINE_INTERVAL = 1000; // 1 second
let interval;

const showOnline = () => {
    let ctr = 0;
    clearInterval(interval);
    interval = setInterval(() => {
        ctr++;
        console.log('Online');
        if (ctr === 20) clearInterval(interval);
    }, OFFLINE_INTERVAL);
};

const showOffline = () => {
    let ctr = 0;
    clearInterval(interval);
    interval = setInterval(() => {
        ctr++;
        console.log('Offline');
        if (ctr === 20) clearInterval(interval);
    }, OFFLINE_INTERVAL);
};

// listen for the "keypress" event 
process.stdin.on('keypress', function (ch, key) {
    if (key.name === 'up') {
      showOnline();  
    } else if (key.name === 'down') {
      showOffline();  
    } else if (key.name === 'c') {
        process.exit();
    } else {
      console.log('Invalid key. You can only press up or down');
    }
});

process.stdin.setRawMode(true);
process.stdin.resume();
