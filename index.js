'use strict';


//My Digital School Forever

/*My Digital School forever 
every day*/

// var string = "42";
// var number = 42;
// var float = 42.0;
// var boolean = true;
// var array = [42];
// var notDefined = undefined;
// var isNull = null;

// var my42count = "quarante-deux";

// var newVariable = notDefined === undefined ? 42 : notDefined;
// var myArray42 = ["q", "u", "a", "r", "a", "n", "t", "e", "-", "d", "e", "u", "x"];
// var myArray42Len = myArray42.length;
// var myArray42ToString = myArray42.join("") + ". La grande réponse sur la vie, l'univers et le reste !";
// var rand = Math.floor(Math.random() * (43-1) +1) == 42 ? true : false;
// var compute42 = (7*6).toString();
// var number42 = 42424242;
// var a =24;
// var b = 42;
// a = a + b;
// b = a -b;
// a = a - b;



// number42 = number.toString().match(/.{1,2}/g).map(currentNumber=>{
//     return "quarante-deux";
// }).join("");

// console.log("my42 length: " + my42count.length, myArray42ToString, rand, compute42);
// console.log(typeof myArray42,typeof number, typeof float, typeof boolean, typeof notDefined, typeof isNull);
// console.log(number42, "a : " + a, "b :" + b)


//tp 2

'use strict';

var age = prompt("Quel âge avez-vous ?");
alert(age >= 42 ? "Vous pouvez entrer, boss..":age < 18 ? "Vous ne pouvez pas entrer, vous avez " + age + " ans":"Vous pouvez enter");

var rand = Math.floor(Math.random() * (30) +1); 
console.log(rand)
alert(rand <=10 ? "Cool" : rand < 20 ? "Tepid" : "Warm");      

var currentDay;
switch(new Date().getDay()){
    case 1: currentDay = "Lundi";
    break;
    case 2: currentDay = "Mardi";
    case 3: currentDay = "Mercredi";
    break;
    case 4: currentDay = "Jeudi";
    break;
    case 5: currentDay = "Vendredi";
    break;
    case 6: currentDay = "Samedi";
    break;
    case 7: currentDay = "Dimanche";
    break;
}
alert("Nous sommes le " +currentDay);

var stories = [
    "Il était une fois l'histoire d'un grec qui s'est perdu dans Troie.",
    "Shrek était sur le point de retrouver Fiona et c'est la que la gauffre au nutela lui est apparue. La grande réponse sur la vie, l’univers et le reste !",
    "Une oiseau chantait tranquillement sur son arbre et soudain PAF coup de fusil..."
]

alert(stories[parseInt(prompt("Entrez 1, 2 ou 3 pour avoir une histoire"))-1]);

var test = 
alert(!test ? "cette variable n'existe pas":42);

var family = "Ce chiffre fait partie de la famille des ";
var randomNumber = Math.floor(Math.random() * (41-1)+1).toString();

if(randomNumber.length !=1){
   switch(parseInt(randomNumber[0])){
       
   case 1: family += "10";
   break;
   case 2: family +="20";
   break;
   case 3: family += "30";
   break;
   case 4: family += "40";
   break;
    };
}else{
   family +="0";
}

console.log(family)
