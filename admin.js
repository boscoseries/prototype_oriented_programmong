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
  return all_orders;
}

Admin.prototype.readOrderById = function (user_id, order_id) {
  var orderWithId = {};
  var isAUser = admin.getUserById(user_id);

  all_orders.forEach(function (order) {
    if (isAUser && isAUser.id == order.user_id && order.order_id == order_id) {
      orderWithId = order;
    }
  });
  if (orderWithId.order_id) {
    return orderWithId;
  } else {
    return false
  };
};


Admin.prototype.updateOrderDetails = function (user_id, order_id, new_products) {
  var updatedOrder = {};
  var isAUser = admin.getUserById(user_id);

  all_orders.forEach(function (order) {
    if (isAUser && isAUser.id == order.user_id && order.order_id == order_id) {
      order.products = new_products;
      updatedOrder = order;
    }
  });
  if (updatedOrder.order_id) {
    return updatedOrder;
  } else {
    return false
  };

}

Admin.prototype.deleteOrderById = function (user_id, order_id) {

  var deletedOrder;
  var isAUser = admin.getUserById(user_id);

  all_orders.forEach(function (order) {
    if (isAUser && isAUser.id == order.user_id && order.order_id == order_id) {
      var index = all_orders.indexOf(order);
      deletedOrder = all_orders.splice(index, 1);
      deletedOrder = 'order deleted';
    }
  });
  if (deletedOrder == 'order deleted') {
     return deletedOrder;
  } else {
    return false
  };
};

Admin.prototype.deleteAllOrders = function () {
  all_orders = [];
  return 'All orders deleted'
}


var admin = new Admin();


console.log(admin.getAllUsers());
console.log(admin.deleteUserById(3));
console.log(admin.getAllUsers());
//console.log(admin.deleteAllUsers());
console.log(admin.getAllUsers());
console.log(admin.readAllOrders());
console.log(admin.readOrderById(1, 2));
console.log(admin.updateOrderDetails(1, 2, { book: 10, red_label: 2 }));
console.log(admin.readAllOrders());
console.log(admin.deleteOrderById(1, 2));
console.log(admin.readOrderById(1, 2));
console.log(admin.readAllOrders());
//console.log(admin.deleteAllOrders());
console.log(admin.readAllOrders());



module.exports = Admin;