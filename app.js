// COMMENTS IN JS 
// this is a single line comment
/*and this
is a
multiline comment */

// Primitives and Objects in JavaScript

// Primitives
         
//   VALUES     :    MEANING

// N = NULL          ek esa variable jisme kuch hai hi nahi...   
// N = NUMBER        simple its just a number
// S = SYMBOL        simple its just a symbol
// S = STRING        " " ander di hoa naam etc
// B = BOOLEAN
// B = BIGINT
// U = UNDEFINED      kuch dia hi nahi hai value me 

// let a = null;
// let b = 158;
// let c = true; //can also be false
// let d = BigInt("158") + BigInt("5")
// let e = "Ayesha"
// let f = Symbol("I am a nice symbol")
// let g = undefined
// console.log(a,b,c,d,e,f,g);

// hame kese pata chalega inki type kia hai for this we need to type
// console.log(typeof e);

// Objects ==> they are non primitive

// const items = {
//     "Ayesha" : true,
//     "Sara" : false,
//     "Sadia" : 100,
//     "Abdullah" : undefined
// }
// console.log(items["Ayesha"]);


// inka use kidhr hota hai agr ahame students list banani ho unhe call krne ke lie like just a practice code

                            // DAY 2


//                             QUISTION NO 1
// let a = "Ayesha"
// let b = 5
// console.log(a + b);
//                             QUISTION NO 2
// let a = null
// let b = 2008
// console.log(typeof (a + b));
//                             QUISTION NO 3
// const a ={
//     name : "Ayesha",
//     age : 17,
//     carrier : "Web and app develper"
// }
// a ['name'] = "Ayesha qadri"
// a ['Date of birth'] = "1-05-2008" 

// console.log(a);
//                             QUISTION NO 4
// const words = {
//     hardwork : "a great deal of effort or endurance.",
//     Structure:" the way something is built or organized.",
//     Component: "An individual part or element of a larger whole"
// }

// console.log(words);

// console.log("Structure");


// OPERATORS & EXPRRESIONS
//  1 + 3 = 4
//  1 ANS 3 is our operants
//  + is our operator
//  4 is ur result 


// increament and decrement 
// let a = 5
// // let b = 8
// console.log("a++ = ", a++);    5
// console.log("++a = ", ++a);    7
// console.log("a++ = ", a++);    7
// console.log("a-- = ", a--);    8
// console.log("a++ = ", a++);    7
// value : 8
// let a = 8
// value :9

// console.log("a-- = ", a--);    8
// console.log("a = ", a);        7
// console.log("a++ = ", a++);    7
// console.log("++a = ", ++a);    9
// console.log("a++ = ", a++);    9
// console.log("a-- = ", a--);    10

// ASSINGMENT OPERATORS
// =    x=y
// +=   x=x+y
// -=   x=x-y
// *=   x=x*y
// /=   x=x/y
// +%   x=x%y
// +**   x=x**y

// COMPARISSION OPERATORS

    // [ == , != , === , <= , >= ]


// LOGICAL OPERATORS
// &&
// let x = 5;
// let y = 6;
// console.log(x<y && x!=y);
// ans will be (true)

// || agr ek bhi valu true hogai tho true hi return karega like
// let x = 3;
// let y = 7;
// console.log(x!=y || x==y || x===y); ans wil be true but if all value will be falsw then ans will be false like 
// console.log(x==y || x>=y || x===y); now ans is false

