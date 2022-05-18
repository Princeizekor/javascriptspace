// function move() {
//     var elem = document.querySelector(".bar");   
//     var width = 1;
//     var id = setInterval(frame, 80);
//     function frame() {
//       if (width >= 70) {
//         clearInterval(id);
//       } else {
//         width++; 
//         elem.style.width = width + '%'; 
//       }
//     }
//   }


























































// // var myButton = "First Button";
// // function myFunction(arr) {
// //     let myButton = "Checked";
// //     if (arr === "Checked") {
// //         return myButton
// //     }
// //     return false
// // }
// // myFunction("food")
// // console.log(myButton)
// // console.log(myFunction())
// //checking function statement
// // function secondFunction(arr) {
// //     let show = "tested";
// //     if (arr != undefined) {
// //         arr = "This proccess was " + show;
// //     }
// //     alert (arr)
// // }
// // secondFunction()
// // console.log(secondFunction("place"))
// // function showMessage() {
// //   let userName = "Izekor Paul on " + Date(5/12/2022) ; // declare a local variable

// //   let message = 'This page was created by , ' + userName; // Bob
// //   alert(message);
// // }

// // // the function will create and use its own userName
// // showMessage();

// // alert( userName ); //
// // console.log(showMessage())

// //prompted function
// // function checkAge(age) {
// //     if (age >= 20) {
// //         return true;
// //     } else {
// //         return confirm("Make sure you have been granted permission for this");
// //     }
// // }
// // let age = prompt('How old are you ?', "must be " + 20);
// // if (checkAge(age)) {
// //     alert('Access granted')
// // } else {
// //     alert('Access denied not up to age')
// // }

// function checkPassword(pass) {
//     if (pass.match(/^(\w+\s?)*$/i)) {
//         return true;
//     } else {
//         return confirm('Password do not match the required pass')
//     }
// }
// let pass = prompt('try another password');
//     if (checkPassword(pass)) {
//         alert ('successful')
//     } else {
//         alert ('not successful')
//     }
// // let regexp = /^(\W\s?)*$/;
// // alert(regexp)
// // alert('Paulizekor'.match(/\w+R/ig));
// let reGexp = /^((?=(\w+))\2\s?)*$/i
// alert(reGexp.test('my name is paul'))
// let Regexp = /^((?=(\w+))\2\s?)*$/ig
// if ("I am a programmer".match(Regexp)) {
//     alert("ths is great")
// }else {
//     alert('Too bad')
// }
// function regexx() {
// let regexs = /^((?=(\w+))\2\s)*$/i
// if ('i am cool'.match(regexs)) {
//     return 'statement was true'
// } else {
//     return 'statement was not true'
// }
// }
// let right = document.querySelector('.prime');
// right.innerHTML = 'This ' + regexx();

// let myNumber = 30;
// while (myNumber != Infinity) {
//     myNumber = myNumber * myNumber;
//     alert(myNumber)
// }
// typeof(Infinity)
// let myFruits = ["mango"," orange"," apple"]
// document.getElementById('fruit').innerHTML = myFruits.toString();

// var myGirls = ["Cecilie", "Lone"];
// var myBoys = ["Emil", "Tobias", "Linus"];
// var myChildren = myGirls.concat(myBoys);
// document.getElementById("demo").innerHTML = "Below are the names of children";
// document.getElementById("demo1").innerHTML = "Together they are: " + myChildren;
// document.getElementById("demo2").innerHTML = "The Girls are: " + myGirls;
// document.getElementById("demo3").innerHTML = "The Boys are: " + myBoys;


// var everY = [1,2,3,4,5,6,7,8,9];
// var check = everY.every(bigest);

// function bigest(arr,arr1,arr2) {
//     return arr < 9;
// }
// alert(check)

// function myForloop(arr) {
//     var Prepare = 1;
    
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             Prepare = Prepare + arr[i][j];
//         }
//     }
//     return Prepare;
// }
// var Prepare = myForloop([[1,2,3],[4,5,6],[7,8,9]])
// console.log(Prepare)

// function checkFunction() {
//     return Math.floor(Math.random() * 30)
// }
// console.log(checkFunction())

// function randomFunction(min, max) {
//     return Math.floor(Math.random() * (max + min) + min)
// }
// console.log(randomFunction(30, 20))

// const fills = [3,2,1]
// function constFunction() {
//     "use strict" 
//     fills[0] = 1;
//     fills[1] = 2;
//     fills[2] = 3;
//     fills.push(4,5,6)
// }
// constFunction()
// console.log(fills)

// var Anonymous = (arr1,arr2) => arr1.concat(arr2);
// console.log([1,2,3,4,5,6,7,8,9],[9,8,7,6,5,4,3,2,1])

// var Anonymous = (arr1,arr2) => arr1.concat(arr2);
// console.log(Anonymous([1,2,3,4,5,6,7,8,9],[9,8,7,6,5,4,3,2,1]))

// const LOCAL_FORCAST = {
//     today: {rain: 12, sun: 10},
//     tomorrow: {rain: 10, sun: 12}
// };

// function morning(forcast) {
//     "use strict"
//     const {tomorrow : {sun : secondforcast}} = forcast;
//     return secondforcast;
// }
// console.log(morning(LOCAL_FORCAST))