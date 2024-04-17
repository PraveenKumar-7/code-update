// //variables
// const x=5;
// console.log(x);
//  y=7;
// console.log(y);

// //console.log
// console.log("Hello,"+"Praveen");

// let con=6;
// console.log("Hello %d Welcome to my home",con);

// //template literals

// let temp="vijay"
// console.log(`Heloo ${temp} welcome to my home`);

// const j=null;
// kl=typeof(j)
// console.log(kl);

// comparison Operators equal to and not equal to
// console.log(7 == 7);
// console.log(7 != "7");
// console.log(9 === "9");
// console.log(9!=="9");

//if condition
// let score=67;
// if(score>=90 && score<=100){
//     console.log("Grade A");
// }
//  else if(score >= 75 && score<=89)
// {
//     console.log("Grade B");
// }
// else if( score >= 55 && score<=74)
// {
//     console.log("Grade c");
// }
// else if(score >= 40 && score<=54){
//     console.log("Grade D");
// }
// else{
//     console.log("fail");
// }

//nested if else condition

// let mark =101
// if(mark>=45 && mark<=100){
//     if(mark>80 ){
//         console.log("first class");
//     }
//     else{
//         console.log("second class");
//     }
// }
// else if(mark<=-1){
// console.log("invalid");
// }
// else if(mark>=101){
//     console.log("invalid");
// }
// else{
//     console.log("Fail");
// }

//ternary operator
// let mark=40;
// let result=mark>=40?"pass":"Fail";
// console.log(result);

//nested if else
// let age=38;
// if(age>=18){
//     let result=age>25?"your in waiting list":"Your are qualify"
//     console.log(result);
// }
// else{
//     console.log("ivalid person");
// }

// // let salary=5000
// let age1=23;
// if(age>=20 || salary>=6000){
//     console.log("eligible");
// }
// else{
//     console.log("no eligible");
// }

//Do not declare variable marks.
//Write your code below this line.
// let marks =39;
// if(marks>90){
//     console.log('Excellent')
// }
// else if(marks >80 && marks<=90){
//     console.log('V.good')
// }
// else if(marks >70 && marks <= 80){
//     console.log('Good')
// }
// else if(marks >60 && marks <=70)
//     {
//         console.log('Moderate')
//     }
// else if(marks >50 && marks <=60)
//     {
//         console.log('improve ur scores')
//     }
// else if(marks >40 && marks <=50)
//     {
//         console.log('improve ur marks')
//     }
// else 
//     {
//         console.log('fail')
//     }

//for loop

// let n=5
//




// function printTriangle(height) {
//     // Iterate through each row
//     for (let i = 1; i <= height; i++) {
//         let row = '';
//         // Add spaces before the stars
//         for (let j = 1; j <= height - i; j++) {
//             row += ' ';
//         }
//         // Add stars and spaces inside
//         for (let k = 1; k <= 2 * i - 1; k++) {
//             if (k === 1 || k === 2 * i - 1) {
//                 row += '*'; // Add star at the edges
//             } else {
//                 row += ' '; // Add space inside
//             }
//         }
//         console.log(row);
//     }
// }


// // Test the function with height 5
// printTriangle(5);

// // for(i=1;i<=5;i++){
// //     row=' '
// //     for (let j = 1; j <= n - i; j++) {
// //         row += ' ';
// //     }
// //     row+="*"
// //     console.log(row);
// // }


// function printPyramidTriangle(height) {

//     for (let i = 1; i <= height; i++) {
//         let row = '';

//         for (let j = 1; j <= height - i; j++) {
//             row += ' ';
//         }

//         for (let k = 1; k <= 2 * i - 1; k++) {
//             row += '*';
//         }
//         console.log(row);
//     }
// }

// Test the function with height 5
//printPyramidTriangle(5);

// n=5;
// for(i=1;i<=n;i++){
//     z="";
//     for(j=1;j<n-i;j++){
//         z+=" ";
//     }
//     for(s=1;s<=2*i-1;s++){
//         if(s===1 || s===2*i-1){
//             z+='*' 
//         }
//     else{
//         z+=' '
//     }

// }
// console.log(z);
// }

// Program to display numbers from 1 to 3

//16/04/2024

// initialize variable i
// let i = 1;

// // while loop
// while (i < 4) {
//     console.log(i);
//     i += 1;
// }
//
// let x=0,y=0;
// while(x>=0){
//     y+=x;
//     x=parseInt(prompt("Enter the Number:"));
//     console.log(x)
// }
// console.log(`The sum of ${y}`);

//const age = 31;
//const ownsCar = false;

// if (age >= 16 && age<=25) {
//   console.log("Jerry is old enough to drive and has his own car.");
// } else if(age>=26 && age<=30) {
//   console.log("Temporary driver.");
// }
// else{
//   console.log( "You wont drive")
// }

// const boyfriendIsPaying = true;
// const isSale = true;

// if (!boyfriendIsPaying || isSale) {
//   console.log("Jesse will go shopping.");
// } else {
//   console.log("Jesse will not go shopping.");
// }

// let i=1;
// while(i<=5){
//     console.log("Hello");
//     i++
// }

//array
// let arr=[23,4,7,4,6,4]
// let scr=arr.map(ele => ele <1)
// console.log(scr);
// const array = [1, 2, 3, 4, 5];
// const sum = array.some(ele => ele>6);
// console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5 = 15)

// const numbers = [3, 1, 5, 2, 4];​

// numbers.sort((a, b) => a - b);​

// console.log(numbers);

// program to calculate positive numbers only
// if the user enters a negative number, that number is skipped from calculation

// negative number -> loop terminate
// non-numeric character -> skip iteration

// let sum = 0;
// let number = 0;

// while (number >= 0) {

//     // add all positive numbers
//     sum += number;

//     // take input from the user
//     number = parseInt(prompt('Enter a number: '));

//     // continue condition
//     if (isNaN(number)) {
//         console.log('You entered a string.');
//         number = 0; // the value of number is made 0 again
//         continue;
//     }

// }

// display the sum
//console.log(`The sum is ${sum}.`);

//infinity loop
// let o=2
// while(o>0)
// {
//     console.log("fun");
//     o++;
// }

//switch
// let traffic_color = prompt("Enter Your Color") ;
// switch (traffic_color) {
//     case "Red":
//         console.log("Stop")
//         break;
//     case "Yellow":
//         console.log("Get Ready");
//         break;
//     case "Green":
//         console.log("Drive Now");
//         break;
//     default:
//         console.log("Invalid Color");
// }

///function 
// function fun(name){
// console.log("Hello" +" "+ name+" "+"Welcome to my page");
// }
// // let name=prompt("Enter Your name")
// // fun(name)

// // let age =prompt("Enter Your Age");
// // let myfun=(age<18)?()=>console.log("Baby"):()=>console.log("Adult");
// // myfun()

// //argument binding
// // let fun=function (){
// //     console.log(arguments);
// // }
// // fun(3,5,7)


// //object destructuring
// // const obj={age:23,
// //     name:"Praveen"}
// // const{
// //     name,age
// // } =obj;


// // console.log();
// // console.log(name);


// //function 1
// function fun(n){
// n=n+"";
// return n.split("").reverse("").join("")
// }
// console.log(fun(23456));

// //function 2
// const eve=number=>{
// if(number % 2===0){
//     console.log("Even numbers")
// }
// else{
//     console.log("odd numbers");
// }
// };
// eve(2)

// //function 3
// let  fun1=(h,m,s)=>{
//     return (h*60*60+m*60+s)*1000
// }
// console.log(fun1(2,1,1));

// //function 4
// let fun2=(name)=>
// {
// return `hello, ${name} how are you doing today?`
// }
// console.log(fun2("praveen"));

// //function 5

// const fun3=year=>


//     // if(year>1 && year<=1000){
//     //     console.log(1);
//     // }
//     // else if(year>=1001 && year<=2000){
//     //     console.log(2);
//     // }
//     // else if(year>=2001 && year<=3000){
//     //     console.log(3);
//     // }
// else{
//     console.log("invalid year");
// }
//     return Math.ceil(year/100)

// }
// console.log(fun3(4000));

// //function 6
// const fun4=str=>{
//       str+=arr
//     let arr=[]
//     return arr.length
// }
// console.log(fun4("hello"));
// function sum(x = 4, y = 6) {

//     // return sum
//     return x + y;
// }

// console.log(sum(5, 15));  // 20 
// console.log(sum(7));        // 12
// console.log(sum());          // 8


//17/04/2024

//Arrow function

// const fun=(a)=>{
// return a*3
// }
// console.log(fun(2));

//arr function inside the regular function + constructor function

// function fun1(name1,age1){
//     this.name=name1,
//     this.age=age1
//     return `Hello, am ${this.name1} my age is ${this.age1}`
//     // this.fun2=()=>{
//     //     console.log(this.name);

//     // let fun3=()=>{
//     //     console.log(this.age);
//     // }
//     // fun3();

// }
// let x=new fun1("vijay",24)
// let y=new fun1("Hari",25)
// console.log(x);

//settimeout function
// program to display a text using setTimeout method
// function greet() {
//     console.log('Hello world');
// }

// let intervalId = setTimeout(greet, 3000);
// let intervalId1= setTimeout(greet, 3000);
// let intervalId2= setTimeout(greet, 3000);
// console.log( 'id :'+ intervalId);   
// console.log( 'id :'+ intervalId1);   
// console.log( 'id :'+ intervalId2);  


// setTimeout(function(){
//     console.log("praveen");
// },4000)


// program to display time every 3 seconds


// let clearId;
// function set(){
//     console.log("Hello");
//     clearId=setTimeout(set,3000)
// }
// set()

// function clear(){   //clearTimeout
//     clearTimeout(clearId)
//     console.log("Diplay stooped");
// }
// setTimeout(clear,10000)


//settimeout  callback function
// Callback Function Example
// function greet(name, myFunction) {
//     console.log('Hello world');

//     // callback function
//     // executed only after the greet() is executed
//     myFunction(name);
// }

// // callback function
// function sayName(name) {
//     console.log('Hello' + ' ' + name);
// }

// // calling the function after 2 seconds
// setTimeout(greet, 2000, 'John', sayName);

// function vb(){
//     console.log("Vijay");
// }
// function mb(fun){
//     console.log("Praveen");
//     fun()
// }
// vb(mb)

// program to stop the setInterval() method after five times

// let count = 0;

// // function creation
// let interval = setInterval(function(){

//     // increasing the count by 1
//     count += 1;

//     // when count equals to 5, stop the function
//     if(count === 5){
//         clearInterval(interval);
//     }

// //     // display the current time
// //     let dateTime= new Date();
// //     let time = dateTime.toLocaleTimeString();
// //     console.log(time);

// // }, 2000);

// let cnt = 0;
// let inter = setInterval(function () {
//     cnt += 1;
//     if (cnt === 5) {
//         clearInterval(inter)
//     }
//     console.log("Hello");
// }, 3000)

// //promise
// const data = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const name = undefined
//         if (name) {
//             resolve(name)
//         } else {
//             reject(new Error("Invalid name"));
//         }
//     }, 5000)
// })
// data.then((name) => {
//     console.log(name);
//  }).catch((error) => { 
//     console.log(error.stack)
//  }).finally(() => {
//     console.log("Test verified");
//   })



  //Exception handling 
// try{
//     let res=quote(6,0)
//     if(res===Infinity){
//         throw new Error("no result found")
//     }
//     console.log(res);
// }
// catch(error){
//     console.log(error.name);
// }
// finally{
//     console.log("Scucess");
// }

// function quote(a,b){
//     return a/b
// }


//string prototype
//at()
// let str="hello buddy 12"
// let arr= str.at(-2)
// console.log(arr);

// let str = "Hello Welcome"
// //big() gives the html content
// let arr=str.big()
// console.log(arr);

//bold()
// let str="Hello"
// let arr=str.bold()
// console.log(arr);

//chartcodeat()
// let str="hi welcome team"
// let arr=str.charCodeAt(4)
// console.log(arr);


