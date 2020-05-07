'use strict';

const emitter = require('./lib/events.js');

const vendorhandler = (payload) => {
  console.log(payload);
}

emitter.on('new-order', vendorhandler)
require('./lib/vendor.js')