var database = require('./database');
var User = require('./users');

var all_users = database.users_table;



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


var admin = new Admin();



admin.createUser('Emma', 'emma@gmail.com', 'emmapass');
//admin.createUser('Paul', 'paul2@gmail.com', 'paulpass');

//admin.deleteUserById(2)


//console.log(user.getAllUsers());



module.exports = Admin;