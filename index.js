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
