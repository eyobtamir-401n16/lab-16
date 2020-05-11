'use strict';
const event = require('./events.js')


const vendorHandler = (payload) => {
  console.log('post', payload);
}

const pickedUpHandler = (payload) => {
  console.log('pick-up', payload.orderId)
}

const inTransitHandler = (payload) => {
  console.log('in-transit', payload.orderId)
}

const deliveredHandler = (payload) => {
  console.log('delivered', payload.orderId)
}

const vendorHappyFace = () => {
  console.log('Thank You!!!')
}


module.exports = {
  vendorHandler,
  pickedUpHandler,
  inTransitHandler,
  deliveredHandler,
  vendorHappyFace
};