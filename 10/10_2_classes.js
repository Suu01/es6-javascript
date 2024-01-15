class User {
  constructor(name, lastName, email, password) {
    this.username = name;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.something = "I love Korea";
  }
  sayHello = () => {
    console.log(`Hello, my name is ${this.username}`);
  };
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
const sexyUser = new User("Su", "jin", "ksj19990823@naver.com", "1234");

// sexyUser.getProfile();
// console.log(sexyUser.password);
// // sexyUser.updatePassword("hello", "1234");
// sexyUser.updatePassword("hello", "11111");
// console.log(sexyUser.password);

class Admin extends User {
  //   constructor(superAdmin) {
  //     this.superadmin = superAdmin;
  //   } // error
  deleteWebsite() {
    console.log("Delete the whole website...");
  }
}

const sexyAdmin = new Admin("Su", "jin", "ksj19990823@naver.com", "1234");
sexyAdmin.deleteWebsite();
console.log(sexyAdmin.email);
