
 
//  for(let il of ibl ){
//     console.log(il);
//  }

 //even numbers
 let arr6=[22,1,24,23,77]
 let Evennumbers=[];
 for( i=0;i<arr6.length;i++){
    if(arr6[i]%2){
        Evennumbers.push(arr6[i])
    }
 }
 console.table(Evennumbers);

console.time("Timer")
for(i=0;i<150;i++){
   console.log(i);
}
 console.timeEnd("Timer")

 abn=true;
 console.log(abn,typeof abn);
 abn=String(abn);
 console.log(abn,typeof abn);

 a=[1,2,34]
 console.log(a,typeof a);
 a=Number(a)
 console.log(a,typeof a);

 let voter=12;
 const res=voter>=18?"your are Eligible":"Not Eligible"
 console.log(res);

 const objl={Name:"Praveen",Age:23}

 const gret=(objl)=>{
   const res=objl? objl.Name:"No Name"
   return "Hello"  + res
 }
 console.log(gret(objl));

 //nested for loop
 let nums=[]
 for(let i=0;i<3;i++){
   nums.push([])
   for(let j=0;j<3;j++){
      nums[i].push(j)
   }
 } 
console.log(nums);
console.table(nums)