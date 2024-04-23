// const dom = document.getElementById("Ele");
// dom.innerHTML = "Hi Buddy <b>Welcome</b>"
// dom.style.backgroundColor = "red"
// console.log(dom);

//const { log } = require("async");

//const { filter } = require("async")

// //elementById & Eventlistener
// let button = document.getElementById("onbtn")
// button.addEventListener('click', function () {
//     console.log("Welcome Vicky");
// })

// //elementsByTagname
// let btn = document.getElementById("button1")
// btn.addEventListener('click', () => {
//     let head = document.getElementsByTagName("h1")
//     alert(`The no of Headings: ${head.length}`)
// })



//elementsByName
// let btn1 = document.getElementById('button3')
// let output = document.getElementById('outp')
// btn1.addEventListener('click', () => {
//     let rates = document.getElementsByName('rate')
//     rates.forEach((rate) => {
//         if (rate.checked) {
//             output.innerHTML= `you selected : ${rate.value}`;
//         }
//     });
// });


//find duplicate elements in an array

// let arr=[12,23,4,7,12,7]
// let scr=arr.filter((ele,index)=>arr.indexOf(ele) !== index);
// console.log(scr);

// //palindrome or not

// function ispalin(str ){
// let str1=''
//     str=str.replace(/[^A-Za-z0-9]/g,"").toLowerCase();
//          let str2 = str.split('').reverse().join('');

//          str2=str1
//     if(str1 === true){
//     return "It is palindrome"
//     }
//     else{
//         return "Not a palindrome"
//     }
// }
// console.log(ispalin("malayalam"));

// function isPalindrome(str) {
//     // Remove non-alphanumeric characters and convert to lowercase for case-insensitive comparison
//     str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
//     // Compare the string with its reverse
//     return str === str.split('').reverse().join('');
// }

// // Test the function
// console.log(isPalindrome("racecar"));  // true
// console.log(isPalindrome("hello"));    // false
// console.log(isPalindrome("A man, a plan, a canal, Panama"));  // true


// // function reversed(str4){
// // mk=str4.reverse()
// // return mk
// // }
// // console.log(reversed("cow"));

// let arr1=["c","o","w"]
// arr1.reverse()
// let arr2=arr1.join('')
// console.log(arr2);


// function res(rex){
//     var scr =''
//     for(let i=rex.length-1;i>=0;i--){
//         scr+=rex[i];
//     }
//     return scr
// }
// console.log(res("Vijay"));
// //factorial number 

// function fact(n){
// if(n===0 || n===1){
//     return 1;
// }
// else{
//     return n*fact(n-1)
// }
// }
// console.log(fact(5));

// // Function to create the calendar
// function createCalendar() {
//     // Get today's date
//     var today = new Date();

//     // Create a table element for the calendar
//     var table = document.createElement("table");

//     // Create table header row
//     var headerRow = table.createTHead().insertRow();

//     // Create table body
//     var body = table.createTBody();

//     // Add days of the week as table headers
//     var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//     for (var i = 0; i < daysOfWeek.length; i++) {
//         var th = document.createElement("th");
//         th.textContent = daysOfWeek[i];
//         headerRow.appendChild(th);
//     }

//     // Get the first day of the current month
//     var firstDay = new Date(today.getFullYear(), today.getMonth(), 1);

//     // Find the index of the first day in the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
//     var startingDay = firstDay.getDay();

//     // Determine the number of days in the current month
//     var monthDays = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

//     // Create table rows and cells for the days of the month
//     var row = body.insertRow();
//     for (var j = 0; j < startingDay; j++) {
//         row.insertCell();
//     }

//     // Loop through each day of the month
//     for (var day = 1; day <= monthDays; day++) {
//         var cell = row.insertCell();
//         cell.textContent = day;
//         cell.addEventListener("click", function() {
//             // When a cell is clicked, add 2 to its value and print
//             var originalValue = parseInt(this.textContent);
//             var newValue = originalValue + 2;
//             console.log("Original value: " + originalValue + ", New value: " + newValue);
//         });

//         // Move to the next row after reaching the end of a week
//         if ((day + startingDay) % 7 === 0 && day < monthDays) {
//             row = body.insertRow();
//         }
//     }

//     // Append the calendar table to the calendar div
//     document.getElementById("calendar").appendChild(table);
// }

// // Call the function to create the calendar
// createCalendar();


//Async function
async function myfun() {
    return "Hello Frnd"
}
console.log(myfun());


// promise 

// const pr=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("successfully verified")
//     },5000)
// })

// function getData(){
// let dr=pr;
// dr.then((res)=>console.log(res));
// console.log("welcome");
// }
// getData()

//async/await

// const rs=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Successfully Verified")
//     },5000)
// })
// async function getset(){
//     console.log("Hello");
//   let val=await rs
// console.log("welcome");
// console.log(val);
// }
// getset();

//complicated task

// const rs=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Successfully Verified")
//     },5000)
// })
// async function getset(){
//     console.log("Hello");
//   let val=await rs
// console.log("welcome");
// console.log(val);

// let val1=await rs
// console.log("welcome");
// console.log(val1);
// }
// getset();


//23/04/2024
console.log(2 + true);
console.log([] == ![]);
console.log(NaN === NaN);
console.log('5' - -'3');
console.log(null == undefined);

//Task
//Write a JavaScript program that displays the largest integer among two integers.
function get1(a, b) {
    if (a > b) {
        return "a is greater"
    }
    else if (b > a) {
        return 'b is greater'
    }
    else {
        return `a and b are equal`
    }
}
let res = get1(2, 2);
console.log(res);


//Write a JavaScript conditional statement to find the sign of the product 
//of three numbers. Display an alert box with the specified sign.

// let x=5;
// let y=-2;
// let z=3;

// function specified(val){
// if(val>0){
//     return "+";
// }
// else if(val<0){
//     return "-"
// }
// else{
//     return "Zero"
// }
// }

// let signx=specified(x)
// let signy=specified(y)
// let signz=specified(z)

// let overallsign=(signx===signy && signy === signz)?"+":"-"
// alert(`The overall sign is:${overallsign}`)

//Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.
// let p=4;
// let q=7;
// let r=2;

// if(p>q && p>r){
//     if(q>r){
//         console.log(p+" ,"+q+","+r);
//     }
//     else{
//         console.log(p+","+r+","+q);
//     }
// }
// else if(q> p&& p>r){
//     if(p>r){
//         console.log(q+","+p+","+r);
//     }
//     else{
//         console.log(q+","+r+","+p);
//     }
// }
// else if(r>p && r>q){
// if(p>q){
//     console.log(r+","+p+","+q);
// }
// else{
//     console.log(r+","+q+","+p);
// }
// }

//Write a JavaScript conditional statement to find the largest of
// five numbers. Display an alert box to show the results.
// let l=4;
// let m=7;
// let n=5;

// if(l>m && l>n){
//     console.log(l);
// }
// else if(m>l && m>n){
//     console.log(m);
// }
// else if(n>l && n>m){
//     console.log(n);
// }

//Write a JavaScript for loop that iterates from 0 to 15. For each iteration, 
//it checks if the current number is odd or even, and displays a message on the screen.
// for(let i=0;i<=15;i++){
//     if(i%2==0){
//         console.log(i + "is even");
//     }
//     else{
//         console.log(i + "is odd");
//     }
// }

//Write a JavaScript program that computes the average marks of the following students. 
//Then, this average is used to determine the corresponding grade.

let students = [['vijay', 67], ['praveen', 76], ['sandy', 65]]
let avgmarks = 0;
for (let i = 0; i < students.length; i++) {
    avgmarks += students[i][1]
}
var avg = avgmarks / students.length

console.log("average grade is:" + avgmarks / students.length);
if (avg > 90 && avg <= 100) {
    console.log("A");
}
else if (avg > 80 && avg <= 90) {
    console.log("B");
}
else if (avg > 70 && avg <= 80) {
    console.log("c");
}
else if (avg > 60 && avg <= 70) {
    console.log("D");
}
else if (avg > 50 && avg <= 60) {
    console.log("F");
}


//Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz".
// For numbers multiples of both three and five print "FizzBuzz".
// for (let i = 0; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i + "FizzBuzz");
//     }
//     else if (i % 3 === 0) {
//         console.log(i + "Fizz");
//     }
//     else if (i % 5 === 0) {
//         console.log(i + "Buzz");
//     }
// }

//

// function createPyramid(rows) {
//     for (let i = 0; i < rows; i++) {
//       let str = '';
//       // Add spaces before the first asterisk
//       for (let j = 0; j < rows - i - 1; j++) {
//         str += ' ';
//       }
//       // Add asterisks
//       for (let k = 0; k <= i; k++) {
//         str += '* ';
//       }
//       console.log(str);
//     }
//   }
  
//   createPyramid(5); 



//function tasks

function alpha_order(str){
    return str.split('').sort().join(',')
}
console.log(alpha_order("Welcome"));

