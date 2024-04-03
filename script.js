// //ternary operator

// const voter = 21;
// const result = voter >= 18 ? "Eligible" : "Not Eligible"
// console.log(result)

// let a = 1
// let b = 3

// let res = (a == 2 ? (b == 2 ? 3 : "ur Time waste") : "vanga polam")
// console.log(res);

// //Handling Null values 
// function Myfun(fname) {
//     const rek = fname ? fname : "No Name"
//     document.write("welcome : " + rek)
// }
// Myfun("vijay")

// //Handling the null in objects types 
// obj = {
//     name: "Vijay", Age: 23
// }
// console.log(obj)


// const gret = (obj) => {
//     const use = obj ? obj.name : "No Name"
//     return "Hello :" + use;
// }
// console.log(gret(obj));

// //conditonals chains 
// const avg = 60;

// const avgr = (avg >= 90 ? "A Grade" : avg >= 80 ? "B Grade" : avg >= 70 ? "C Grade" : "No Grade")
// console.log(avgr)

// //null handlings in objects types 
// const arr = {
//     name: "praveen"
// }


// //lexical scope

// function myfunc() {
//     let foo = "Praveen"
//     console.log(foo);
// }
// myfunc();

// // //not a lexical scope
// // function myfunc1(){
// //     let foo="Praveen"
// // }
// // myfunc();
// // console.log(foo);

// let scop = "Bravo"
// function myfunc2() {
//     let msg = "Hi"
//     function myfunc3() {
//         let vk = "How r u"
//         console.log(msg + ' ' + scop + ' ' + vk);
//     }
//     myfunc3();
// }
// myfunc2();

// //closure capture variables 
// function closu() {
//     let msg1 = "Hello"
//     function closu1(name1) {
//         console.log(msg1 + " " +name1);
//     }
//     return closu1
// }
// let sim = closu();//sim now holds the inner function
// //even though closu is finished is executing .
// //sim still has access to the msg1 variable.
// console.log(sim);
// sim("sam");//closure

// //closure
// function closu2(){
//     var count=0;
//     return function(){
//         count++;
//         console.log(count);
//     }
// }
// let counter=closu2();
// counter()
// counter()
// //
// function x()
// {
//     let mg=7
//     function y(){
//         console.log(mg);
//     }
//     mg=100;
//      return y;
// }
// //x();
//  let z=x();
// console.log(z);
// z();

// //closure
// function xc(){
//     var b=1000;
//     function xv(){
//         var a=23;
//         function xb(){
//             console.log(b,a);
//         }
//         xb();
//     }
// xv();
// }
// xc();

// //Event handling 
// function createcount(){
//     var count1=0;
//     function increment(){
//         count1++;
//         console.log("count is: ", count1);
//     }
//     document.getElementById('inc-btn').addEventListener("click",increment)
// }
// createcount();