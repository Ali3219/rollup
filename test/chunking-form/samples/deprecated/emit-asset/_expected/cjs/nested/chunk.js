'use strict';

var main = require('../main.js');

var logo = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __dirname + '/../assets/logo2-6d5979e4.svg').href : new URL('../assets/logo2-6d5979e4.svg', document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT' && document.currentScript.src || document.baseURI).href);

main.showImage(logo);