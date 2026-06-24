class Student {
    constructor(student_name, age, phNo) {
        this.student_name = student_name;
        this.age = age;
        this.phNo = phNo;
    }
    static course_name = "Playwright2X";
    static mentor_name = "Pramod Dutta";

    static display() {
        console.log("Hi, I'm a common function to all the objects");
    }
}

const student1 = new Student("Priya", 35, 1234567890);
const student2 = new Student("Rohit", 30, 9876543210);

console.log(student1.student_name);
console.log(student2.phNo);

console.log(Student.course_name);
console.log(Student.mentor_name);