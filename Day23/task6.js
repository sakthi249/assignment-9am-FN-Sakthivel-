class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  login() {
    return `${this.name} has logged in`;
  }
}
let user1 = new User("Sakthivel", "svpv@gmail.com");
console.log(user1.login());