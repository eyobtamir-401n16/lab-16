'use strict';
const emitter = require('./events.js')
const faker = require('faker');

const vendor = setInterval( () => {
  let date = faker.date.recent()
  console.log(date)
  let store = faker.company.companyName();
  let orderId = faker.random.number();
  let customer = faker.name.firstName() + ' ' + faker.name.lastName();
  let address = faker.address.streetAddress() + ' ' + faker.address.city() + ' ' + faker.address.state();
 
emitter.emit('new-order', {date, store, orderId, customer, address } )
}, 5000);

  let msg2 = 'Thank you!!!';
  emitter.emit('msg', msg2)
const vendorMsg = (msg2) => {
  console.log(msg2)
}
emitter.on('msg', vendorMsg)

module.exports = vendor;