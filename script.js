//ternary operator

const voter=21;
const result=voter>=18?"Eligible":"Not Eligible"
console.log(result)

let a=1
let b=3

let res=(a==2?(b==2?3:"ur Time waste"):"vanga polam")
console.log(res);

//Handling Null values 
function Myfun(fname){
 const rek=fname?fname:"No Name"
    document.write("welcome : " + rek)
}
Myfun("vijay")

//Handling the null in objects types 
 obj={
    name:"Vijay",Age:23
}
console.log(obj)


const gret=(obj)=>{
    const use=obj?obj.name:"No Name"
return"Hello :" + use;
}
console.log(gret(obj));

//conditonals chains 
const avg=60;

const avgr=(avg>=90?"A Grade":avg>=80?"B Grade":avg>=70?"C Grade":"No Grade")
console.log(avgr)

//null handlings in objects types 
const arr={
    name:"praveen"
}