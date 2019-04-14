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



var user = new User();

//user.createUser('Bash', 'bash2@gmail.com', 'bashpass');
//user.createUser('Paul', 'paul2@gmail.com', 'paulpass');

//console.log(user.getAllUsers());



module.exports = User;