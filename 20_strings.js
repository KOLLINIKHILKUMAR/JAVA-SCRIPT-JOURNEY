var name = `Nikhil`
var fullName = `${name} Kolli`;

console.log(fullName);
console.log(fullName.charAt(0));
console.log(fullName.endsWith("?"));
console.log(fullName.includes("Kolli"));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName.split(" "));
console.log(fullName.split("K"));
console.log(fullName.length);
console.log(fullName[0]);
console.log(fullName.indexOf("K"));
console.log(fullName.indexOf("k"));
console.log(fullName.lastIndexOf("l"));
console.log(fullName.lastIndexOf("l", 10));
// give me new functions
console.log(fullName.search("K"));
console.log(fullName.slice(1, 4));
console.log(fullName.slice(-4));
console.log(fullName.slice(1));
console.log(fullName.slice(-4, -1));
console.log(fullName.substring(1, 4));
console.log(fullName.replace("Nikhil", "Nik"));
console.log(fullName.replace("l", "L"));
// give me new functions
console.log(fullName.charAt(fullName.length - 1));
console.log(fullName[fullName.length - 1]);
console.log(fullName.charCodeAt(0));
// give me new functions
console.log(fullName.concat(" ", "Kolli"));
// give me new functions
console.log(fullName.trim());
console.log(fullName.trim().length);
console.log(fullName.trim().charAt(0));
console.log(fullName.trim().charAt(fullName.trim().length - 1));
console.log(fullName.trim().charAt(fullName.trim().length - 1).toUpperCase());
console.log(fullName.trim().charAt(fullName.trim().length - 1).toUpperCase().concat(" ", fullName.trim().charAt(0).toUpperCase()));
