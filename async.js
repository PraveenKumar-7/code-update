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
async function myfun(){
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

const rs=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Successfully Verified")
    },5000)
})
async function getset(){
    console.log("Hello");
  let val=await rs
console.log("welcome");
console.log(val);

let val1=await rs
console.log("welcome");
console.log(val1);
}
getset();