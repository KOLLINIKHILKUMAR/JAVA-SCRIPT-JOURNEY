var user = {
    firstName: "Nikhil",
    lastName: "Kumar",
    role: "Admin",
    loginCount: 32,
    facebookSignedIn: true,
  };
  
  console.log(user.firstName);
  console.log(user["lastName"]);
  
  console.log(user.loginCount);
  user.loginCount = 44;
  console.log(user.loginCount);
  console.table(user);



  var admin = {
    firstName: "Nikhil",
    lastName: "Kumar",
    role: "Admin",
    loginCount: 32,
    facebookSignedIn: true,
    courseList: [],
    buyCourse: function (courseName) {
      this.courseList.push(courseName);
    },
    getCourseCount: function () {
      return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },
  };
  
  var courseList = true;
  console.log(admin.firstName);
  console.log(admin.getCourseCount());
  admin.buyCourse("React JS course");
  admin.buyCourse("Angular course");
  console.log(admin.getCourseCount());