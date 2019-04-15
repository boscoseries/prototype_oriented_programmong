var order = require('../orders');
var user = require('../users');

describe("order tests", function() {
  test("createOrder(1, 1, { book: 5, biro: 2}) should create an order with the products", function() {
    var received = order.createOrder(1, 1, { book: 5, biro: 2})
    expect(received).toBeDefined()
  })
})