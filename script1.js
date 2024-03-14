//If conditions

// //let age = prompt("Enter your age");
// if(age!=null && age>=18){
//     console.log("Your are Eligible")
// }else{
//     console.log("Your not Eligible");
// }

// let age1=prompt("Enter Your Age")
// if(age1<18){
//     console.log("You are not eligible");
// }
// else if (age1>=18 && age1<=25) {
//     console.log("You are perfect candidate for this job");
// }
// else {
//     console.log("you are not applicable");}

//if else-if statement
let time = prompt("Enter the valid Timing");

if (time < 12) {
    console.log("Good Morning");
}
else if (time >= 12 && time <= 15) {
    console.log("Good Afternoon");
}
else if (time >= 16 && time <= 18) {
    console.log("Good Evening");
}
else {
    console.log("Good Night")
}

//nested if statement
let temp = 26;
let nowsummer = false;

if (nowsummer) {
    if (temp > 25) {
        console.log("It's hot summer day")
    }
    else {
        console.log("It's a summer day");
    }
}
else {
    console.log("Not a summer day");
}

//switch statement

let year = "kkl";
switch (year) {
    case "jan":
        console.log("starting month of the year");
        break;
    case "july":
        console.log("mid month of the year");
        break;
    case "dec":
        console.log("Last month of the year");
        break;
    default:
       alert("Something went wrong");
       
}

