var Admin = require('../admin');
var admin = new Admin();

describe("Admin user tests", function () {

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

  test("Expect deleteAllUsers() to empty the users database", function () {
    var deleted = admin.deleteAllUsers();
    var all_users = admin.getAllUsers();
    expect(all_users).toEqual(expect.arrayContaining([]));
  });

})