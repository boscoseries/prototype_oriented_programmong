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
  });

  test("createOrder(10000, { book: 5, biro: 2}) should return 'user not found", function() {
    var invalid_order = order.createOrder(10000, { book: 5, biro: 2})
    expect(invalid_order).toContain('user not found');
  });

  test("readAllOrders() should return all orders from the orders_table", function() {
    var received = admin.readAllOrders();
    expect(received).toContainEqual(new_order);
  });

  test("readOrderById(1) should return the order with Id 1", function() {
    var received = admin.readOrderById(1);
    expect(received).toHaveProperty('order_id', 1);
  });

  test("readOrderById(1000) should return 'order not found", function() {
    var received = admin.readOrderById(1000);
    expect(received).toBeFalsy();
  });

  test("updateOrderDetails(1, 1, {book: 10, red_label: 2} ) should update order details of user with id=1", function() {
    var received = admin.updateOrderDetails(1, 1, {book: 10, red_label: 2});
    expect(received).toEqual(expect.objectContaining({ user_id: 1, products: {book: 10, red_label: 2}, order_id: 1 }));
  });

  test("updateOrderDetails(1, 100, {phone: 10, desks: 2} ) should return 'order not found'", function() {
    var received = admin.updateOrderDetails(1, 100, {phone: 10, desks: 2} );
    expect(received).toBeFalsy();
  });

})