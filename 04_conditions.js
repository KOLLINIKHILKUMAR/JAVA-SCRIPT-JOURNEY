var temperature;
temperature = 49;
if (temperature < 20) 
{
  console.log("it's very cold outside");
}

if (temperature < 30) 
{
  console.log("It's moderate outside");
} else 
{
  console.log("It's really HOT outside");
}



// And operator
var isLoggedIn = true;
var isEmailVerified = false;
var cardInfo = true;

if (isLoggedIn && isEmailVerified && cardInfo) 
{
    console.log("Allow user to make a purchase");
} 
else 
{
    console.log("You are NOT allowed to do that");
}


// NOT operator
var email = true;
var facebook = false;
var google = true;

if (email || facebook || google) {
  console.log("Login Success");
}

// ternary operator
var authenticated = true;
authenticated ? console.log("SignOut Button") : console.log("LOGIN");


// switch case
var user = "admin";

switch (user) 
{
  case "admin":
    console.log("You get full access");
    break;
  case "subadmin":
    console.log("gets access to create/delete courses");
    break;
  case "testprep":
    console.log("gets access to create/delete tests");
    break;
  case "user":
    console.log("gets access to consume content");
    break;
  default:
    console.log("Trial user");
    break;
}



//falsy
// undefined
// null
// 0
// ''
// NaN

var user = "2";

if (2 === user) {
  console.log("Condition is true");
}

// console.log("2" + "2");