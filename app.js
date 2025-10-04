// JAVASCRIPT PRACTICE
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
//  TEST

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

// Conditional expressions

// let a = prompt("How old are you ?????")
// a = Number.parseInt(a);
// if (a > 18) {
//     alert("you can Enter!!!")

// }
// else{
// alert("sorry you can't Enter")
// }

// let a = prompt("how old are you ??");
// a = Number.parseInt(a);
// if (a<0) {
//     alert("Don't even think about it!!");
// }
// else if (a<10){
//     alert("Sorry!! you cannot drive at this age.");
// }
// else if (a<18 && a>=10) {
//     alert("you can drive a car but in a video games...");   
// }
// else{
//     alert("YES!!! you can drive a car---");
// }

// console.log("you can " , (a<18? "not drive" : "drive"));

// condition likho agar condition true hai to 1 wala run hoga or agar false hai to 2 wala run hoga

// let a = prompt("write your percentage");
// a = Number.parseInt(a);
// if (a>=80) {
//     alert("you got A-1 grade");
// }
// else if (a<=79 && a>=70) {
//     alert("you got A grade");
// }
// else if (a<=69 && a>=60) {
//     alert("you got B grade");
// }
// else if (a<=59 && a>=50) {
//     alert("you got C grade");
// }
// else if (a<=49 && a>=40) {
//     alert("you got D grade");
// }
// else if (a<=39 && a>=33) {
//     alert("you got E grade");
// }
// else {
//     alert("you are FAIL bacha")
// }
// console.log("I feel" , (a>=33? "proud of you" : "bad for you"));



// jo value di hai wo bhi add krna hai to = lagao =< isme like 10=<20 agar 20 or 10 ko add krna hai to = lagao
//  Test
//                             QUISTION NO 1
// let age = prompt("enter your age");
// if (age>10 && age<20) {
//     alert("you can enter")
// } else {
//     alert("no cannot enter")
// }
//                             QUISTION NO 2
// let age = prompt("your age");
// switch (age) {
//     case '15':
//         console.log("your age is not valide");
//         break;
//     case '16':
//         console.log("not a valide age");
//         break;
//     case '17':
//         console.log("yes you can enter");
//         break;
//     default:
//         console.log("agaeeeeee");
//         break;
// }

// LOOPS
// FOR LOOP
// WHILE LOOP
// DO WHILE LOOP
// FOR OF LOOP
// FOR IN LOOP
// FOR LOOP
/*for (let i = 0 ; i < 10 ; i++){
    console.log(i);
}
let mul = 2
let a = prompt("write any num to know their squar");
a = Number.parseInt(a);
for (let i = 1; i < a; i++) {
    mul *= (i * 2)
}

console.log(mul +" is a squar of " + a );*/

// FOR IN LOOP   [ye jub use hota hai jub hame sirf keys ko excess krna ho] 

// let obj = {
//     ayesha : 100,
//     sara : 90,
//     munawar : 85,
//     abdullah : 50
// }
// for (let a in obj) {
//     console.log("marks of " + a + " are " + obj[a]);
// }
// let coll = {
//     BMW : 3,
//     ROLLSROYCE : 2,
//     SUPRA : 1,
//     BUGATI : 1,
//     GWAGON : 1
// }
// for (let a in coll) {
//     console.log("Amount of each car with brand name i have is " + a +" "+ coll[a] );

// }

// WHILE LOOP     [jub condition true hogi to chalega loop]

// let a = prompt("enter any numnber");
// a = Number.parseInt(a);
// let i = 0;
// while (i<a) {
//     console.log(i);
//     i++;
// }DO WHILE LOOP   [CONDITION BAAD ME CHEACK HOGI CODE PEHLE RUN HOGA 1 baar zaroor run hoga]
// let a = prompt("enter any number")
// a = Number.parseInt(a);
// let i = 0;
// do {
//     console.log(i);
//     i++; 
// } while (i<a);



// FUNCTION
// function sum(x,y) {
//     return 2 + (x + y) / 2
// }

// let a = 2;
// let b = 9;
// let c = 3;

// console.log("sum of a and b " , sum(a,b));
// console.log("sum of a and b " , sum(a,b));
// console.log("sum of a and b " , sum(a,b));
// console.log("sum of a and b " , sum(a,b));

// const greeting = ()=> {
//     console.log("how are you ...");
//     return("I'm fine")
// }
// let a = greeting();
// console.log(a);

//                             QUISTION NO 1
// let marks = {
//     ayesha : 100,
//     sara : 80,
//     abdullah : 50
// }
// for (let i=0; i<Object.keys(marks).length; i++) {
//     console.log("The marks of " + Object.keys(marks)[i] + "are " +marks[Object.keys(marks)[i]]);
// }
//                             QUISTION NO 2
// for (let key in marks) {
//     console.log("The marks of " + key + "are " + marks[key]
//     );

// }
//                             QUISTION NO 3
// let crn = 5;
// let que = prompt("Enter the correct number!!!");
// que = Number.parseInt(que);
// if (crn === que) {
//     alert("correct answer");
// }
// else{
//     alert("wrong number");
// }

// STRING
// let name = "Ayesha"
// console.log(name[0]);
// console.log(name[1]);
// console.log(name[2]);
// console.log(name[3]);
// console.log(name[4]);
// console.log(name[5]);

// TEMPLATE LITRALS                   they use backtics ` ` instead of quotes ' ' , " "
// let girl1 = 'Ayesha'
// let girl2 = 'sara'
// let sentence = `girl1 is a sister of girl2`
// let sentence = `${girl1} and ${girl2} are sisters`
// console.log(sentence);

// ESCAPE SEQUENCE CHARACTERS
// let sentence1 = 'i din\'t know about it'
// let sentence2 = 'bana\na'
// console.log(sentence2);

// let name = "AYESHA";
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());

// SLICE METHOD
// console.log(name.slice(1,4));
// console.log(name.slice(2));
// console.log(name.replace("AYE" , "WHY"));
// let freind = "SARA";
// console.log(name.concat(" is a freind of ", freind));


// let fr ="ayesha";
// console.log(fr[0]);
// console.log(fr[1]);
// console.log(fr[2]);
// console.log(fr[3]);
// console.log(fr[4]);
// console.log(fr[5]);

// for (let i = 0; i<=5; i++) {
//     console.log(fr);

// }
// console.log("AYE\"".length);     ANS => 4

// QUESTION No. 1

// let sentece = "Please give Rs 1000";
// console.log(sentece.slice(15));

// QUESTION No. 2
// let line = 'were you able to do it ?'
// console.log(line.replace('do' , 'bear'));

// ARRAYS
// let board_grades = ["A-1", "A", "F", "Coming Soon!!"]
// board_grades[3] = "C";
// console.log(board_grades[0]);
// console.log(board_grades[1]);
// console.log(board_grades[2]);
// console.log(board_grades[3]);
// console.log(board_grades[4]);      undefined
// console.log("board grades of complete 4 years are", board_grades.length);
// board_grades[2] = "D";
// console.log(board_grades);

// ARRAY METHOD
// let num = [1, 8, 24, 20]
// let a = num.toString();
// console.log(a);

// join
// let num = [2, 5, 66, 786];
// let a = num.join("+");
// console.log(a, typeof );

// POP
// let a = num.pop()
// console.log(num, a);  a likhne se nIkala hoa element wapis ata hai 

// push
// let a = num.push(2008)
// console.log(num, a);     add an element 

// let a = num.shift()
// console.log(num, a);       remove the element

// unshift
// let a = num.unshift(1)
// console.log(num, a);      add an element     

// delete
// console.log(num.length);
// delete num[0]
// console.log(num.length);

// sort
// let num = [123, 33, 76, 975, 4, 9, 48, 29];
// num.sort();
// console.log(num);
    




// delete from here
// sort
// let numb = [378, 338, 08, 975, 4, 9, 45, 29];
// numb.sort();
// console.log(numb);

// sort
// let numb = [3536, 27,  083, 975, 4, 9, 45, 29];
// numb.sort();
// console.log(numb);





