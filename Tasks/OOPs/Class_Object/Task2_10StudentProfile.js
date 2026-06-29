/**
 * Problem Statement :
 * You need to create a class with the static and non-static methods 
 * as well as variables. It will be a simple class of our 
 * Playwright 2x batch. You will be also printing out the students.
 * Create 10 objects of students and print them. 
 * Also create a print method.
 */
class Student {
    static course_name = "Playwright_AI_Blueprint";
    static mentor_name = "Pramod Dutta";

    role = "Student";

    constructor(student_name, phNo, batch) {
        this.student_name = student_name;
        this.phNo = phNo;
        this.batch = batch;
    }
    printDetails() {
        console.log('Student Name : ', this.student_name, ' | Phone Number : ', this.phNo, ' | Batch : ', this.batch);
    }

    static attendance(status) {
        console.log("Status : ", status);
    }
}

const student1 = new Student("Ani", 7432526758, "Playwright1X");
student1.printDetails();
Student.attendance("Present");
const student2 = new Student("Bhavini", 9863522167, "Playwright2X");
student2.printDetails();
Student.attendance("Present");
const student3 = new Student("Swapna", 8703255663, "Playwright2X");
student3.printDetails();
Student.attendance("Present");
const student4 = new Student("Tejal", 9367481043, "Playwright3X");
student4.printDetails();
Student.attendance("Absent");
const student5 = new Student("Neha", 7294662729, "Playwright2X");
student5.printDetails();
Student.attendance("Absent");
const student6 = new Student("Satyam", 9361863750, "Playwright1X");
student6.printDetails();
Student.attendance("Present");
const student7 = new Student("Padma", 9636189451, "Playwright3X");
student7.printDetails();
Student.attendance("Absent");
const student8 = new Student("Priya", 9464646326, "Playwright2X");
student8.printDetails();
Student.attendance("Absent");
const student9 = new Student("Shreya", 9375106038, "Playwright1X");
student9.printDetails();
Student.attendance("Present");
const student10 = new Student("Khyathi", 9375610904, "Playwright3X");
student10.printDetails();
Student.attendance("Absent");
console.log('-------------------------');
console.log('End Of Student Statements');
console.log('-------------------------');
