var Order = require('../orders');
var User = require('../users');
var Admin = require('../admin');

var admin = new Admin();
var order = new Order();
var user = new User();

describe("order tests", function() {

  var new_order = order.createOrder(2, { balls: 15, pens: 12});

  test("createOrder(1, { book: 5, biro: 2}) should create an order with the products 'book and biro", function() {
    var received = order.createOrder(1, { book: 5, biro: 2});
    expect(received).toBeDefined();
  })

  test("createOrder(1, { balls: 5, pens: 2}) should create an order with the products 'balls and pens", function() {
    expect(new_order.products).toHaveProperty('balls', 15);
  })

  test("createOrder(10000, { book: 5, biro: 2}) should return 'user not found", function() {
    var invalid_order = order.createOrder(10000, { book: 5, biro: 2})
    expect(invalid_order).toContain('user not found');
  })

  test("readAllOrders() should return all orders from the orders_table", function() {
    var received = admin.readAllOrders();
    expect(received).toContainEqual(new_order);
  })



})