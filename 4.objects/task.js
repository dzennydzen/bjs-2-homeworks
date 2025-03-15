function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

let sasha = new Student("Александра", "женский", 28);
let val = new Student("Василиса", "женский", 19);
let mark = new Student("Марк", "Мужской", 22);


Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if ('marks' in this === false) {
    return 0;
  } else {
    for (let mark of marks) {
        this.marks.push(mark);
    }
  }
}

Student.prototype.getAverage = function () {
  if ('marks' in this === false || this.marks.length === 0) {
    return 0;
  } else {
    const sum = this.marks.reduce((acc, mark) => {
        acc += mark;
        return acc;
    },0)
    return sum / this.marks.length;
  }
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
