//let arr=[1,3,5,7]
//console.log(arr.length);   //length property
// let scr=arr.push(4) //push()
// console.log(arr);
// let scr=arr.pop()   //pop
// console.log(scr);
// let scr=arr.unshift(2) //unshift()
// console.log(arr);
// let scr=arr.shift()  //shift
// console.log(arr);

// let scr=arr.splice(0,3) //splice delete (index,element)
// console.log(arr);
//concat.let scr=arr.splice(0,0,32)  //splice insert(element,0,insert value)
//console.log(arr);

// let scr=arr.splice(2,0,15,16) ///(element , 0 dont delete array element, insert values)
// console.log(arr);
// let scr=arr.splice(1,3,35,57)  //splice replace(index,element,value)
// console.log(arr);

// let arr=[3,1,5,7,56,78]
// let scr=arr.slice(1,3)    //slice(index,element)
// console.log(scr);
// let scr=arr.find(ele => ele <5)// find  print the first element passes the test function
// console.log(scr);
// let scr=arr.findIndex(ele=> ele < 5)
// console.log(scr);
// let scr=arr.map(ele => ele*3) //map() it passes the function to all elements in array and print in the new array
// console.log(scr);

// let scr=arr.filter(ele => ele >3)   //filter() it passes the function in all elements in array and print the statify elements in an new arra
// console.log(scr);

// let scr=arr.reduce((p1,p2) => p1*p2)   //reduce
// console.log(scr);
// let scr=arr.every(ele => ele<8)    //evry() passes on all elments in array but it prints only if the all elements passes the test function
// console.log(scr);
// let scr=arr.some(ele => ele<1)  //some()  at least one element passes the test function it prints true 
// console.log(scr);

// let scr=arr.sort((a,b) => b-a)  //sort()
// console.log(scr);

// let arr1=["a","b","c","d"]    //foreach() it iterates over the array of the elements
// arr1.forEach(ele => {
// console.log(ele)
// });
// let arr1=[24,35,4]
// let scr=arr.concat(arr1)    //concat() it joins two or more arrays in one array
// let scr1=scr.sort((a,b)=> a-b)
// console.log(scr1);

// let scr=arr.join("+")    //join()is used to join the array elements in to a single array
// console.log(scr);
//  let arr=[3,1,5,7,56,78]
// let scr=arr.fill(55,1)    //fill() is used fill all elements in an array with static values 
// console.log(scr);
// let arr=[3,1,5,7,56,78]
// let scr=arr.reverse()
// console.log(scr);

 let arr=[3,1,5,7,56,5,89,99]
let scr=arr.copyWithin(1,4)   //(index,index,element)
console.log(scr);
 
// let scr=arr.entries()
// console.log(scr.next().value);
// console.log(scr.next().value);
// console.log(scr.next().value);

// let scr=arr.findLast(ele => ele >55)
// console.log(scr);

// let scr=arr.findLastIndex(ele=> ele >56)
// console.log(scr);

// let arr=[11,12,13,[15,[14]]] //flat()
// console.log(arr.flat(2));

// let scr=arr.flatMap((ele)=> ele===5?[7,8,3]:1)
// console.log(scr);
