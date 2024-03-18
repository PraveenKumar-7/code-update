// //break statement
// for(i=0;i<3;i++){
//     console.log(i)
//     if(i==2){
//         break;
//     }
// } 


//Continue statement 
for(i=0;i<15;i++)
{
    if(i%2==0){
continue;

}
console.log(i)
    }
   
    //Label Block
    let arrn=[["tiya","Viji","Veera","banu"],["Venu","Vinay","sandy"],["nandish","pooja","varalakshmi"]]
    for(let il of arrn){
        inner:
        for(let eln of il){
            if(eln.startsWith("V")){
                console.log("Found one name in v", eln);
                break inner;
            }
        }
    }

    //Math object
    let c;
    c=Math.PI
    

    c=Math.E;
    c=Math.round(5.6);
    c=Math.round(5.3)
    c=Math.floor(5.3)
    c=Math.ceil(5.7);
    c=Math.sqrt(5)
    c=Math.abs(-85);
    c=Math.trunc(2.58);
    c=Math.pow(3,4)
    c=Math.max(10,20,34,42,56)
   // c=Math.min(10,20,34,42,56)
    c=Math.random();
    c=Math.floor((Math.random()*30+1));
    
    console.log(c);

    //concatenation
    let first_Name="Praveen";
    let Last_Name="Kumar";

    let v=first_Name+" "+Last_Name;
    console.log(v);

     v=first_Name.concat(' ',Last_Name);
     console.log("concat :"+ v);

     //Function with return statement
     function myfun(ab,ac){
return ab+ac;
     }
     console.log(myfun(23,2));

     function myfu(num){
        return num*num
     }
     console.log(myfu(3));


     //function expression
     const square= function(num1){
        return num1*num1

     }
     console.log(square(7))

     //calling function
    function callin(namef){
      return "Hello" +" "+ namef+" " +"Welcome to my page"
    }
    let mart="Vijay";
    console.log(callin(mart));

    //
    let n=7;
    function fact(n){
    if(n===0 || n===1){
        return 1;
    }
    else{
        return n*fact(n-1);
    }
    }
    console.log(fact(n));
