// var a=1_00;
// var b=2_00.5;
// var c=1e2;
// var d=2.4;
// // smallest number & integer
// // use the variable a & d one time to get output 10000
// //get integer 2 from d variable with 4 methods
// //use variable b & d to get string 66.67 and number 67
//  console.log(Math.trunc(Math.min(a,b,c,d)));
//  console.log(Math.pow(a,Math.floor(d)));
//  console.log(Math.floor(d));
//  console.log(parseInt(d));
//  console.log(Math.round(d));
//  console.log(Math.trunc(d));
//  console.log(Math.ceil(Math.floor(b)/Math.ceil(d)))
//  console.log((Math.floor(b)/Math.ceil(d)).toFixed(2))
// var a="hello from javascript"
 
 
// //includes slice & charAt to get from
//  console.log(a.slice(a.indexOf(a.charAt(6)), a.indexOf(a.charAt(11))) )
// //8S SSSSSSSS
//  console.log(((a.slice(15,16).toUpperCase())).repeat(8))
// //return array ['hello']
//  console.log(a.split(" ",1))
// //use only substr and template literals (``)to get hello script
//  console.log(`${a.substr(0,5)} ${a.substr(15)}`)
 
//  //solution must be dynamic and string may change make the first and last letter capital and any letter in tha half small
 
//  console.log(((a.slice(0,1)).toUpperCase()) +((a.slice(1,19)).toLowerCase()) + (a.charAt(a.length-1)).toUpperCase())


// let a = 10;
// //<10    10:40    >40   make it in ternery operator

// (a < 10)?console.log(10):(a >= 10 && a <= 40)?console.log("10 to 40"):(a > 40) ?console.log(">40") :  console.log("unknown")
// let text = "Your JavaScript";

//  //task 2
// if (((text.length) * 2).toString() === "30") {
//   console.log("30"); //30
// }
// // //task3
// if (text.substr(5,1) === "J") {
//   console.log("J"); //J
// }
// // //task 4
// if (typeof(text) == "string") {
//   console.log("string"); //string
// }
// // //task 5
// if ( typeof(text.length) === "number") {
//   console.log("number"); //number
// }
// // //task 6
// if ((text.substr(0,4)).repeat(2) === "YourYour") {
//   console.log("your your"); //your your
// }
// // //task7
// var degree=65   //(if statment)
// // degree>50 -->fail , 50<degree>70 -> good  degree > 70 ->excellent
// if(degree<50) console.log("fail");
// else if(degree>50 && degree<70) console.log("good");
// else{
//     console.log("excellent")
// }

// //task #1
// let myFriends = ["Sara", "Soha", "Ahmed", "Ali"];
// // ['Sara', 'Soha', 'Ahmed']
//  console.log(myFriends.slice(0,3))
// //task #2
// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = (arrOne.concat(arrTwo)).sort().reverse();
// console.log(finalArr)
// // Write One Single Line Of Code
// // ["Z", "X", "D", "C", "B", "A"]
 
// //task 3
// let arr1 = ["A", "C", "X"];
// let arr2 = ["D", "E", "F", "Y"];
// let allArrs = (arr1.slice(-1).concat(arr2.slice(-2))).sort().join("").toLowerCase();
 
// console.log(allArrs); // fxy
 
// //----------------------// ++ --
// let Zero = 0;
// let counter = 3;
// let my = ["Ahmed", "Maryan", "Elham", "Osama", "Gamal", "Ameer"];
 
// //task #1
// // ["Osama", "Elham", "Maryan", "Ahmed"];
//  console.log((my.slice(Zero,++counter)).reverse())
//  //counter=4
// //task #2
// // ["Elham", "Maryan"]
// counter--;//3
//  console.log( (my.slice(++Zero,counter)).reverse())
 
// //task #3
// // "Elryan"
//  console.log(my[--counter].slice(--Zero,counter) + my[++Zero].slice(counter))
// //task #4
// // "aN"
// console.log(my[Zero].slice(-counter,-Zero) +my[Zero].slice(-Zero).toUpperCase())



 // Task 1
// //print the data in userArray
// //#note stop at cairo and skip phone number
// let userArray=['ahmed',30,'phoneNumber',true,'cairo',false]
// for(let i=0;i<6;i++){
//     if (userArray[i]=="cairo") break;
//     else if(userArray[i]=="phoneNumber") continue;
// console.log(userArray[i])
// }
// // //___________________________________________//
// // Task #2
// var friends=['ali',2,'ahmed',3,5,'sara']
// var names=[]//strings from friends
//  for(let i=0;i<6;i++){
//     if(typeof(friends[i])=="number") continue;
//     names.unshift(friends[i]);
//   }
//   console.log(names)
var friends=['Ahmed',"Sayed","Eman","Mahmoud","Ameer","Osama","Sameh"]
let letter='a'
//1=>Sayed
//2=>Eman
//3=>Mahmoud
//4=>Osama
//5=>Sameh
//  for(let i=0,j=0;i<friends.length;i++){
//    if(friends[i][0]==letter.toUpperCase()){
//     continue
//    }
//    j++
//     console.log(`${j} => ${friends[i]}`);
//  }
// let products=['Product A','Product B','Product C','Product D']
// let colors=['red','green','blue']
// let model=['2022','2024']
// let imgs=["image/port7-370x390.jpg","image/port2-5-360x380.jpg"]
// for(let i=0; i<products.length;i++){
//   document.write(`<div class="w-25 bg-light mx-auto my-2">`)

// document.write(`<h1 class="text-primary bg-dark py-2">${products[i]} </h1>`)
// document.write(`<h5 class="text-danger">--color-- </h5>`)
// for(let j=0 ;j<colors.length;j++)
//   document.write(`<span>${colors[j]} </span>`)

// document.write(`<h5 class="text-warning">--model-- </h5>`)
// for(let l=0 ;l<model.length;l++)
//   document.write(`<span>${model[l]} </span>`)

// document.write(`<h5 class="text-success">--image-- </h5>`)
// for(let b=0 ;b<imgs.length;b++){
//   document.write(`<img src="${imgs[b]}" class="w-50">`)
// }
  

//   document.write(`</div>`)
// }

// #task 1

// create function that take start year and last year and return  select in document for this years
function select(start,end){
    let select = document.createElement("select")
    for(let v=start;v<=end ; v++){
        let option= document.createElement("option")
        option.value=v;
        option.textContent=v;
        select.appendChild(option);
     
    }
    document.body.appendChild(select);
}
select(2000,2006)
 
// #task 2

// create function that take the name of array and print all data in it
 let arr = ["sleem","hashem",19]
function data(arr){
    for(let j=0;j< arr.length;j++){
        console.log(arr[j])
    }
}
data(arr);
// #task 3

// create function to make looing in some of numbers and take from you the firstNum ,endNum ,continueNum ,breakNum
 function check (f1 ,end ,contin,brk){
for(let i=f1 ;i<=end ;i++){
    if(i===contin){
        continue
    }
    else if(i==brk) break;
    console.log(i)
}
 }
 check(1,10,5,7)