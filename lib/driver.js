'use strict';
const emitter = require('./events.js');

const vendorhandler = (payload) => {
  console.log(payload);
}
const vendorhandler2 = (payload) => {
    console.log('Order-picked-up', payload.orderId)
    emitter.emit('Intransit', payload)
}

const vendorhandler3 = (payload) => {
  console.log('in-transit', payload.orderId)
}

emitter.on('new-order', vendorhandler)
emitter.on('new-order', vendorhandler2)
emitter.on('Intransit', vendorhandler3)


