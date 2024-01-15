// class User {
//   constructor(options) {
//     this.username = options.username;
//     this.lastName = options.lastName;
//     this.email = options.email;
//     this.password = options.password;
//   }
//   getProfile() {
//     console.log(
//       `${this.username}${this.lastName} ${this.email} ${this.password}`
//     );
//   }
//   updatePassword(newPassword, currentPassword) {
//     if (currentPassword === this.password) {
//       this.password = newPassword;
//     } else {
//       console.log("Can't change password.");
//     }
//   }
// }
// const sexyUser = new User({
//   username: "Su",
//   lastName: "jin",
//   eamil: "ksj19990823@naver.com",
//   password: "1234",
// });
// class Admin extends User {
//   constructor(superAdmin) {
//     this.superadmin = superAdmin;
//   }
//   deleteWebsite() {
//     console.log("Delete the whole website...");
//   }
// }
// const sexyAdmin = new Admin("Su", "jin", "ksj19990823@naver.com", "1234");
// sexyAdmin.deleteWebsite();
// console.log(sexyAdmin.email);

class User {
  constructor({ username, lastName, email, password }) {
    this.username = username;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
  getProfile() {
    console.log(
      `${this.username}${this.lastName} ${this.email} ${this.password}`
    );
  }
  updatePassword(newPassword, currentPassword) {
    if (currentPassword === this.password) {
      this.password = newPassword;
    } else {
      console.log("Can't change password.");
    }
  }
}
const sexyUser = new User({
  username: "Su",
  lastName: "jin",
  email: "ksj19990823@naver.com",
  password: "1234",
});
class Admin extends User {
  constructor({ username, lastName, email, password, superAdmin, isActive }) {
    super({ username, lastName, email, password });
    this.superAdmin = superAdmin;
    this.isActive = isActive;
  }
  deleteWebsite() {
    console.log("Delete the whole website...");
  }
}

const admin = new Admin({
  username: "Su",
  lastName: "jin",
  email: "ksj19990823@naver.com",
  password: "1234",
  superAdmin: true,
  isActive: true,
});
