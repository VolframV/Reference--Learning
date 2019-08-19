const os = require('os');

// Platform
console.log('Platform: '+os.platform());

// CPU Arch 
console.log('CPU Architechture: '+os.arch());

// CPU Core Info
//console.log(os.cpus());

// Free memeory 
console.log('Free momory: '+ os.freemem());

// Total memeory 
console.log('Total momory: '+ os.totalmem());

//home dir
console.log('Your home directory: '+os.homedir());

// up time 
console.log('Sytem uptime: '+((os.uptime()/60))/60 +' Hours');