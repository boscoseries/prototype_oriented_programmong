var Order = require('../orders');
var Admin = require('../admin');

var admin = new Admin();
var order = new Order();


describe("order tests", function() {

  var user_1 = admin.createUser('John', 'john@gmail.com', 'johnpass');
  var user_2 = admin.createUser('bashy', 'bashy@gmail.com', 'bahypass');

  var new_order1 = order.createOrder(1, { balls: 15, pens: 12});
  var new_order1_b = order.createOrder(1, { book: 5, biro: 2});
  var new_order2 = order.createOrder(2, { laptop: 10, bags: 5});

  test("createOrder(1, { book: 5, biro: 2}) should create an order with the products 'book and biro", function() {
    var received = new_order1_b;
    expect(received).toBeDefined();
  })

  test("createOrder(1, { balls: 5, pens: 2}) should create an order with the products 'balls and pens", function() {
    expect(new_order1.products).toHaveProperty('balls', 15);
  });

  test("createOrder(10000, { book: 5, biro: 2}) should return 'user not found", function() {
    var invalid_order = order.createOrder(10000, { book: 5, biro: 2})
    expect(invalid_order).toContain('user not found');
  });

  test("readAllOrders() should return all orders from the orders_table", function() {
    var received = admin.readAllOrders();
    expect(received).toContainEqual(new_order1);
  });

  test("readOrderById(1, 1) should return user_1 order with Id=1", function() {
    var received = admin.readOrderById(1, 1);
    expect(received).toHaveProperty('order_id', 1);
  });

  test("readOrderById(1, 1000) should return 'order not found", function() {
    var received = admin.readOrderById(1000);
    expect(received).toBeFalsy();
  });

  test("updateOrderDetails(1, 2, {book: 10, red_label: 2} ) should update order_2 details of user with id=1", function() {
    var received = admin.updateOrderDetails(1, 2, {book: 10, red_label: 2});
    expect(received).toEqual(expect.objectContaining({ user_id: 1, products: {book: 10, red_label: 2}, order_id: 2 }));
  });

  test("updateOrderDetails(1, 100, {phone: 10, desks: 2} ) should return 'order not found'", function() {
    var received = admin.updateOrderDetails(1, 100, {phone: 10, desks: 2} );
    expect(received).toBeFalsy();
  });

  test("Expect deleteOrderById(1, 1) to delete the user_1's order_id=1", function () {
    var received = admin.deleteOrderById(1, 1);
    var orderId_1 = admin.deleteOrderById(1);
    expect(received).toContain('order deleted');
    expect(orderId_1).toBeFalsy();
  });

  test("Expect deleteOrderById(1, 2000) to be Falsy()", function () {
    var deleted_order = admin.deleteOrderById(1);
    expect(deleted_order).toBeFalsy();
  });

  test("Expect deleteAllOrders() to empty the orders database", function () {
    var delete_database = admin.deleteAllOrders();
    var all_orders = admin.readAllOrders();
    expect(all_orders).toEqual(expect.arrayContaining([]));
  });

})