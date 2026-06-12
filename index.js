// // Scope Concept

// var lang = "JavaScript";

// function learn(topic) {
//     lang = topic; /*this one means lang call var lang = "JavaScript";*/
//    var lang = topic;/*this one means lang call new lang*/

//    if(true){
//     const a ={
//         b:5
//     }
//     a.b =9;
//     console.log(a)
//    }
//     console.log(`I am learning ${topic}`)
// }

// learn("Python")

// console.log(`I know ${lang}`)

/*----------------------------------------------------------*/
    /*var,let,const concept*/
// let a = 5;
// let b = 6;

// a = b

// // console.log(a)
// // console.log(b)

// b = 9
// console.log(a)
// console.log(b)
/*----------------------------------------------------------*/

/*--------------------------------find----------------------------------------*/

// const fruits = ["Banana","Apple","lemon"];

// const result =fruits.find((f)=> f === "Apple" || f === "Banana")
// console.log(result)
/*----------------------------------------------------------*/

/*--------------------------------filter----------------------------------------*/
// const fruits = ["Banana","Apple","lemon"];

// const result =fruits.filter((f)=> f === "Apple" || f === "Banana")
// console.log(result)
/*----------------------------------------------------------*/

/*--------------------------------slice----------------------------------------*/

// const fruits = ["Banana","Apple","lemon","Mango","Pine Apple","Orange"];

// const result = fruits.slice(2,5)//Index num to Index num show only

// console.log(result)
// console.log("=======================================")
// console.log(fruits)
/*----------------------------------------------------------*/

/*--------------------------------splice----------------------------------------*/

// const fruits = ["Banana","Apple","lemon","Mango","Pine Apple","Orange"];

// const result = fruits.splice(1,2)//Index num to how many removes and splice change all eliment of array so  be careful

// console.log(result)
// console.log("=======================================")
// console.log(fruits)

/*----------------------------------------------------------*/

/*--------------------------------concat----------------------------------------*/

// const fruits = ["Banana","Apple","lemon","Mango","Pine Apple","Orange"];

// const result = fruits.concat("Malta","Naspati")//its add new eliment in last position but old eliment is same

// console.log(result)
// console.log("=======================================")
// console.log(fruits)

/*----------------------------------------------------------*/

/*--------------------------------push----------------------------------------*/

// const fruits = ["Banana","Apple","lemon","Mango","Pine Apple","Orange"];

// const result = fruits.push("Malta","Naspati")//its add new eliment in last position and gives new leanth but change fully array of eliments so be carefulllllllllllllllll

// console.log(result)
// console.log("=======================================")
// console.log(fruits)

/*----------------------------------------------------------*/


/*--------------------------------map----------------------------------------*/

// const fruits = ["Banana","Apple","lemon","Mango","Pine Apple","Orange","Apple","Apple"];

// const result = fruits.map((f)=>{
//         if(f === "Apple" ){
//             return "A"
//         }
//         else{
//             return "N/A"
//         }
// })//its add new eliment in last position and gives new leanth but change fully array of eliments so be carefulllllllllllllllll

// console.log(result)
// console.log("=======================================")
// console.log(fruits)

/*----------------------------------------------------------*/

/*--------------------------------reduce----------------------------------------*/

// const number = [1, 2, 3, 4, 5];

// const result = number.reduce((summation, currentValue) => summation + currentValue,0);

// console.log(result); // আউটপুট: 15 (এই নির্দিষ্ট Array-র জন্য সব শর্তই সত্য হবে)

/*----------------------------------------------------------*/


/*--------------------------------forEach----------------------------------------*/

// const fruits = ["Banana","Apple","lemon","Mango","Pine Apple","Orange"];

// fruits.forEach((fruit)=>{
//     console.log("I want to eat "+ fruit) //forEach create a loop and give from array a single eliment
// })

/*----------------------------------------------------------*/

/*----------------------------------------------------------*/


// /*--------------------------------for...of----------------------------------------*/

// const fruits = ["Banana","Apple","lemon","Mango","Pine Apple","Orange"];

// for( fruit of fruits){
//     if(fruit === "Mango"){
//         console.log("After Get Mango,Loop will be stop")
//         break
//     }
//     console.log(fruit)
// }

// /*----------------------------------------------------------*/
// /*--------------------------------for...in----------------------------------------*/

const companey ={
    name :"AdventureAi",
    founder:"Shahid",
    year:2023
}

for(eliment in companey){
    // console.log(eliment)//its just shows companeys elimentj
}

for(key in companey){
    // console.log(companey[key])//its just shows companeys key
}

// /*----------------------------------------------------------*/

// ------------------------------object--------------------------//
 
const v = "popularity";
const mobile ={
    name:"Apple",
    modelNo :"Iphone16Pro",
    color:"Gold",
    price:"185000",
    v
}

// console.log(Object.keys(mobile))
// console.log(Object.values(mobile))
// console.log(Object.entries(mobile))

// mobile[v] ="100%";
// console.log(mobile)

/*----------------------------------------------------------*/

/*----------------------------spread ans rest oparator---------------*/
// spread
const fruits = [{
    name:"Shahid"
},
{
    name:"Ahamed"
}]

const result =[...fruits]
// console.log(fruits)
// -----------------------------
// console.log(result)

// rest

function sum(text,...rest){
   const res =rest.reduce((sum,curr)=>{
   return  sum+curr;
  },0)
//   console.log(`${text}${res}`)
}

sum("This is the  total sum: ",1,2,45,59,25,100)

/*-----------------------------------------------------------*/

/* In javaScript have truthy and falsey value
falusy value is : false,undifine,null,NaN,"",0
and all is truthy value*/

/*--------------------------------------------------*/

/*------------------turanry value----------------------------*/
const a =10
const re = a % 2 === 0 ? "even":"odd"
// console.log(re)

/*---------------------------------------------------------------*/

/*--------------------Destructuring-------------------------------------------*/


const user ={
    name:"Shahid",
    age:32,
    profession:"IT Engineer",
    education:{
        degree :"gradute",
        versity:"Dhaka  University",
        location:{
            city:"Dhaka",
            address:"Shabag"
        }
    }
}

const {education:{location:address}={}} = user
console.log(address)

/*--------------------------------------------*/




