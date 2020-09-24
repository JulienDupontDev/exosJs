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

// 'use strict';

// var age = prompt("Quel âge avez-vous ?");
// alert(age >= 42 ? "Vous pouvez entrer, boss..":age < 18 ? "Vous ne pouvez pas entrer, vous avez " + age + " ans":"Vous pouvez enter");

// var rand = Math.floor(Math.random() * (30) +1); 
// console.log(rand)
// alert(rand <=10 ? "Cool" : rand < 20 ? "Tepid" : "Warm");      

// var currentDay;
// switch(new Date().getDay()){
//     case 1: currentDay = "Lundi";
//     break;
//     case 2: currentDay = "Mardi";
//     case 3: currentDay = "Mercredi";
//     break;
//     case 4: currentDay = "Jeudi";
//     break;
//     case 5: currentDay = "Vendredi";
//     break;
//     case 6: currentDay = "Samedi";
//     break;
//     case 7: currentDay = "Dimanche";
//     break;
// }
// alert("Nous sommes le " +currentDay);

// var stories = [
//     "Il était une fois l'histoire d'un grec qui s'est perdu dans Troie.",
//     "Shrek était sur le point de retrouver Fiona et c'est la que la gauffre au nutela lui est apparue. La grande réponse sur la vie, l’univers et le reste !",
//     "Une oiseau chantait tranquillement sur son arbre et soudain PAF coup de fusil..."
// ]

// alert(stories[parseInt(prompt("Entrez 1, 2 ou 3 pour avoir une histoire"))-1]);

// var test = 
// alert(!test ? "cette variable n'existe pas":42);

// var family = "Ce chiffre fait partie de la famille des ";
// var randomNumber = Math.floor(Math.random() * (41-1)+1).toString();

// if(randomNumber.length !=1){
//    switch(parseInt(randomNumber[0])){

//    case 1: family += "10";
//    break;
//    case 2: family +="20";
//    break;
//    case 3: family += "30";
//    break;
//    case 4: family += "40";
//    break;
//     };
// }else{
//    family +="0";
// }

// console.log(family)


//Les boucles tp3


// 1
// var requiredTables = [1,2,3,5,8];
// for(var i=0;i<requiredTables.length;i++){
//     for(var j=1;j<11;j++){
//         console.log(j + " * "+ requiredTables[i] + " = " + j*requiredTables[i] + "\n");
//     }
// }

// 2
//   var list = document.createElement('ul');
//   for(var j=1;j<9;j++){
//        list.insertAdjacentHTML("beforeend", "<li>" + j.toString() + " * 5 = " + j*5 + "</li>");
//   }

//   document.querySelector('body').appendChild(list);

//3

// var i=1;
// while(true){
//     console.log(i*5)
//     i++;
//     if(i>10){
//       break;
//     }

// }

//4

// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(array.map(x => x * 5))

//5

// var object = {name:'42',age:'42'};
// var temp;
// for(var key in object){
//     if(key == "name"){
//        temp = object[key];
//        continue;
//     }
//     console.log(parseInt(temp) * parseInt(object[key]));
// }


//6

// var nbr = [5, 4, 3, 2, 1];
// var changed;
// do{
//     changed = false;
//     for(var i=0;i<nbr.length-1;i++){
//         if(nbr[i] > nbr[i+1]){
//             var temp = nbr[i];
//             nbr[i] = nbr[i+1];
//             nbr[i+1] = temp;
//             changed = true;
//         }
//     }
// }while(changed);
// console.log(nbr);

//7

// var clothes = ["T-shirt", "Sweet-shirt", "Pullover"];

// for(var cloth in clothes){
//     var price = Math.floor(Math.random() * (90 - 2) -2);
//     clothes[cloth] = {
//         nameCloth: clothes[cloth],
//         price: {untaxed: price,tva: price*0.2},
//         sizes: ["XS","S","M","L","XL","XXL"]
//     }
// }
// console.log(clothes)


//8
// var select = document.createElement("select");

// for(var i = new Date().getFullYear(); i>=1980;i--){
//     select.insertAdjacentHTML("beforeend","<option value='"+i+"'>" + i +"</option>");    
// }

// document.querySelector('body').appendChild(select);
