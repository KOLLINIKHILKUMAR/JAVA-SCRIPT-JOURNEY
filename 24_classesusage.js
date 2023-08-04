// import user from './24_classes.js'; // importing the class

// Path: 24_classesusage.js
const user = require('./24_classes.js');

const nikhil = new user('Nikhil', 'nikhilkumarkolli@gmail.com');

console.log(nikhil.getInfo());
nikhil.enrollCourse('React Bootcamp');
nikhil.enrollCourse('Angular Bootcamp');

console.log(nikhil.getCourseList());

let courses = nikhil.getCourseList();

courses.forEach((c) => console.log(c));