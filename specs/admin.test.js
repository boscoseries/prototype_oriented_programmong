var Admin = require('../admin');
var admin = new Admin();

describe("Admin user tests", function () {

  test("Expect getAllUsers() to return an array of all users", function () {
    var created_user = admin.createUser('Bash', 'bash@gmail.com', 'bashpass');
    expect(admin.getAllUsers()).not.toHaveLength(0);
    expect(admin.getAllUsers()).toContainEqual(created_user);
  });

  test("Expect deleteUserById(2) to delete the user with Id = 2", function () {
    var new_user= admin.createUser('new Bash', 'newbash@gmail.com', 'newbashpass');
    var received = admin.deleteUserById(1);
    var userId_1 = admin.getUserById(1);
    expect(received).toContain('user deleted');
    expect(userId_1).toBeFalsy();
  });

  test("Expect deleteUserById(2000) to return 'user not found'", function () {
    var delete_user = admin.deleteUserById(2000);
    expect(delete_user).toContain('user not found');
  });

})