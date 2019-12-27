// var hello_world = "Hello";
// console.log(hello_world);
// age = "there";
// console.log(hello_world + age);
// age = 15;
// // alert(age);
// hello_world = 3;
// console.log(hello_world + age);
// let name = "guy";

// var name, city, age;

// name = "steve"
// city = "SLC"
// age = 10

// console.log(name, city, age);


// ***** Ternary operators *****
// const thing = true;

// // if (thing){
// //     console.log("it is true")
// // }else{
// //     console.log("it's false")
// // }

// // same as above but returns value instead of print
// thing ? "it is true" : "it's false"

// // ***** Functions *****
// // all below are same ish
// function hello(str){
//     return "hello ${str}!"
// }

// hello("world")

// const hello = function(str){
//     return "hello ${str}!"
// }

// hello("world")

// const hello = (str) => {
//     return "hello ${str}!"
// }

// hello("world")

// var arr = [1, 2, 3, 4, 5]
// var beginning = true

// function alt_arr(arr){
//     for(num = 0; num <= arr.length + 3; num++){
//         if(beginning){
//             var removed = arr.splice(0, 1)
//             console.log(removed[0])
//             beginning = false
//         }else{
//             var removed = arr.splice(-1, 1)
//             console.log(removed[0])
//             beginning = true
//         }
//     }
// }

// alt_arr(arr)

// ***** His Answer *****
// class ArrayPopper{
//     constructor(arr){
//         this.arr = arr
//         this.atBeginning = true
//     }

//     togglePopper(){
//         this.atBeginning = !this.atBeginning
//         this.atBeginning ? this.arr.pop() : this.arr.shift()
//     }
// }

// const ap = new ArrayPopper([1, 2, 3, 4, 5])

// ap.togglePopper()

// ***** Function Expressions *****
// Use expressions when inside block

// var greeting = function () {
//     return "Hi there!";
//    };
   
//    var age = 4;
   
//    if (age <= 10) {
//      var buildMenu = function () {
//        return "Kids' Menu";
//      };
   
//      function wrongMenuBuilder () {
//        return "Wrong Kids' Menu";
//      }
   
//      console.log(buildMenu());
//      console.log(wrongMenuBuilder());
//    }

// // ***** Closures *****
// // return is an object. getCurrentAverage is key for value pair with an anonymous function as the value
// function battingAverage () {
//     var hits = 100;
//     var atBats = 300;
  
//     return {
//       getCurrentAverage: function () {
//         return (hits/atBats);
//       },
//       updateHitsAndAtBats: function (hit, atBat) {
//         hits += hit;
//         atBats += atBat;
//       }
//     }
//   }
  
// //   create new instance of battingAverage. This will change values but only for the altuve instance
//   var altuve = battingAverage();
//   console.log(altuve.getCurrentAverage());
//   altuve.updateHitsAndAtBats(0, 20);
//   console.log(altuve.getCurrentAverage());

/* <p class="grabThis">The five boxing wizards jump quickly</p>
var weirdSentence = "Wizards don't jump they float";

document.getElementsByClassName('grabThis')[0].innerHTML = weirdSentence */



// ***** This *****

// Hover event using This
// $('.btn-guide').hover(function(event) {
//     event.preventDefault();
//     console.log($(this));
// });

// var guide = {
//     title: 'Guide to Programming',
//     content: 'Content goes here...',
//     visibleToUser: function (viewingUserRole) {
//       if (viewingUserRole === 'paid') {
//         return true;
//       }
//     },
//     renderContent: function(userRole) {
//       if (this.visibleToUser(userRole)) {
//         console.log(this.title + " - " + this.content);
//       } else {
//         this.content = '';
//         console.log(this.title + " - " + this.content);
//       }
//     }
//   }
  
//   user = { role: 'paid' };
//   guide.renderContent(user.role);

// var generatedArray = new Array(50)
// num = 0

// for (generatedArray(num) = 0, num < generatedArray, num++){
    
// }

// console.log(generatedArray)

// function evens(max){
//     for(let num = 2; num <= max; num+=2){
//         console.log(num)
//     }
//   }
  
//   evens(10)

//   const hello = `Hey`

//   console.log(`${hello + ` ` + hello} there`)

// const page = `about`
// console.log(`class=${ page === `Home` ? `master-layout` : `secondary-layout` }`)

// // Same function written as function declaration
// function fullName (fName, lName) { 
//     console.log(`${lName}, ${fName}`);
//   }
//   fullName('Tiffany', 'Hudgens');
  
//   // Same function written as function expression
//   fullName = (fName, lName) => { 
//     console.log(`${lName}, ${fName}`);
//   }
//   fullName('Kristine', 'Hudgens');
  
//   // Basic arrow function
//   helloWorld = () => { console.log("Hi there"); }
//   helloWorld();
  
//   // Arrow function with shorthand function argument for single arguments
//   firstName = fname => { console.log(fname.toUpperCase()); }
//   firstName('Jordan');
  
//   // Arrow function with multiple arguments
//   fullName = (fName, lName) => { console.log(`${lName}, ${fName}`); }
//   fullName('Kristine', 'Hudgens');

// const arr = [1, 2, 3, 4, 5]

// const average = arr => {
//     let total = 0
//     for(let num = 0; num <= arr.length; num++){
//         total += num
//     }
//     return total/arr.length
// }

// console.log(average(arr))

// const getAverage = arr => {
//     let total = 0;
//     arr.forEach(element => {
//         total += element
//     });
//     return total / arr.length
// }

// console.log(getAverage(arr))

// const myAverage = arr =>{
//     const sum = arr.reduce((total, currentValue) => total + currentValue)
//     return sum/arr.length
// }

// console.log(myAverage(arr))


// ***** Bottega Diner *****

// const menu = {
//     'dinner': {
//         'entrees' : {
//             "burger": 5.00,
//             "pizza": 10.00,
//             "ribs": 14.00
//         },

//         'sides' : {
//             "fries": 3.00,
//             "onion rings": 4.00,
//             "chips": 1.00
//         }
//     },

//     'lunch': {
//         'entrees' : {
//             "burger": 4.00,
//             "pizza": 9.00,
//             "ribs": 12.00
//         },

//         'sides' : {
//             "fries": 2.00,
//             "onion rings": 3.00,
//             "chips": 1.00
//         }
//     },
//     'breakfast': {
//         'entrees' : {
//             "pancakes": 5.00,
//             "freanch toast": 8.00,
//             "steak and eggs": 12.00
//         },

//         'sides' : {
//             "fruit": 3.00,
//             "toast": 1.00,
//             "oatmeal": 3.00
//         }
//     }    
// }

// time = prompt('Welcome to Bottega Diner\n\nPlease enter the military time:')

// menuSelector = (time) => {
//     if(time < 1100){
//         myMenu = {menu: 'breakfast'}
//         console.log(myMenu);
//     }else if(time < 1700 && time >= 1100){
//         myMenu = {menu: 'lunch'}
//         console.log(myMenu);
//     }else{
//         myMenu = {menu: 'dinner'}
//         console.log(myMenu);
//     }
// }

// menuSelector(time)
  

// // entrees = {
// //     "burger": 5.00,
// //     "pizza": 10.00,
// //     "ribs": 14.00
// // }

// // sides = {
// //     "fries": 3.00,
// //     "onion rings": 4.00,
// //     "chips": 1.00
// // }

// waitressComments = [
//     "NOICE!",
//     "SWEEEEET!",
//     "Oh.... Ok",
//     "Great pick"
// ]

// var total = 0

// generateRandom = waitressComments => {
//     var random = waitressComments[Math.floor(Math.random()*waitressComments.length)]
//     return random
// }


// const entreeChoice = prompt(`Please choose your entree from the following:\n${menu.myMenu['entrees'][0]} => $${menu.myMenu[entrees][0]}\n${menu.myMenu[entrees][1]} => $${menu.myMenu[entrees][1]}\n${menu.myMenu[entrees][2]} => $${menu.myMenu[entrees][2]}\n`,"Type choice here");
// total+=menu.myMenu[entrees][entreeChoice]

// const waitress = choice => {
//     for(entree in entrees){
//         if(entree === choice){
//             alert(`${generateRandom(waitressComments)} That costs $${entrees[choice]}`); 
//         }
//         else{}
//     }
//     for(side in sides){
//         if(side === choice){
//             alert(`${generateRandom(waitressComments)} That costs $${sides[choice]}`)
//         }
//         else{}
//     }
// }

// waitress(entreeChoice)

// const sideChoiceOne = prompt(`Next choose your first side from the following:\n${Object.keys(sides)[0]} => $${Object.values(sides)[0]}\n${Object.keys(sides)[1]} => $${Object.values(sides)[1]}\n${Object.keys(sides)[2]} => $${Object.values(sides)[2]}\n`,"Type choice here");
// total+=sides[sideChoiceOne]

// waitress(sideChoiceOne)

// const sideChoiceTwo = prompt(`Next choose your last side from the following:\n${Object.keys(sides)[0]} => $${Object.values(sides)[0]}\n${Object.keys(sides)[1]} => $${Object.values(sides)[1]}\n${Object.keys(sides)[2]} => $${Object.values(sides)[2]}\n`,"Type choice here");
// total+=sides[sideChoiceOne]

// waitress(sideChoiceTwo)

// alert(`Your total for today is $${total}`)


// var guide = {
//     title: 'Guide to Programming',
//     content: 'Content goes here...',
//     visibleToUser: function (viewingUserRole) {
//       if (viewingUserRole === 'paid') {
//         return true;
//       }
//     },
//     renderContent: function(userRole) {
//       if (this.visibleToUser(userRole)) {
//         console.log(this.title + " - " + this.content);
//       } else {
//         this.content = '';
//         console.log(this.title + " - " + this.content);
//       }
//     }
//   }
  
//   user = { role: 'paid' };
//   guide.renderContent(user.role);

// // return is an object. getCurrentAverage is key for value pair with an anonymous function as the value
// function battingAverage () {
//     var hits = 100;
//     var atBats = 300;
  
//     return {
//       getCurrentAverage: function () {
//         return (hits/atBats);
//       },
//       updateHitsAndAtBats: function (hit, atBat) {
//         hits += hit;
//         atBats += atBat;
//       }
//     }
//   }
  
// //   create new instance of battingAverage. This will change values but only for the altuve instance
//   var altuve = battingAverage();
//   console.log(altuve.getCurrentAverage());
//   altuve.updateHitsAndAtBats(0, 20);
//   console.log(altuve.getCurrentAverage());


// Without arrow function this refers to setInterval, with the arrow function it sets this to the parent which is invoice
// function Invoice(subTotal) {
//     this.taxRate = 0.06;
//     this.subTotal = subTotal;
  
//     this.total = setInterval(() => {
//       console.log((this.taxRate * this.subTotal) + this.subTotal);
//       // console.log(this);
//     }, 2000);
//   }
  
//   const inv = new Invoice(200);
//   inv.total();

// [playerOne, playerTwo] = [playerTwo, playerOne];

// console.log(`
// Player One: ${playerOne}
// Player Two: ${playerTwo}
// `);

// const apiList = [
//     'https://api.dailysmarty.com/posts',
//     'https://api.github.com/users/jordanhudgens/repos',
//     'https://api.github.com/users/jordanhudgens'
//   ]
  
//   const [posts, repos, profile] = apiList;
  
//   console.log(posts);
//   console.log(repos);
//   console.log(profile);

// const user = {
//     name: 'Kristine',
//     email: 'kristine@devcamp.com'
//   }
  
//   const renderUser = ({ name, email }) => {
//     console.log(`${name}: ${email}`);
//   }
  
//   renderUser(user);

// const blog = {
//     title: 'My great post',
//     summary: 'Summary of my post'
//   }
  
//   const openGraphMetadata = ({ title, summary = 'A DailySmarty Post' }) => {
//     console.log(`
//       og-title=${title}
//       og-description=${summary}
//     `);
//   }
  
//   openGraphMetadata(blog);


  // Combining Arrays
// let shoppingCart = [345, 375, 765, 123];
// let newItems = [98, 123];

// shoppingCart.push(...newItems);
// console.log(shoppingCart); // [345, 375, 765, 123, 98, 123]

// // Copying Arrays
// const shoppingCart = [345, 375, 765, 123];
// const updatedCart = [...shoppingCart];
// updatedCart.push(5);
// console.log(updatedCart);
// console.log(shoppingCart);

// const orderTotals = [1, 5, 1, 10, 2, 3];
// console.log(Math.max(...orderTotals));

// // [1, 5, 1, 10, 2, 3]
// // ...[1, 5, 1, 10, 2, 3]
// // 1, 5, 1, 10, 2, 3

// const { starter, closer, ...relievers } = {
//   starter: 'Verlander',
//   closer: 'Giles',
//   relief_1: 'Morton',
//   relief_2: 'Gregerson'
// }

// console.log(starter);
// console.log(closer);
// console.log(relievers);

// // ***** Bind function *****
// const userOne = {
//     firstName: "Kristine",
//     lastName: "Hudgens"
//   };
  
//   const userTwo = {
//     firstName: "Tiffany",
//     lastName: "Hudgens"
//   };
  
//   // Function expression
//   const fullName = function() {
//     return `${this.lastName}, ${this.firstName}`;
//   };
  
//   // Nope!
//   // const fullName = () => {
//   //   return `${this.lastName}, ${this.firstName}`;
//   // };
  
//   const kristine = fullName.bind(userOne);
//   const tiffany = fullName.bind(userTwo);
  
//   kristine();
//   tiffany();

// // ***** Check to see if two objects are the same *****
// // If you remove the nested objct then it will return true
// // LoDash library works better than this nonsense
// // for of will give the value, for in gives the index
// // so usually for objects use for of, in arrays use for in
// const obj1 = {
//     name: "Kristine",
//     age: 13,
//     favorites: {
//       food: "Pizza",
//       vacation: "Disneyland"
//     }
// };
  
//   const obj2 = {
//     name: "Kristine",
//     age: 13,
//     favorites: {
//       food: "Pizza",
//       vacation: "Disneyland"
//     }
// };
  
// const isEqual = (obj1, obj2) => {
//     const obj1Keys = Object.keys(obj1)
//     const obj2Keys = Object.keys(obj2)

//     if (obj1Keys.length !== obj2Keys.length) {
//         return false
//     }

//     for(let objKey of obj1Keys) {
//         if(obj1[objKey] !== obj2[objKey]){
//             return false
//         }
//     }

//     return true
// }

// console.log(isEqual(obj1, obj2));



// pigLatin = (str) => {
//     vowel = ['a','e', 'i', 'o', 'u', 'y']
//     strArray = str.split('')
//     if(vowel.includes(strArray[0])) {
//       beginning = strArray.splice(0, 2)
//       strArray.splice(-1, 2, beginning)
//     }else{
//       beginning = strArray.splice(0, 1)
//       strArray.splice(-1, 1, beginning)
//     }
//     return strArray
// }

// console.log(pigLatin("hello"))

// const pigLatin = (str) => {
//   str = str.toLowerCase();
//   const vowels = ['a','e', 'i', 'o', 'u', 'y']
//   let vowelIndex = 0

//   if(vowels.includes(str[0])){
//     str = str + "way"
//   }else{
//     for(let char of str){
//       if(vowels.includes(char)){
//         vowelIndex = str.indexOf(char)
//       }
//     }
//   }
//   return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay"
// }

// console.log(pigLatin("brian"))


// function isValidWalk(walk) {
//   if(walk.length == 10){
//     let nDistance = 0
//     let wDistance = 0
//     for(let i = 0; i < walk.length; i++){
//       if(walk[i] == 'n'){
//         nDistance += 1
//       }else if(walk[i] == 's'){
//         nDistance -= 1
//       }
//       else if(walk[i] == 'w'){
//         wDistance += 1
//       }else{
//         wDistance -= 1
//       }
//     }
//     if(nDistance == 0 && wDistance == 0){return true}
//     else{return false}
//   }else{return false}
// }


// var uniqueInOrder = arr => {
//   arr = arr.split('')
//   for(i in arr){
//     if(arr[i] === arr[i + 1]){
//       arr.splice(i, 1)
//     }
//   }
//   return arr
// }

// console.log(uniqueInOrder('AAAABBBCCDAABBB'))


// "Modern JavaScript"
// Explain the const variable. cant change

// What do you use for modern string interpolation in Javascript?  `${}`

// Explain an arrow function and how you might use one? a function that gives access to the parent class. 

// What is array destructuring? like unpacking in python. It assigns array elements to variables based on order surrounded by brackets

// What is the javascript spread operator what is it used for? ... references all trailing elements

// What is Variable Deconstruction in Javascript!  same as array deconstruction above but with other data types

// How does the this keyword work with arrow functions

// How do you pass a javascript object as function arguments by leveraging deconstruction? { args here }

// What is a Javascript Promise? 

// What is a Javascript fetch Promise and how might you use it? it gets api or data from a url

// What is async and await in javascript and what purpose does it serve in Javascript?

// What is error handling in a Javascript async/await function, and how might you use it? 

// What is the javascript Debugger? it will stop the program when it hits the debugger so you can check it

// How do you create a custom error class in Javascript?


// What is npm?

// What is node?


// "Guide to Git"
// How do you create a local repository? git init

// What is Github? site that stores git repos

// How would you push a git repo to GitHub? git push

// What are the steps to make a git commit? git add "filename" or git add . then git commit -m "message" then git push

// How would you hide files from git? add the file name to the .gitignore file

// Why would you want to hide files from git? if it has sensitive info

// What does git pull do?  gets current version from github


// custom code snippets
// {
//   "Boilerplate": {
//       "prefix": "html5",
//       "body": [
//           "<!DOCTYPE html>",
//           "<html lang='en'>",
//           "<head>",
//           "  <meta charset='UTF-8'>",
//           "  <title></title>",
//           "</head>",
//           "<body>",
//           "  $0",
//           "</body>",
//           "</html>"
//       ],
//       "description": "Generates HTML5 Boilerplate"
//   },
//   "Bullets": {
//       "prefix": "bullets",
//       "body": [
//           "<ul>",
//           "  <li>$1</li>",
//           "</ul>"
//       ],
//       "description": "Adds bullet point list to HTML file"
//   }
// }


// {
//   "Print to console": {
//       "prefix": "log",
//       "body": [
//           "console.log('$1');",
//           "$2"
//       ],
//       "description": "Log output to console"
//   }
// }


prettyPrice = (price, ending) => {
  price = Math.floor(price)
  if(ending < 1){
    ending = ending * 100
    ending = parseInt(ending)/100
    return price = price + ending
  }
  else{
    ending = ending/100
    return price = price + ending
  }
}

console.log(prettyPrice(99.25, .9954))

// const user = {
//   name: 'Kristine',
//   email: 'kristine@devcamp.com',
//   favorites: [
//     'Chipotle',
//     'Chik fil a'
//   ]
// }

// user.email
// user.favorites[1]

// document

// document.location.href

// // On dailysmarty
// document.location.protocol

// // On wsj
// document.location.protocol

// document.body.parentElement

// document.getElementsByClassName('topics')

// document.getElementsByClassName('topics')[2]

// document.getElementsByClassName('topics')[2].children

// document.getElementsByClassName('topics')[2].children.length

// document.getElementsByClassName('topics')[2].children[0].text


// Gets the text from the link in item 20 on the page
// document.getElementsByClassName('link')[20].innerText