const person = {
  name: "Bruce",
  age: 25,
  occupation: "Developer",
  greetings: function () {
    console.log(`Hello , my name is ${this.name}`);
  },
};

delete person["occupation"];

person.greetings()
console.log(person);
console.log(person["age"]);
