var User = require('../users');

var users = new User();


describe("User tests", function () {

  test("Expect createUser('John', john@gmail.com, 'johnpass') to create user with the supplied details", function () {
    var received = users.createUser('John', 'john@gmail.com', 'johnpass');
    expect(received).toEqual(expect.objectContaining({ name: 'JOHN', email: 'john@gmail.com', password: 'johnpass' }))
  });



})
