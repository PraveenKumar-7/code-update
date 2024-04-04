//  let summa=function (){
//     name1="Praveen"
//     function pnt(){
//         return "My name is" + name1;

//     }
//     console.log(pnt());
// }
// const test=new summa();

// //object literal
// let obj={
//     name:"vijay",
//     Age:23,
//     getfunction:function(){
//   return (`My name is${obj.name} and my age is ${obj.Age}`)
//     },
//     obj2:{
//         mobile_no:123457,
//         land_line_no:567892
//     }
// } 
// console.log(obj.getfunction());
// console.log(obj.obj2.mobile_no);


// //this keyword in method
// const channel={
//     title:"4Ever",
//     Since:1997,
//     greet(){
//         console.log(`hello everone,My Store name is ${this.title} It since${this.Since}in Richy street`);
//     }
// }
// channel.greet();

// //this using in function

// function reet(){
//     console.log("Hello Everyone Am"+ this.name);
// }
// const pers={
//     name:"Praveen",
//     Age:23,
//     say1:reet
// }
// const pers1={
//     name:"Vijay"
// }

// reet();
// pers.say1()
// reet.call(pers1)

// // class
// class Animal{
//     constructor(name3,age1){
//         this.name3=name3;
//         this.age1=age1;
//     }
//     getInfo(){
//         return `the Animal name is ${this.name3} and the age is ${this.age1}`
//     }
// }
//  const firstAnimal =new Animal("Lion",7)
//  console.log(firstAnimal);
//  console.log(firstAnimal.getInfo());

//  //objects literals

//  let pers2={
//     fname:"vijay",
//     Age:23,
//     geting:function obj1(){
//         return (`Hello am ${this.fname} My age is ${this.Age}`)
//     }
//  }
//  console.log(pers2.geting());

//  //object constructor
//  function pers3(Fname,Lname){
//     this.Fname=Fname;
//     this.Lname=Lname;
//  }
//  let person1=new pers3("praveen","Vijay")
//  let person2=new pers3("Santhosh","kumar")

//  console.log(person1.Fname);
//  console.log(`${person2.Fname} ${person2.Lname}`);

//  //class 
//  class Vechicle{
//     constructor(Name,Maker,Engine){
//         this.Name=Name;
//         this.Maker=Maker;
//         this.Engine=Engine;
//         }
//         getdetails(){
//             return (`The name of the bike is ${this.Name}`)   
//     }
//  }
//  //Making obj with help of consctructor
//  let bike1=new Vechicle("Pulsar","Bajaj","150cc")
//  let bike2=new Vechicle("Ns200","Bajaj","160cc")
//  let bike3=new Vechicle("RS 200","Bajaj","200cc")
//  console.log(bike1.Engine);
//  console.log(bike3.getdetails());

//  //Encapsulation
//  class Vech{
//     constructor(NameF,Id){
//         this.NameF=NameF;
//         this.Id=Id;
//     }
//     add_Address(add){
//         this.add=add;
//     }
//     getdetail(){
//         console.log(`My name is ${this.NameF} My Address is ${this.add}`)
//     }
//  }
 
//  let person4=new Vech("Mukesh",1245);
//  person4.add_Address('Chennai');
//  person4.getdetail();

//class
class Employee{

    //Inizaling an object 
    constructor(Id,Name){
        this.Id=Id;
        this.Name=Name;
    }
    //declaring Method
    getdetails(){
        return (`Hello Am ${this.Name} and My EMP-Id is ${this.Id}`)
    }  
}
//Passing an object to variable
let e1=new Employee(101,"Mukesh");
let e2=new Employee(102,"Sandy")
let e3=new Employee(103,"Viji")

console.log(e1.getdetails());
console.log(e2.Name);
console.log(e3.Id);

//class expression
var cls= class{
  constructor(Id,Name){
    this.Id=Id;
    this.Name=Name;
  }
  getdetail1(){
    return (`Hello AM ${this.Name} And My Emp-Id is ${this.Id}`)
  }
}

//passing object to variable
let e4=new cls(104,"Gopi")
let e5=new cls(105,"Ajith")
console.log(e4.getdetail1());

//object literals 
var obj={
  empid:101,empName:"Ben"
}
console.log(obj.empName);

//object constructor 
function car(Model,Maker,Color){
this.Color=Color;
this.Maker=Maker;
this.Model=Model

}
//passing a object to variable 
let car1=new car("Rc400","BMW","RED")
let car2=new car("Rc500","Benz","White")

console.log(car1.Color );

//Access modifier
//public
class Exp{
  constructor(Name4){
this.Name4=Name4;
  }
  itro(){
    console.log(`Hello Am ${this.Name4}`)
  }
}
const em=new Exp("Dhoni")
console.log(em.Name4);
em.itro();

//private 

class Person {
	#name; // Private member 

	constructor(name) { 
		this.#name = name; 
	}

	#sayHello() { 
		console.log(`Hello, my name is ${this.#name}.`); 
	} 

	introduce() { 
		// Accessing a private method 
		this.#sayHello(); 
console.log(this.#name); 

	} 
  
} 
const person = new Person('Bob'); 
// Accessing a public method that 
// accesses a private method 
person.introduce(); 

// Error: Private member is not accessible 

//Encapsulation

class Student{
  #name5;
  #marks;
constructor(){
  this.#name5;
  this.#marks
}
getName(){
  return this.name5;
}
setName(name5){
this.name5=name5;
}
getMark(){
  return this.marks;
}
setMark(marks){
  if(marks<0 || marks>100){
    alert("invalid Marks")
  }
  else{
  this.marks=marks;
  }
}
}
var std=new Student();
std.setName("Vijay");
std.setMark(90);
console.log(std.getName()+" "+std.getMark());

//inheritance 
class Animal{
  
}
function clso(){
  var ds="praveen 12"
  function clso1(){
    console.log(ds);
  }clso1();
}clso();
