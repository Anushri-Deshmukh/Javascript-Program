class Person{
constructor(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
}
getFirstName(){
    return this.firstName;
}
gretLastName(){
    return this.lastName;
}
greet(){
    let msg=`Welcome Mr: ${this.getFirstName()} ${this.getLastName()}`
    console.log(msg);
}
}
class emp extends Person{
constructor(firstName,lastName,age,designation){
    super(firstName,lastName);
    this.age=age;
    this.designation=designation;
}
getAge(){
    return this.age;
}
getDesignation(){
    return this.designation;
}
grret(){
    let msg=`Hello Mr: ${this.getFirstName()} ${this.getLastName()}
              Age:${this.getAge()}
              Designation:${this.getDesignation}`;
              console.log(msg);
}
}
let emp=new Emp('john','doe','40','sd');
emp.greet();

class Customer{}