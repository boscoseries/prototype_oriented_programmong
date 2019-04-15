var order = require('../orders');
var user = require('../users');

describe("order tests", function() {

  test("createOrder(1, { book: 5, biro: 2}) should create an order with the products 'book and biro", function() {
    var received = order.createOrder(1, 1, { book: 5, biro: 2})
    expect(received).toBeDefined();
  })

  test("createOrder(1, 1, { book: 5, biro: 2}) should create an order with the products 'book and biro", function() {
    var received = order.createOrder(1, { book: 5, biro: 2})
    expect(received.products).toHaveProperty('book', 5);
  })

  test("createOrder(10000, { book: 5, biro: 2}) should return 'user not found", function() {
    var received = order.createOrder(10000, 1, { book: 5, biro: 2})
    expect(received).toContain('user not found');
  })




})