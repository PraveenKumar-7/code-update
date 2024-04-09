// let x=3
// console.log(x);

// //immutable objects
// let x1="Praveen"
// let x2=x1;
// x2="vijay"

// console.log(x1);
// console.log(x2);
// //object literals
// const obj1={
//     namef:"maddy",
//     age:23
// };
// console.log(obj1.namef);

// //object methods
// const obj2={
//     nameF:"vinay",
//     age:43,
//     fun:function(){
//         return (`my name is ${this.nameF} and my age is ${this.age}`);
//     }
// }
// console.log(obj2.fun());

//object with new keyword
// const obj3=new Object();
// obj3.fname="vicky";
// obj3.age=25;
// console.log(`my name is ${obj3.fname} nad my age is ${obj3.age}`);


//object mutable
// const obj4={
//     Fname:"Guru",
//     age:24
// }
// let obj5=obj4;
// obj4.age=23;
// console.log(obj5.Fname,obj4.age);

//nested arrays and objects 
// const nestjs={
// Faname:"Dinesh",
// Lname:"Kumar",
// cars:[{carName:"Hyundai",Model:["V-1.20","J-2.4"]},
// {carName:"BMW",Model:["V-1.20","k-2.4"]},
// {carName:"BENZ",Model:["i-1.20","l-2.4"]}
// ]}
// let xp=""
// for(let i in nestjs.cars){
//     xp=xp+nestjs.cars[i].carName + " ";
//     for(let j in nestjs.cars[i].Model){
//         xp=xp+nestjs.cars[i].Model[j]+ ",";
//     }
// }
// console.log(xp);

//call method
// const obj6={
// name1:"Praveen",
// name2:"Kumar"
// }
// const obj8={
//     name1:"Vinay",
//     name2:"Kumar"
//     }
// const obj7={
//     f1:function(age,Year){
//         console.log(`My name is ${this.name1} ${this.name2} and my age is `,age,"Birth Year",Year);
//     }
// }
// let bnm=obj7.f1.bind(obj6,24,2000)
// bnm();
//obj7.f1.call(obj8)

// const obj9={
//    obj10:function(){ 
//     name9:"vijay";
//     Age:23
// }
// }
// console.log(obj9.obj10());

// //
// let student=35;

// if(student<=100 && student>=91){
//     console.log("outsanding");
// }
// else if(student<=90 && student>=81){
//     console.log("Excelent");
// }
// else if(student<=80 && student>=71){
//     console.log("very Good");
// }
// else if(student<=70 && student>=61){
//     console.log("Good");
// }
// else if(student<=60 && student>=41){
//     console.log("Average");
// }
// else{
//     console.log("Fail");
// }

//call apply bind
const obj1={
    Namef:"vijay",
    Age:30
}
const obj2={
    Namef:"Gokul",
    Age:25
}
let fun={
f1:function(){
    console.log(`My name is${this.Namef} and my age is${this.Age}`);
}
}
let mfun=fun.f1.apply(obj1)
mfun