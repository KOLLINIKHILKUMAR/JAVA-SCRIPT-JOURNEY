class user{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    #courseList = []; // private variable
    getInfo(){
        return {name: this.name, email: this.email};
    }
    enrollCourse(name){
        this.#courseList.push(name);
    }
    getCourseList(){   
        return this.#courseList;
    }

    static login(){
        return "You are logged in";
    }
}


module.exports = user; // exporting the class


const nikki = new user('Nikki', 'nikki@nikki.com');

// console.log(nikki.getInfo());
nikki.enrollCourse('React Bootcamp');
nikki.enrollCourse('Angular Bootcamp');
// console.log(nikki.getCourseList());
// console.log(nikki.courseList); // undefined


class subadmin extends user{
    constructor(name, email){
        super(name, email);
    }
    getAdminInfo(){
        return "I am subadmin";
    }
    login(){
        return "Login for sub admin only";
    }
}


const tom = new subadmin('tom', 'tom@tom.com');

console.log(tom.getAdminInfo());
console.log(tom.login());
console.log(tom.getInfo());



