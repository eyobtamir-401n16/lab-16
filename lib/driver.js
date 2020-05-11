'use strict';
const emitter = require('./events.js');
const driverpickedUp2 = require('./handlers.js').pickedUpHandler;


  const deliveryDriver = (payload) => {
    emitter.emit('in-transit',payload) 
    setTimeout(() => {
      emitter.emit('delivered', payload)
  },1500);

  }
emitter.on('new-order', driverpickedUp2);
emitter.on('new-order', deliveryDriver);