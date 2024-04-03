 let summa=function (){
    name1="Praveen"
    function pnt(){
        return "My name is" + name1;

    }
    console.log(pnt());
}
const test=new summa();

//object literal
let obj={
    name:"vijay",
    Age:23,
    getfunction:function(){
  return (`My name is${obj.name} and my age is ${obj.Age}`)
    },
    obj2:{
        mobile_no:123457,
        land_line_no:567892
    }
} 
console.log(obj.getfunction());
console.log(obj.obj2.mobile_no);


//this keyword in method
const channel={
    title:"4Ever",
    Since:1997,
    greet(){
        console.log(`hello everone,My Store name is ${this.title} It since${this.Since}in Richy street`);
    }
}
channel.greet();

//this using in function

function reet(){
    console.log("Hello Everyone Am"+ this.name);
}
const pers={
    name:"Praveen",
    Age:23,
    say1:reet
}
const pers1={
    name:"Vijay"
}

reet();
pers.say1()
reet.call(pers1)

// class
class Animal{
    constructor(name3,age1){
        this.name3=name3;
        this.age1=age1;
    }
    getInfo(){
        return `the Animal name is ${this.name3} and the age is ${this.age1}`
    }
}
 const firstAnimal =new Animal("Lion",7)
 console.log(firstAnimal);
 console.log(firstAnimal.getInfo());

 //objects literals

 let pers2={
    fname:"vijay",
    Age:23,
    geting:function obj1(){
        return (`Hello am ${this.fname} My age is ${this.Age}`)
    }
 }
 console.log(pers2.geting());

 //object constructor
 function pers3(Fname,Lname){
    this.Fname=Fname;
    this.Lname=Lname;
 }
 let person1=new pers3("praveen","Vijay")
 let person2=new pers3("Santhosh","kumar")

 console.log(person1.Fname);
 console.log(`${person2.Fname} ${person2.Lname}`);

 //class 
 class Vechicle{
    constructor(Name,Maker,Engine){
        this.Name=Name;
        this.Maker=Maker;
        this.Engine=Engine;
        }
        getdetails(){
            return (`The name of the bike is ${this.Name}`)   
    }
 }
 //Making obj with help of consctructor
 let bike1=new Vechicle("Pulsar","Bajaj","150cc")
 let bike2=new Vechicle("Ns200","Bajaj","160cc")
 let bike3=new Vechicle("RS 200","Bajaj","200cc")
 console.log(bike1.Engine);
 console.log(bike3.getdetails());

 //Encapsulation
 class Vech{
    constructor(NameF,Id){
        this.NameF=NameF;
        this.Id=Id;
    }
    add_Address(add){
        this.add=add;
    }
    getdetail(){
        console.log(`My name is ${this.NameF} My Address is ${this.add}`)
    }
 }
 
 let person4=new Vech("Mukesh",1245);
 person4.add_Address('Chennai');
 person4.getdetail();