var Users = require('./users');
var Admin = require('./admin');
var database = require('./database');

var all_orders = database.orders_table;
var all_users = database.users_table;

function Order() {

   this.id = 0;
};

Order.prototype.orderId = function () {
  //this.id = 0;
  return this.id += 1;
};

Order.prototype.dateOfOrder = function () {
  var newDate = new Date();
  return newDate.toDateString()
}

Order.prototype.timeOfOrder = function () {
  var newDate = new Date();
  return newDate.toLocaleTimeString()
}

Order.prototype.createOrder = function (user_id, products) {
  var newProducts = {};
  var isAUser = user.getUserById(user_id);
  if (!isAUser) {
    return 'user not found'
  } else {
    all_users.forEach(function (a_user) {
      if (a_user.id == user_id) {
        newProducts = { user_id, time_of_order: order.timeOfOrder(), date_of_order: order.dateOfOrder(), order_id: order.orderId(), products: products };
        all_orders.push(newProducts);
      };
    });
    return newProducts;
  };
};

var order = new Order();
var user = new Users();


// console.log(order.createOrder(1, { book: 5, biro: 2}));
// console.log(order.createOrder(1, { balls: 15, pens: 12}));
// console.log(order.createOrder(3, { TV: 1, games: 2}));

module.exports = Order;