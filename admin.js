var all_users = require('./database');
var User = require('./users');



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



//admin.createUser('Bash', 'bash2@gmail.com', 'bashpass');
//admin.createUser('Paul', 'paul2@gmail.com', 'paulpass');


//console.log(user.getAllUsers());



module.exports = Admin;