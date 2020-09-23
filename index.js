'use strict';


//My Digital School Forever

/*My Digital School forever 
every day*/

var string = "42";
var number = 42;
var float = 42.0;
var boolean = true;
var array = [42];
var notDefined = undefined;
var isNull = null;

var my42count = "quarante-deux";

var newVariable = notDefined === undefined ? 42 : notDefined;
var myArray42 = ["q", "u", "a", "r", "a", "n", "t", "e", "-", "d", "e", "u", "x"];
var myArray42Len = myArray42.length;
var myArray42ToString = myArray42.join("") + ". La grande réponse sur la vie, l'univers et le reste !";
var rand = Math.floor(Math.random() * (43-1) +1) == 42 ? true : false;
var compute42 = (7*6).toString();
var number42 = 42424242;
var a =24;
var b = 42;
a = a + b;
b = a -b;
a = a - b;



number42 = number.toString().match(/.{1,2}/g).map(currentNumber=>{
    return "quarante-deux";
}).join("");

console.log("my42 length: " + my42count.length, myArray42ToString, rand, compute42);
console.log(typeof myArray42,typeof number, typeof float, typeof boolean, typeof notDefined, typeof isNull);
console.log(number42, "a : " + a, "b :" + b)


