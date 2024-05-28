class Person{
    firstName;
    lastName;
    age;

    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    print(){
        console.log(this.firstName)
    }
}

let shem = new Person("Shem" , "Morio" , 7)
shem.print()
console.log(shem.age)