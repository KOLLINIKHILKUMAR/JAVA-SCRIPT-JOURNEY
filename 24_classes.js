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
}




module.exports = user; // exporting the class
