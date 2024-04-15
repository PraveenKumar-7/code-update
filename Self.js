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

n=5;
for(i=1;i<=n;i++){
    z="";
    for(j=1;j<n-i;j++){
        z+=" ";
    }
    for(s=1;s<=2*i-1;s++){
        if(s===1 || s===2*i-1){
            z+='*' 
        }
    else{
        z+=' '
    }
    
}
console.log(z);
}
