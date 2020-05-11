'use strict';

const emitter = require('./lib/events.js');
const vendorHandler1 = require('./lib/handlers.js').vendorHandler;
const inTransitHandler1 = require('./lib/handlers.js').inTransitHandler; 
const delveredHandler1 = require('./lib/handlers.js').deliveredHandler;




emitter.on('new-order', vendorHandler1);
emitter.on('in-transit', inTransitHandler1);
emitter.on('delivered', delveredHandler1);



require('./lib/vendor.js')
require('./lib/driver.js')
