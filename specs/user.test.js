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

  test("Expect getUserByName('bashy') to get the user with name bashy", function() {
    var received = users.getUserByName('bashy');
    expect(received).not.toHaveLength(0);
  });

  test("Expect getUserByName('invalidName') to get the user with name bashy", function() {
    var received = users.getUserByName('invalidName');
    expect(received).toBeFalsy();
  });

  test("Expect updateUserDetails(1, 'newpaul', 'paulnewpass' ) to update details of user with id=1", function() {
    var received = users.updateUserDetails(1, 'newpaul', 'paulnewpass' );
    var user_id_1 = users.getUserById(1);
    expect(received).toEqual(expect.objectContaining({ id: 1, name: 'NEWPAUL', password: 'paulnewpass' }));
    expect(user_id_1).toHaveProperty('password', 'paulnewpass');
  });

  test("Expect updateUserDetails(1000, 'newpaul', 'paulnewpass' ) to return 'user not found'", function() {
    var received = users.updateUserDetails(1000, 'newpaul', 'paulnewpass' );
    expect(received).toContain('user not found');
  });


})
