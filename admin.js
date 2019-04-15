var database = require('./database');
var User = require('./users');
var Order = require('./orders')

var all_users = database.users_table;
var all_orders = database.orders_table;


// USERS

function Admin() {
  User.call(this);
}

// set Admin user to inherit the User properties and prototypes
Admin.prototype = Object.create(User.prototype);

// set the Admin constructor to point to the User constructor
Admin.prototype.constructor = Admin;

Admin.prototype.getAllUsers = function () {
  return all_users;
};

Admin.prototype.deleteUserById = function (id) {
  var isAUser = admin.getUserById(id);
  if (isAUser) {
    var index = all_users.indexOf(isAUser);
    all_users.splice(index, 1);
    return 'user deleted';
  }
  else {
    return 'user not found';
  };
};

Admin.prototype.deleteAllUsers = function () {
  all_users = [];
  return 'All users deleted'
};

//ORDERS

Admin.prototype.readAllOrders = function () {
  return all_orders
}

Admin.prototype.readOrderById = function (order_id) {
  var orderWithId = {};
  all_orders.forEach(function (order) {
    if (order.order_id == order_id) orderWithId = order;
  });
  if (orderWithId.order_id) {
    return orderWithId;
  } else {
    return false
  };
};


Admin.prototype.updateOrderDetails = function (user_id, order_id, new_products) {
  var isAUser = admin.getUserById(user_id);
  var isValidOrder = admin.readOrderById(order_id);

  if (isAUser && isValidOrder) {
    isValidOrder.products = new_products;
    return isValidOrder
  } else {
    false;
  };
};

Admin.prototype.deleteOrderById = function(user_id, order_id) {
  var isAUser = admin.getUserById(user_id);
  var isValidOrder = admin.readOrderById(order_id);

  if (isAUser && isValidOrder) {
    var index = all_orders.indexOf(isValidOrder);
    all_orders.splice(index, 1);
    return 'order deleted';
  }
  else {
    return 'order not found';
  }
}


var admin = new Admin();
//var order = new Order();



admin.createUser('Emma', 'emma@gmail.com', 'emmapass');
//admin.createUser('Paul', 'paul2@gmail.com', 'paulpass');

//admin.deleteUserById(2)


// admin.readOrderById(1);
console.log(admin.updateOrderDetails(100, 1, { book: 10, red_label: 2 }))



module.exports = Admin;