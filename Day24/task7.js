const user = {
  username: "sakthivel",

  login: function () {
    console.log(this.username + " logged in");
  },

  logout: function () {
    console.log(this.username + " logged out");
  }
};
user.login();
user.logout();