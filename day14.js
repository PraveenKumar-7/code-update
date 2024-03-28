//Event loop

console.log("start");

setTimeout(function cb(){
    console.log("hello");
}, 5000);
console.log('end');


//Addeventlistner with event loop
console.log("Hi");

document.getElementById('jk').addEventListener("click",function cv(){
    console.log("Helo welcome");
});
console.log("BYee");


//event loop
console.log("Let's Begin");

setTimeout(function gh(){
    console.log("Hello Buddy Welcome");
},6000);
//fetch("#").then(function cbf(){
  //  console.log("Wait for exection");
//});
console.log("End");


//curring 
function calc(a){
    return function(b){
        return function(c){
            return a*b+c;
        }
    }
}
console.log(calc(2)(4)(5))

//
const ari=function(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
console.log(ari(1)(2)(3));

//immediately invoked function Expression
(function dis(){
    let av=10;
    let bv=4;
let res=av+bv;
(function dis1(){
    console.log(res);  
})()
})();

//
let df=function(n1,n2){
let res= n1+n2
console.log(res);
}
df(2,3)

//function hosting 

var x;
x=5;
function cf(){
    console.log(x)
}
cf()



//hosting 
console.log(gk(3,4))

function gk(we,ew){
    return we+ew;
}

console.log(counter); // 👉 undefined
var counter = 1;
//
var z;
z=100;
var z=100;
z+200;