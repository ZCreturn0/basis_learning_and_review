require('./first.js');
require('!style-loader!css-loader!./style.css');

document.getElementById('app').innerText = 'Hello World!';