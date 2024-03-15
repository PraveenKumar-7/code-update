// //For loop
// let i=10;
// for(i=1;i<10;i+=2){
//     if(i===9){
//         break;
//     }
//     console.log(i)

// }

// // for loop on arrays
// const arr1=["Praveen","Vijay","Sandy","viji","sam"];
// for(let i=0;i<=arr1.length;i++){
//     if(i===5){
//         break;
//     }
//     console.log(arr1[i]);
// }

// //sum of natural numbers
// let il=0;
// let sum=10;
// for(let i=1;i<=sum;i++){
//     il +=i;
    
// }
// console.log("The total number of value is:" +il)

// //max number in array

// let ma=[12,23,34,56,76,37,8]
// let max=0;
// let min=ma[0];
// for(let i=0;i<=ma.length;i++){
//     if(ma[i]>max){
//         max=ma[i];
//     }
// }
// console.log("maximum number is " + max)


// for(let i=0;i<ma.length;i++){
//     if(ma[i]<min){
//         min=ma[i];

//     }
// }
// console.log("Minimum number is:"+min)

// //for loop in array odd and even
// let num=[12,22,13,14,15,46]
// let oddnumbers=[];
// let evennumbers=[];
// for(let i=0;i<num.length;i++){
//     if(num[i]%2!=1){
//         evennumbers.push(num[i])
//     }
//     else{
//      oddnumbers.push(num[i])
//     }
// }
// console.log("The Odd Numbers are"+oddnumbers);
// console.log("The Even Numbers are "+evennumbers);

// let arr4=[23,54,26]
// let max=0;

// for(let i=0;i<=arr4.length;i++){
//     if(arr4[i]>max){
//         max=arr4[i]
//     }
// }
// console.log("Maximim number is :"+max)

// //whileloop
// let iu=10
// let i=11;
// while(i<=iu){
//     console.log(i)
//     i++;
// }

// let dx=12;
// do{
// dx++;
// console.log(dx);
// }
// while(dx<10)

// //Forin loop
// const obj={Name:"praveen",Age:23}
// for(const i in obj){
//     console.log(obj[i])
// }

//for of loop
// let arr=["apple","mango","banana","kiwi"]
// for (let iterator in arr) {
//    console.log(iterator)
// }



let fname="praveen"

console.log(`My name is ${fname}`)
const obj = { a: 1, b: 2, c: 3 };

for (const prop in obj) {
  console.log(`${prop} = ${obj[prop]}`);
}

// Logs:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"

