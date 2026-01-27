// Step 1: Create Student class
class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  getInfo() {
    return `${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

class StudentManagement {
  constructor() {
    this.students = [];
  }

  addStudent(student) {
    this.students.push(student);
  }

  removeStudent(name) {
    this.students = this.students.filter((s) => s.name !== name);
  }

  showAllStudents() {
    for (let s of this.students) {
      console.log(s.getInfo());
    }
  }
}

let system = new StudentManagement();

let s1 = new Student("Sakthivel", 21, "A");
let s2 = new Student("Fayaz", 20, "B");
let s3 = new Student("Ganesh", 22, "A+");

system.addStudent(s1);
system.addStudent(s2);
system.addStudent(s3);

console.log("All students:");
system.showAllStudents();

console.log("Removing Fayaz...");
system.removeStudent("Ram");

console.log("After removal:");
system.showAllStudents();