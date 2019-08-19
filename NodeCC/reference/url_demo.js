const url = require('url');

const myUrl = new URL('htttp://mywebsite.com/hello.html?id=100&status=active');

// Sereialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);
// Hostname (does not get port)
console.log(myUrl.hostname);
// Pathname
console.log(myUrl.pathname);
//Serialized query
console.log(myUrl.search);
// Params object
console.log(myUrl.searchParams);
// Add param
myUrl.searchParams.append('Name', 'BobbyLee');
console.log(myUrl.searchParams);
// loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));