const person = {
  firstName: "Starnoh",
  lastName: "John",
  greet: function () {
    return `Hello my name is ${this.firstName} ${this.lastName}`;
  },
};

const teacher = {
  teach: function (subject) {
    return `I am teaching ${subject}`;
  },
};

teacher.__proto__ = person;
console.log(teacher.firstName)
console.log(teacher.greet())
