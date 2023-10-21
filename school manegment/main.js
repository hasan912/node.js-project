class School {
    addStudent(stdobj) {
        this.students.push(stdobj);
    }
    addteacher(teachobj) {
        this.teacher.push(teachobj);
    }
    constructor(name) {
        this.students = [];
        this.teacher = [];
        this.name = name;
    }
}
class Student {
    push(stdobj) {
        throw new Error("Method not implemented.");
    }
    constructor(name, age, schoolName) {
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
}
class Teacher extends Student {
}
let school1 = new School("Alpha");
let school2 = new School("Nooby");
let s1 = new Student("Bilal", 40, school1.name);
let s2 = new Student("sufiyan", 30, school2.name);
let s3 = new Student("hasan", 20, school2.name);
let t1 = new Teacher("Bilal", 40, school1.name);
let t2 = new Teacher("sufiyan", 30, school2.name);
let t3 = new Teacher("hasan", 20, school2.name);
school1.addStudent(s1);
school2.addStudent(s2);
school2.addStudent(s3);
school1.addteacher(t1);
school2.addteacher(t2);
school2.addteacher(t3);
console.log(school1);
console.log(school2);
export {};
