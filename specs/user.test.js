var User = require('../users');

var users = new User();


describe("User tests", function () {

  test("Expect createUser('John', john@gmail.com, 'johnpass') to create user with the supplied details", function () {
    var received = users.createUser('John', 'john@gmail.com', 'johnpass');
    expect(received).toEqual(expect.objectContaining({ name: 'JOHN', email: 'john@gmail.com', password: 'johnpass' }))
  });

  test("Expect getUserById(2) to get the user with id 2", function() {
    var create_user = users.createUser('bashy', 'bashy@gmail.com', 'bahypass');
    var received = users.getUserById(2);
    expect(received).toHaveProperty('id', 2);
  });

  test("Expect getUserById(1000) to return false", function() {
    var received = users.getUserById(1000);
    expect(received).toBeFalsy();
  });


})
