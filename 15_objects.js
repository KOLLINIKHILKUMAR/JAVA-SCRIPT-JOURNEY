var User = function (firstName, courseCount) 
{
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
      console.log(`Course count is: ${this.courseCount}`);
    };
};
  
// prototype is used to add a function to the class
User.prototype.getFirstname = function () { console.log(`Your firstname is : ${this.firstName}`);};
var Nikki = new User("Nikki", 2);
console.log(Nikki)
Nikki.getCourseCount();


// if we want to check if a property exists in an object
if (Nikki.hasOwnProperty("firstName")) {Nikki.getFirstname();}
console.log(Nikki);


// if we want to check if a property exists in an object
var Kolli = new User("Kolli", 1);
Kolli.getCourseCount();
Kolli.getFirstname();
console.log(Kolli);


// objects.create in javascript
var Name = {
  name: "",
  getUserName: function () {
    console.log(`User name is : ${this.name}`);
  },
};

var Nikki = Object.create(Name);
console.log(Nikki);

Nikki.name = "KOLLI NIKHIL KUMAR";
Nikki.getUserName();

// one more way of creating objects
var Kolli = Object.create(Name, { name: { value: "kolli kumar" },courseCount: { value: 3 }, });

Kolli.getUserName();
   