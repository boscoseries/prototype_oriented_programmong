var all_users = require('./database');

function User() {
  this.id = 0
};

User.prototype.newId = function () {
  return this.id += 1;
};

User.prototype.createUser = function (name, email, password) {
  var name = name.toUpperCase();
  newUser = { name, email, password, id: user.newId() };
  all_users.push(newUser)
  return newUser;
};

User.prototype.getUserById = function (id) {
  var userWithId = {};
  all_users.forEach(function (obj) {
    if (obj.id == id) userWithId = obj;
  });
  if (userWithId.id) {
    return userWithId;
  } else {
    return false
  };
};

User.prototype.getUserByName = function (name) {
  var name = name.toUpperCase();
  var usersWithName = [];
  all_users.forEach(function (obj) {
    if (obj.name == name) usersWithName.push(obj);
  });
  if (usersWithName.length) {
    return usersWithName;
  } else {
    return false
  };
};

User.prototype.updateUserDetails = function (id, new_name, new_password) {
  var new_name = new_name.toUpperCase();
  var updated_user = {};
  var isAUser = user.getUserById(id);
  if (!isAUser) {
    return 'user not found'
  } else {
    all_users.forEach(function (a_user) {
      if (a_user.id == id) {
        a_user.name = new_name;
        a_user.password = new_password;
        updated_user = a_user;
      };
    });
    return updated_user
  };
};


var user = new User();

//user.createUser('Bash', 'bash2@gmail.com', 'bashpass');
//user.createUser('Paul', 'paul2@gmail.com', 'paulpass');

//console.log(user.getAllUsers());



module.exports = User;