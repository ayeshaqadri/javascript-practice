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

let a = null;
let b = 158;
let c = true; //can also be false
let d = BigInt("158") + BigInt("5")
let e = "Ayesha"
let f = Symbol("I am a nice symbol")
let g = undefined
console.log(a,b,c,d,e,f,g);

// hame kese pata chalega inki type kia hai for this we need to type
console.log(typeof e);

// Objects ==> they are non primitive