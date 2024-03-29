// //Event loop

// console.log("start");

// setTimeout(function cb(){
//     console.log("hello");
// }, 5000);
// console.log('end');


// //Addeventlistner with event loop
// console.log("Hi");

// document.getElementById('jk').addEventListener("click",function cv(){
//     console.log("Helo welcome");
// });
// console.log("BYee");


// //event loop
// console.log("Let's Begin");

// setTimeout(function gh(){
//     console.log("Hello Buddy Welcome");
// },6000);
// //fetch("#").then(function cbf(){
//   //  console.log("Wait for exection");
// //});
// console.log("End");


// //curring 
// function calc(a){
//     return function(b){
//         return function(c){
//             return a*b+c;
//         }
//     }
// }
// console.log(calc(2)(4)(5))

// //
// const ari=function(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }
// console.log(ari(1)(2)(3));

// //immediately invoked function Expression
// (function dis(){
//     let av=10;
//     let bv=4;
// let res=av+bv;
// (function dis1(){
//     console.log(res);  
// })()
// })();

// //
// let df=function(n1,n2){
// let res= n1+n2
// console.log(res);
// }
// df(2,3)

// //function hosting 

// var x;
// x=5;
// function cf(){
//     console.log(x)
// }
// cf()



// //hosting 
// console.log(gk(3,4))

// function gk(we,ew){
//     return we+ew;
// }

// console.log(counter); // 👉 undefined
// var counter = 1;
// //
// var z;
// z=100;
// var z=100;
// z+200;



// //validation time
//self-invoking function
// (function fun(){
//     console.log("hello");
// })();

//currying function
function cur(a) {
    return function (b) {
        return function (c) {
            return a * b + c;
        }
    }
}
console.log(cur(2)(3)(5));

//function hoisting 

fun1()
function fun1() {
    console.log("Welcome");
}

var a = 100;
console.log(a);

//arrow function
let arr = (a, b) => {
    return a + b;
}
console.log(arr(2, 5));

//call back function 
function fun2() {
    console.log("hi buddy");
}
function fun3(a, b) {
    let res = a + b;
    return res
}
fun3(2, 3, fun2);


//
let f1 = function () {
    console.log("Byee");
}
let f2 = function (sim) {
    console.log("Welcome");
    sim();
}
console.log(f2(f1));

//
function apl() {
    console.log("Hello BUddy");
}
function apj(xc, cb) {
    let result = xc + cb;
    console.log(result);
}
let km = apj(34, 5);
apl(km);

//
setTimeout(function () {
    console.log("Hi");
}, 5000)
//
// setInterval(function(){
//     console.log("Bhai");
// },5000)

//recursive
function recursivefun(x) {
    if (x === 0) {
        setTimeout(function () { console.log("Code is executed"); }, 5000)
        return
    }
    console.log("It's processing");
    recursivefun(x - 1)
}
recursivefun(4)

//setinterval
var i = 6;
var int = setInterval(function () {
    console.log("Hello Welcome");
    i++;
    if (i > 5) {
        clearInterval(int);
    }
}, 4000);