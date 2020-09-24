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


// les fonctions


//1

/* 
* @param {string} value
* @return {string | boolean} 
* 
*/
// function myPutStr(value){

//     return value.match(/^\d+$/) 
//         ? parseInt(value) === 42 
//         ? "42 yeahh" 
//         : "Et pourquoi pas 42 ?"
//         : false;
      
// }

// myPutStr("15");

//2

/* returns the area of an entered surface
* @param {object} surface
* @return {string} surface m2 || error msg
*/
// function computeSurfaceM2(surface){

//     var surfaceM2;
//     switch(surface.type){
//        case "carre":
//        case "rectangle": 
//           surfaceM2 = surface.width * surface.height;
//           break;
//        case "triangle":
//           surfaceM2 = surface.base * surface.height / 2;
//           break;
//        case "losange": 
//           surfaceM2 = surface.firstDiagonal * surface.secondDiagonal / 2;
//           break;
//        case "parallelogram":
//           surfaceM2 = surface.base * surface.height;
//           break;
//        case "disk": 
//           surfaceM2 = surface.radius**2 * Math.PI();
//           break;
//        default:
//           return "Ce n'est pas une forme prise en compte";
//           break;
//     }

//     return "Surface en m2 : " + surfaceM2;
// }

// console.log(
// computeSurfaceM2({type:'rectangle', width:10,height:15}));


//3
    /*  creates a button with click listener
    * and inserts it to page
    */
// function createMyButton(){
// var myButton = document.createElement("button");
// myButton.addEventListener("click",detectMyAgeByNight); 
// document.querySelector('body').appendChild(myButton);
// }

    /*  tells if can enter into nightclub
    */
// function detectMyAgeByNight(){
//    var age = prompt("Quel âge avez-vous ?");
//    alert(
//    age.match(/^\d+$/) ?
//    age >= 42 ? "Vous pouvez entrer, boss.."
//    :age < 18 ? "Vous ne pouvez pas entrer, vous avez " + age + " ans"
//    :"Vous pouvez enter"
//    :"Veuillez entrer un nombre"
//    );
// }

// createMyButton();

//4
   /* generates a matrix and displays it on page
   *@param {int[int[]]}
   */
// function matrixGenerator(array){
//     var matrix = document.createElement("table");
    
//     for(var i=0;i<array.length;i++){
//         var tr = document.createElement("tr");
//         for(var j=0;j<array[i].length;j++){
//           var td = document.createElement("td");
//           td.insertAdjacentHTML("beforeend","<span>"+array[i][j]+"</span>");
//           tr.appendChild(td);
//         }
//         matrix.appendChild(tr);
//     }
    
//     document.querySelector("body").appendChild(matrix);
// }

// matrixGenerator(
// [[1, 1, 1, 1, 1], [0, 1, 0, 1, 0], [1, 0, 0, 1, 1]]
// );

//5

/* displays the clock on page
* @param {date} the current datetime
*   
*/
// function displayClock(){
//     var htmlClock;
//     if(!document.querySelector("clock")){
//         htmlClock = document.createElement("span");
//         var body = document.querySelector("body");
//         body.appendChild(htmlClock);
//     }

//     var currentDate = new Date();
//     htmlClock.innerText = "Il est actuellement : " 
//     + needLeadingZero(currentDate.getHours()) 
//     + "h : " 
//     + needLeadingZero(currentDate.getMinutes())
//     + " et " + needLeadingZero(currentDate.getSeconds()) + " secondes";
    
        /* adds a zero if needed
        *@param {int} 
        *@return {string} 
        */
//     function needLeadingZero(number){
//         return number.toString().length == 2 ? number
//         : "0"+number.toString();  
//     }
// }

// window.setInterval(displayClock, 1000);

//6
var fiArray = [1,2,3,7];
var newArray = [];

/* Loops through array and calls fibonacci()
*/
function loopArray(){
  for(var i=0; i<fiArray.length;i++){
      fiArray[i] = fibonacci(fiArray[i]);
  }
  console.log(fiArray);
}

/* applies fibonnaci suite to a number 
*@param {number} number to use for fibonacci suite
*@return {number} number after fibonacci suite 
*/
function fibonacci(number){
  if(number < 2)
    return number;
  
  return fibonacci(number - 1) + fibonacci(number - 2);  
}


/* Sums array numbers 
*@param {int[]} intial array
*@return {number} sum of numbers 
*/
function addNumbers(){
    var sum =0;
    for(var i=0;i<fiArray.length;i++){
        sum += fiArray[i];
    }

    return sum;
}

/* Sorts the array 
*@param {int[]} initial array
*@return {int[]} reverse sorted array
*/
function reversedSort(){
    var changed;
    do{
        changed = false;
        for(var i=0; i < fiArray.length-1; i++) {
            if(fiArray[i] < fiArray[i+1]) {
                var tmp = fiArray[i];
                fiArray[i] = fiArray[i+1];
                fiArray[i+1] = tmp;
                changed = true;
            }
        }
    } while(changed);

}

loopArray();
