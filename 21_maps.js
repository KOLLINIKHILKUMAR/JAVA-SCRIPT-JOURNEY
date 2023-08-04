var myMap = new Map();

myMap.set(1, "one");
myMap.set(2, "two");
myMap.set(3, "three");
myMap.set(4, "four");

console.log(myMap);

for (let key of myMap.keys()) {
  console.log(`Key is ${key}`);
}

for (let value of myMap.values()) {
  console.log(`Value is ${value}`);
}

for (let [key, value] of myMap) {
  console.log(`Key is : ${key} and Value is ${value}`);
}

myMap.forEach((v, k) => console.log(`${v} and key is ${k}`));

myMap.delete(2);
console.log(myMap);
