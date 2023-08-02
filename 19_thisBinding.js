const nikhil = {
  firstName: "NIKHIL KUMAR",
  lastName: "KOLLI",
  role: "Admin",
  courseCount: 3,
  getInfo: function () {
    console.log(`
        First name is ${this.firstName}
        Last name is ${this.lastName}
        His role is ${this.role}
        and he is studying ${this.courseCount} courses
        `);
  },
};

const kolli = {
  firstName: "JOSH",
  lastName: "DJ",
  role: "Sub-Admin",
  courseCount: 4,
};

nikhil.getInfo();
// won't work
// kolli.getInfo();

// borrowing the method from nikhil
var kolliInfo =  nikhil.getInfo.bind(kolli);
kolliInfo();

nikhil.getInfo.call(kolli);