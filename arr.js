// // //Accessing array elements in js 
// // // let array=["Praveen","Vijay","Sanjay"]
// // // console.log(array[1]);

// // //change the array elements
// // // let array1=["Praveen","Vijay","Sanjay"]
// // // array1[2]="Kumar"
// // // console.log(array1[2]);

// // //add element end of an array
// // let array=["North","South","West"]
// // array.push("East")
// // console.log(array);

// add element biginning of an array
// let array1=["North","South","West"]
// array1.unshift("East")
// console.log(array1);

// // //remove an element from the end 
// // let array2=["North","South","West"]
// // arr=array2.pop();
// // console.log(arr);

// // //remove element in beginning
// // let array3=["sheep","Goat","cow"]
// // array3.shift();
// // console.log(array3);

// // //finding the index of element 
// // let array4=["Lion","Tiger","Leopard","Hyena"]
// // let arr2=array4.indexOf("Leopard");
// // console.log(arr2);

// // //check if value is an array
// // let array5=["&&"]
// // let arr3=Array.isArray(array5)
// // console.log(arr3);

// // //delete element using splice method 
// // // let score=[3,2,9,4,5]
// // // let score1=score.splice(0,3)
// // // console.log(score1);
// // // console.log(score);

// // //inserting element using splice method 
// // // let score2=["thailand","Manali","shawlin"]
// // // let score1=score2.splice(1,0,"America","Germany")
// // // console.log(score2);

// // //replacing element using splice method
// // let score=["c","c++","js","java"]
// // let score1=score.splice(1,3,"React","Angular")
// // console.log(score);

// // //slice method
// // let scores=["x","v","b","n"]
// // console.log(scores.slice(1,3))

// // //includes()
// //  let Scores=["x","v","b","n"]
// // console.log(scores.includes("a"))

// // //find()
// // // let score3=[11,34,45,23]
// // // let score4=score3.find((num) =>{
// // // return num>40
// // // })
// // // console.log(score4);

// // let fin=[{name:"Pandy",Amt:100},{name:"Rohit",Amt:200},{name:"Rohit",Amt:200}]
// // console.log(fin.find(Gk => Gk.Amt>100));


// // //findindex
// // let ind=[1,3,6,4,8,6]
// // let ind1=ind.findIndex(ind => ind===6)
// // console.log(ind1);

// // //filter()
// // let filter1=[23,45,53,67,50]
// // let les=filter1.filter(c => c<50)
// // console.log(les);

// // //
// // let filter2=[2,5,6,8,4]
// // let Filter=filter2.filter((ui) => ui > 4 )
// // console.log(Filter);

// // //

// // //map    transformation logic  creates a new array from calling a function for every array element. map() does not 
// // //execute the function for empty elements. map() does not change the original array.
// // let map=[2,4,6,8]

// // function double(xe){
// // return xe*2
// // }
// // let maps=map.map(double)
// // console.log(maps);

// // //reduce()


// // //map
// // let 
// // //map
// // let map1=[2,4,5,7]
// // let result=map1.map(x => x*2)
// // console.log(result);

// // //filter
// // let filter1=[2,4,5,7,8,9]
// // let res=filter1.filter(xe => xe>5)
// // console.log(res);

// //length
// // let arr=["jkvk"]
// // let arr1=arr.length;
// // console.log(arr1);

// // //string
// // let str="hello,boy"
// // let str1=str.length;
// // console.log(str1);

// // //unshift
// // let arr=[21,7,8]
// // let length=arr.unshift(2)
// // console.log(length);
// // console.log(arr);

// //replacing t'c++he elements using splice 
// let spl=["c","c++",'java',"Javascript",".Net"]
// let spl1=spl.splice(1,2)
// console.log(spl);


// //slice 
// //let arr=["a","b","c","d","e"]
// // let sliced=arr.slice(1,4)
// // console.log(sliced);
// // console.log(arr);

// //indexOf
// // let arr=["Mano","Vinay","Gopi","Charles"]
// // let indx=arr.indexOf("Vinay");
// // console.log(indx);

// //includes 
// // let arr=[1,2,3]
// // let inclu=arr.includes(3)
// // console.log(inclu);

// //find
// // let arr=[12,11,14,6,5]
// // console.log(arr.find(ele => ele <10));

// //findIndex
// // let arr=[11,12,23,45,23]
// // let points=arr.findIndex((ran)=>ran===23)
// // console.log(points);


// //callback
// function call(gem){
//     let bambo=["Viji","Gokul","Ajith"]
//     gem(bambo)
// }
// function process(bambo){
//     console.log("Valid Names are :" + bambo);
// }
// call(process)
  
// //map
// //let arr=[{
// //     name:"Vk",
// //     Age:20,
// // },{
// //     name:"mk",
// //     Age:19
// // },
// // {
// //     name:"hr",
// //     Age:21
// // }]
// // let map=arr.map((man)=> man.name)
// // console.log(map);

// // let arr=[2,4,5,3,7]
// // let map=arr.map((num)=>num * 3)
// // console.log(map);


// //filter
// // let arr=[1000,3000,2000,4000]
// // let Amt=arr.filter(score=> score<2000)
// // console.log(Amt);


// //reduce 
// // let arr=[1,2,3,4,5]
// // let reduced=arr.reduce((previous,current)=>previous+current)
// // console.log(reduced);

// //Every
// let arr=[2,4,5,7,8]
// let ever=arr.some(run=>run >5)
// console.log(ever);

// let arr1=[2,4,5,7,8]
// let ever1=arr1.some(run=>run <=0)
// console.log(ever1);


// ////self-test

// //length property in array
// let arr=[1,2,3,5,4]
// let scr=arr.length;
// console.log(scr);

// //length property in string

// let str="i know js"
// let str1=str.length;
// console.log(str1);

//push method & pop method
// let arr=[23,45,6,8,9]
// let scr=arr.pop()
// console.log(arr);
// console.log(scr);

//unshift method & shift method
// let arr=[7,8,9,10]
// let scr=arr.shift()
// console.log(arr);

//splice method for delete , insert ,replace:
//let arr=[12,14,25,7]
// let scr=arr.splice(1,4) //(index,element)
// console.log(arr);
// let scr=arr.splice(2,0,15,16) ///(element , 0 dont delete array element, insert values)
// console.log(arr);
// let scr = arr.splice(1,1,13) ///(index,element,value)
// console.log(arr);


//slice method
// let arr=[1,3,5,7,3]
// let scr=arr.slice(1,4)  //(index,element)
// console.log(scr);

//indexOf()
// let arr=["vm","sm","jm"]
// let scr=arr.indexOf("vm")
// console.log(scr);

//includes()
// let arr=[1,3,5,7,8]
// let scr=arr.includes(9) //(element)
// console.log(scr);

// //find()
// let arr=[12,7,14,4,16,17]
// let scr=arr.find(element => element < 0)
// console.log(scr);   //Element value

//findindex()
// let arr=[12,45,77,88]
// let scr=arr.findIndex(element=>element === 777)
// console.log(scr);    //Element index  -1

//map()
// let arr=[23,22,54,23]
// let scr=arr.map(ele=> ele+1)
// console.log(scr);
// console.log(arr);

//filter()
// let arr=[1,3,5,7,2]
// let scr=arr.filter(element => element ===3 || element ===7)
// console.log(scr);

//sort
// let arr=[12,15,17,7,11]
// let scr=arr.sort(function(a,b){
//     return a-b
// })
// console.log(arr);

//every
// let arr=[99,88,55,33,77]
// let scr1=arr.every(element => element <100)
// let scr=arr.every(element => element >100)
// console.log(scr);

// //reduce
// let arr=[2,5,7,9]
// let scr=arr.reduce((a,b) => a+b,3)
// console.log(scr);

//some
// let arr=[2,3,5,4,2]
// let scr=arr.some(element => element>5)
// console.log(scr);

//foreach()
// let arr1=["a","b","c","d"]
// arr1.forEach(ele => {
// console.log(ele)
//});

//modifying the arra elements
// let arr=[2,4,6,8,9]
// let scr=arr.reduce((num,curr)=>{
//    return num*curr

// })
// console.log(scr);
//console.log(arr);

//at()
 //let arr=[5,4,2,6,8]
// // let ind=-1;
// // console.log(`the index of ${ind} is ${arr.at(ind)} `);
// function res(){
//     return arr.at(5)
// }
// console.log(res());

//concat
// let arr1=[3,5,9]
// console.log(arr.concat(arr1));


//array.from()
//array.reduce()
//Object.is()
//Object.assign()
//Object.create()
//object.fromEntries()
//object.entries()
//object.keys()
//object.values()
//difference between Object vs new Map()
//generator functions
// recurrsive functions


//entries 
const arr=["a","b","c"];
const scr=arr.keys();
for(let key of scr){
    console.log(key);
}

// for(let entry of scr)
// console.log(entry);
