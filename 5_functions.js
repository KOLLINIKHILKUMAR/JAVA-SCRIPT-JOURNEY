function sayHello(name) 
{
    console.log("Hello there, Nikhil");
    console.log(`Hello there, ${name}. How are you?`);
}
  
  sayHello("Nikhil");
  
function namstey() 
{
    return "Hello in India";
}
  
var greetings = namstey();
  
console.log(greetings);
console.log(namstey());


var getUserRole = function (name, role) 
{
    switch (role) 
    {
      case "admin":
        return `${name} is admin with all access`;
      case "subadmin":
        return `${name} is sub-admin with access to create and delete courses`;
      case "testprep":
        return `${name} is a test prep with access to create and delete tests`;
      case "user":
        return `${name} is a user to consume content`;
  
      default:
        return `${name} is a trial user`;
    }
};
  
console.log(getUserRole("nikhil", "testprep"));

var getRole = getUserRole("sammy", "user");

console.log(getRole);

