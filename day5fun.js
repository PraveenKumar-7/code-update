// // //break statement
// // for(i=0;i<3;i++){
// //     console.log(i)
// //     if(i==2){
// //         break;
// //     }
// // } 


// //Continue statement 
// for(i=0;i<15;i++)
// {
//     if(i%2==0){
// continue;

// }
// console.log(i)
//     }
   
//     //Label Block
//     let arrn=[["tiya","Viji","Veera","banu"],["Venu","Vinay","sandy"],["nandish","pooja","varalakshmi"]]
//     for(let il of arrn){
//         inner:
//         for(let eln of il){
//             if(eln.startsWith("V")){
//                 console.log("Found one name in v", eln);
//                 break inner;
//             }
//         }
//     }

//     //Math object
//     let c;
//     c=Math.PI
    

//     c=Math.E;
//     c=Math.round(5.6);
//     c=Math.round(5.3)
//     c=Math.floor(5.3)
//     c=Math.ceil(5.7);
//     c=Math.sqrt(5)
//     c=Math.abs(-85);
//     c=Math.trunc(2.58);
//     c=Math.pow(3,4)
//     c=Math.max(10,20,34,42,56)
//    // c=Math.min(10,20,34,42,56)
//     c=Math.random();
//     c=Math.floor((Math.random()*30+1));
    
//     console.log(c);

//     //concatenation
//     let first_Name="Praveen";
//     let Last_Name="Kumar";

//     let v=first_Name+" "+Last_Name;
//     console.log(v);

//      v=first_Name.concat(' ',Last_Name);
//      console.log("concat :"+ v);

//      //Function with return statement
//      function myfun(ab,ac){
// return ab+ac;
//      }
//      console.log(myfun(23,2));

//      function myfu(num){
//         return num*num
//      }
//      console.log(myfu(3));


//      //function expression
//      const square= function(num1){
//         return num1*num1

//      }
//      console.log(square(7))

//      //calling function
//     function callin(namef){
//       return "Hello" +" "+ namef+" " +"Welcome to my page"
//     }
//     let mart="Vijay";
//     console.log(callin(mart));

//     //
//     let n=7;
//     function fact(n){
//     if(n===0 || n===1){
//         return 1;
//     }
//     else{
//         return n*fact(n-1);
//     }
//     }
//     console.log(fact(n));

//     //function decleration
//     function myfun1(dec,dev){
// console.log(dev+dec)
//     }
//    //function expression
//    const exp=function(expr,pre){
//     return expr*pre
//    }
// console.log(exp(2,3))
// //function return 
// function compare(a, b) {
//     if (a > b) {
//         return -1;
//     } else if (a < b) {
//         return 1;
//     }
//     return 0;
// }
// console.log(compare(23,22));

// //
// function fune(As,bs){
//     return As*bs
// }
//   let res=fune(2,4)
//     console.log(res);

//    res=fune(2,4)
//     console.log(res);

//     //
   
//     function Gre(Msg){
//  let vat="Hello"+" "+Msg+" " +"Welcome"
//  return vat
//     }
//     let fff=Gre("Praveen")
//     console.log(fff);

//     //
//     function Green(Msg){
//         console.log("Hello" +" "+Msg+" "+"Welcome");
//     }
//     Green("Vijay")
//     Green("Bheem")

    //Hosting 
    let bjk =Hosti(67,2)
console.log(bjk);
    function Hosti(jkl,nkl){
        return jkl+nkl
    }

    //scope Global scope
    const jky="Biriyani"

    function myfun2(Msg1){
        return 'My favourite Food is:'+" "+Msg1;

    }
    console.log(myfun2(jky));

    //local scope
    function namef() {
        let van="Vijay"
        console.log(van);
    }
    namef()

    //block scope
    function fruit(){
        if(false){
            var fruit1="Apple"
            let fruit2="Banana"
            const fruit3="Orange"
            console.log(fruit2);
        }
        console.log(fruit1);
        //console.log(fruit2);

    }
    fruit()

    //lexical scope
    function foo1(){
        var veg="Tomato"
        let veg1="onion"
        const veg2="Brinjal"
        function foo2(){
            console.log(veg);
            console.log(veg1);
            console.log(veg2);
        }
        foo2();
    }
foo1();