//Memory Management
//stack memory
//stack memory can store  static data
let a =15;
a=20;
a=35;
let b = a;
b=25;
console.log(a,b);

//heap memeory can store dynamic data
let obj1={
    name:"viji",
    Age:23
}
 let obj2=obj1;
 obj1.Age=25;
console.log(obj1,obj2);

//arr
let arr1=[1,32,7,23];

let arr2=arr1;
arr1[0]=4;
arr2[3]=50;
console.log("arr1 is",arr1);
console.log("arr2 is",arr2);


//function with return statement 
function mfun(ab,ba){
return ab+ba;
}
console.log(mfun(23,34));


//function with abitrary arguments
function myfun(){
    let tot=0
    for(let i=0;i<arguments.length;i++)
    {
        tot+=arguments[i]//tot=tot +arguments[i]
    }
    return tot;
}
console.log(myfun(2,3,4,5));

//abitrary arguments in spread operator
function total(...args){
    let tot=0
    for(let i=0;i<args.length;i++)
    {
        tot+=args[i]//tot=tot +arguments[i]
    }
    return tot;
}
console.log(total(2,4,7));


// function expression

let abd=function(add,add1){
    return add+add1
}
console.log(abd(2,4));

//Arrow functions 
let arr3=()=>{
    console.log("Hi Welcome");
}
arr3()
//with parameter
let arr4=(x,y)=>{
    console.log(x*y);
}
arr4(2,5)

//default parameters
let arr5=(z,c,v=10)=>{
    console.log(z+c+v);
}
arr5(4,6)

//arrow function with Map()
let arr6=[1,2,3,4,5]
let doub=arr6.map(word=>word*2)
console.log(doub);

//arrow with filter()
let arr7=["praveen","vijay1","sam","ben1"]
let ar1=arr7.filter(arr=>arr.length>4)
console.log(ar1);

//arrow with reduce()
let total1=arr6.reduce((sun,num)=>sun+num,0);
console.log(total1);


//callback function

function his(){
    console.log("hi Welcome");
}
function him(jim){
jim()
}
him(his);

// function myfun1(sin){
//     document.getElementById("Fun").innerHTML=sin;
// }
// function myfun2(num1,num2){
//     let add2=num1+num2
//     return add2
// }
// //yfun2(sin);

// let res=myfun2(4,6)
// myfun1(res)


function fun1(sin){
document.getElementById("Fun").innerHTML=sin;
}
function fun2(x,y){
let res=x*y
return res;
}
let tot1=fun2(3,4)
fun1(tot1)

function fun3(som)//callack function
{
    document.getElementById("Fun").innerHTML=som;

}
function fun4(cv,vc,calc)
//fun4 argument
{
    let res1=cv*vc;
    calc(res1)
}
fun4(7,3,fun3)


//setTimeout()
setTimeout(function(){
    document.getElementById('Fun').innerHTML="Hello World";
},4000)

//setinterval()
setInterval(function(){
     document.getElementById('Fun').innerHTML="Welcome Team"
    //console.log("Welcome TEam");
},5000)


//call back function
function apl(){
    console.log("Hello BUddy");
}
function apj(xc,cb){
    let result=xc+cb;
    console.log(result);
}
let km=apj(34,5);
apl(km);


function task(message) {
    // emulate time consuming task
    let n = 10000000000;
    while (n > 0){
        n--;
    }
    console.log(message);
}

console.log('Start script...');
task('Call an API');
console.log('Done!');
