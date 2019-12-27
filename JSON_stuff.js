const powerOf = require('powerof')

// ***** Promises *****

// // waits 2 seconds and then times out and returns Hello...
// let sleepyGreeting = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Hello...')
//     }, 2000)

//     setTimeout(() => {
//         reject(Error('Too sleepy...'))
//     }, 2000)
// })

// // call the promise - if data is returned then do this - if nothing returned catch error
// sleepyGreeting
//     .then(data => [
//         console.log(data)
//     ])
//     .catch(err => {
//         console.error(err)
//     });


// ***** Parsing *****
// fetch gets a promise back, it is built in to JS
// console.log('Starting fetch call');
// const postsPromise = fetch('https://api.dailysmarty.com/posts')
// console.log('After fetch call');
// // console.log(postsPromise);
// console.log('After program has run');

// postsPromise
//     .then(data => data.json())
//     .then(data => {
//         data.posts.forEach((item) => {
//             console.log(item.title)
//         });
//     })
//     .catch((err) => {
//         console.log(err)
//     })


// const greeting = new Promise((resolve, reject) => {
//     resolve('hello')
//     reject('Nah bruh')
// })

// const updateAccount = new Promise((resolve, reject) => {
//     resolve('updating ...')
//     reject('Error magne')
// })

// const loginActivities = Promise.all([greeting, updateAccount])

// loginActivities.then(res => {
//     res.forEach(activity => {
//         console.log(activity)
//     })
// })



// ***** Async and Await *****

// const login = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('User Logged in...')
//         }, 4000)
//     })
// }

// const updateAccount = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Updating last login...')
//         }, 2000)
//     })
// }

// // Awaits the login function to finish(2 seconds) then runs the updateaccount function(2 seconds)
// async function loginActivities() {
//     const returnedLogin = await login();
//     console.log(returnedLogin);
  
//     const returnedUpdateAccount = await updateAccount();
//     console.log(returnedUpdateAccount);
//   }
  
//   loginActivities();

// // Waits until all processes complete then prints
// async function loginActivities(login, updateAccount) {
//     const returnedLogin = await login
//     console.log(returnedLogin)

//     const returnedUpdateAccount = await updateAccount
//     console.log(returnedUpdateAccount)
// }

// loginActivities(login(), updateAccount())



// async function queryApis() {
//     try {
//       const postsPromise = fetch('http://api.dailysmarty.com/posts');
//       const posts = await postsPromise.then(res => res.json());
//       console.log(posts);
//     } catch(err) {
//       console.log(err);
//       console.log('There was an error with the DailySmarty API');
//     }
  
//     try {
//       const reposPromise = fetch('https://api.github.com/users/jordanhudgens/repos');
//       const repos = await reposPromise.then(res => res.json());
//       console.log(repos);
//     } catch(err) {
//       console.log(err);
//       console.log('There was an error with the GitHub API');
//     }
//   }
  
//   queryApis();

// getValues = () => {
//     title = prompt('Enter a title or heading: ')
//     hInt = prompt('Enter the H tag size: ')
//     checker(title, hInt)
// }

// checker = (title, hInt) => {
//     while(hInt > 6){
//         hInt = prompt('Enter the H tag size: ')
//     }
//     if(hInt <= 6){
//         headingGenerator(title, hInt)
//     } 
// }

// headingGenerator = (title, hInt) => {
//     alert(`<h${hInt}>${title}</h${hInt}>`)
// }

// getValues()


// // 1. Write a function that generates a random hex. color code in JS
// hexArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
// newHex = (arr) => {
//     let newHexArr = []
//     while(newHexArr.length < 6){
//         newHexArr.push(arr[Math.floor(Math.random() * arr.length)])
//     }
//     return `#${newHexArr.join('')}`
// }

// console.log(newHex(hexArr))

// // 2. Write a function that takes a string and returns the letters in alpha. order
// // IE. "Hi there" = "eehirt"
// alphaSort = (str) => {
//     strArr = str.split('')
//     return strArr.sort().join('')
// }

// console.log(alphaSort('jeffery'));


// // 3. Write a function that takes in an object and prints all of the values inside of the given object
// getValues = (obj) => {
//     for(value in obj){    
//         console.log(obj[value])
//     }
// }

// getValues({
//     name: 'jeff',
//     email: 'jeff@gmail.com',
//     empId: '1234'
// })

// 4. Write a class called Student that accepts a name, email, and favorite programming language. Your class needs at least 2 instance methods and one static method.

// class Student {
//     constructor(name, email, language){
//         this.name = name
//         this.email = email
//         this.language = language
//     }

//     static printOut(name, email, language){
//         console.log(`student: ${name}, email: ${email}, language: ${language}`)
//     }
// }

// Student.printOut('brian', 'hi@email.com', 'python')

// student = new Student('brian', 'hi@email.com', 'python')

// console.log(student)


// ***** Challenge *****

let arr = ['bleh', 'good', 'bueno', 'best', 'poo']

// arrTrim = arr => {
//     if(arr.length >= 3){
//         arr.splice(0, 1)
//         arr.splice(-1, 1)
//     }
//     return arr
// }

// console.log(arrTrim(arr))

// ***** his answer *****

// removeFirstandLast = arr => {
//     if (arr.length >= 3){
//         return arr.slice(1, -1)
//     }else {
//         throw new Error('you need at least 3 elements in the array')
//     }
// }

// console.log(removeFirstandLast(arr));


// What is the DOM? document object model
// How would you add a css class with Vanilla Javascript? .classList.add('classname')
// How would you remove a css class with Vanilla Javascript? .classList.remove('classname')
// Explain the Differences Between the Window and Document for JavaScript Development- window contains the document, document contains the code and such
// What are query selectors? they select elements in the dom based on class, id, name, etc
// What are Javascript event listners? a way to listen for keystrokes, clicks, and other events
// What is onclick and what can we use it for? an event listener for clicks. can be used to check for button clicks, used in gaming to see where a user clicks, change styles on a click target
// What is the difference between onclick and addEventListener? you can add lots of different events, not just clicks
// How can you Add and Remove CSS Styles in Vanilla JavaScript? .styles.styleElementYouWantToChange
// What is the javascript Toggle function? toggles between hide and show
// What are UML Structural Diagrams? the worst                                                                                                                                                  includes diagrams that show how you would build a program(package, sequence, state machine)
// What are UML Behavioral Diagrams? also the worst                                                                                                                                             shows more what the program will do and how things would interact (aactivity, use case, deployment)
// What are UML Class Diagram Associations, Multiplicity, and Navigability? see above                                                                                                           shows what has access to what, how many things are sent, and what needs what to work
// What are UML Activity Diagrams? same                                                                                                                                                         a diagram that shows the activity flow from start to end
// What are UML Use Case Diagrams? still sucky                                                                                                                                                  shows who or what will use the program and what they can access
// What are UML Deployment Diagrams? also sucky                                                                                                                                                 stuff                    
// What are UML Package Diagrams? seeing a pattern here?                                                                                                                                        stuff            
// What are UML Interaction Sequence Diagrams? still reading?                                                                                                                                   stuff
// What are UML State Machine Diagrams? UML is boring                                                                                                                                           stuff


// function order(words){
//     wordArr = words.split(" ")
//     let sortedArr = new Array(wordArr.length)
//     for(i in wordArr){
//         for(j = 0; j <=wordArr.length; j++){
//             if(wordArr[i].includes(j)){
//                 sortedArr.splice(j-1, 1, wordArr[i]);
//             }
//         }
//     }
//     if(words){return sortedArr.join(' ')}
//     else{return ''}
//   }

// console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
// // console.log("is2 Thi1s T4est 3a");



// function array_diff(a, b) {
//     setA = new Set(a)
//     setB = new Set(b)
//     for(i in a){
//         if(b.has(a[i])){
//             a.splice(i, 1)
//             b.splice(i, 1)
//         }
//     }
//     return setA
//   }

//   console.log(array_diff([3,4], [3]));
  



// const https = require('https');

// https.get('https://cars.ksl.com/search/index?keyword=camry', (resp) => {
//   let data = '';

//   // A chunk of data has been recieved.
//   resp.on('data', (chunk) => {
//     data += chunk;
//   });

//   // The whole response has been received. Print out the result.
//   resp.on('end', () => {
//     console.log('len of search page', data.length);
//     console.log('First 1000 characters of search page', data.slice(0, 1000));
//   });

// }).on("error", (err) => {
//   console.log("Error: " + err.message);
// });


// arr1 = [1,2,3]
// arr2 = ['a', 'b', 'c']

// arrJoiner = (arr1, arr2) => {
//     let arrLength = arr1.length + arr2.length
//     let newArr = new Array (arrLength)
//     let counter = 0
//     for(let idx = 0; idx < arrLength; idx++){
//       if (idx % 2==0){
//         newArr.splice(idx, 1, arr1[counter])
//         counter++
//       }
//       else{
//         newArr.splice(idx, 1, arr2[counter-1])
//       }
//     }
//     return newArr
// }

// console.log(arrJoiner(arr1, arr2));