var User = function (firstName, courseCount) 
{
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
      console.log(`Course count is: ${this.courseCount}`);
    };
};
  
User.prototype.getFirstname = function () { console.log(`Your firstname is : ${this.firstName}`);};

var Nikki = new User("Nikki", 2);
console.log(Nikki)
Nikki.getCourseCount();

if (Nikki.hasOwnProperty("firstName")) {Nikki.getFirstname();}

console.log(Nikki);

var Kolli = new User("Kolli", 1);
Kolli.getCourseCount();
Kolli.getFirstname();
console.log(Kolli);
   