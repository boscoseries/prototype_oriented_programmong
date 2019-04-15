var users = require('./users');
var database = require('./database');

var all_orders = database.orders_table;

function Order() {

  this.id = 0;
};

Order.prototype.newId = function () {
  return this.id += 1;
};

Order.prototype.dateOfOrder = function() {
  var newDate = new Date();
  return newDate.toDateString()
}

Order.prototype.timeOfOrder = function() {
  var newDate = new Date();
  return newDate.toLocaleTimeString()
}

Order.prototype.createOrder = function(user_id, products) {
  newProducts = { user_id, time_of_order: order.timeOfOrder(), date_of_order: order.dateOfOrder(), order_id: order.newId(), products: products };
  all_orders.push(newProducts)
  return newProducts;
}


var order = new Order();


//console.log(order.timeOfOrder());
//console.log( order.createOrder(1, ['book', 'biro']) );

module.exports = order;