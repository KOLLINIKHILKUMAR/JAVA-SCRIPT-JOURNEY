// Normal Function
var isEven = (element) => 
{

  return element % 2 === 0;
};

console.log(isEven(2));

var result = [2, 3, 6, 8].every(isEven);
console.log(result);


// callback function
var result = [2, 3, 6, 8].every((e) => (e % 2 === 0));
console.log(result);

// fill function
var testArray = [2, 4, 6, 3, 1, 5, 9, 8];

console.log(testArray.fill("empty"));

// filter function
const myNumber = [23, 24, 25, 55, 66, 77, 87, 98];


console.log(myNumber.filter((num) => num > 55));
// 
// slice and splice
var users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];

console.log(users.slice(1));

users.splice(1, 3, "HI", "BYE");
console.log(users);