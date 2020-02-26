
// // constructor ans self = __init__ and self in python
// class Instructor {
//     constructor({ name, role = 'assistant' }) {
//         this.name = name
//         this.role = role
//     }
// // instance method - function inside of a class, called on instnce of class. 
//     renderDetails(){
//         console.log(`${this.name}: ${this.role}`)
//     }
// // static method is called on the class
//     static canTeach(instructor) {
//         return (instructor.role === 'classroom');
//     }
// }

// // jon is and instance of instructor. We creat a new instance of instructor named jon that holds an object with a key name and value jon snow
// const jon = new Instructor({ name: 'jon snow' })
// const brayden = new Instructor({ name: 'brayden', role: 'teacher' })
// // log my instance of instructor named jon and the value of key name
// jon.renderDetails()
// brayden.renderDetails()

// let juniorInstructor = new Instructor({ 'name' : 'Brian' });
// let seniorInstructor = new Instructor({ 'name' : 'Alice', "role" : "classroom" });

// juniorInstructor.renderDetails(); // "Brian - assistant"
// seniorInstructor.renderDetails(); // "Alice - classroom"

// // "Brian can teach: false"
// console.log(
//     `${juniorInstructor.name} can teach: ${Instructor.canTeach(juniorInstructor)}`
//   );
  
//   // "Alice can teach: true"
//   console.log(
//     `${seniorInstructor.name} can teach: ${Instructor.canTeach(seniorInstructor)}`
//   );



// var a = 1;
// a += 1;
// console.log(a);

// function selection_sort(arr) {
//     for (var i = 0; i < arr.length; ++i) {
//         var min_i_so_far = i;
//         for (var j = i; j < arr.length; ++j) {
//             if (arr[j] < arr[min_i_so_far]) {
//                 min_i_so_far = j;
//             }
//         }
//         var temp = arr[i];
//         arr[i] = arr[min_i_so_far];
//         arr[min_i_so_far] = temp;
//     }
//     return arr;
// }
// console.log(selection_sort([3, 7, 1]));

// // https://www.twilio.com/blog/2017/08/http-requests-in-node-js.html

// ////////
// // Example search for camry keyword
// ////////
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
//     console.log('First 1000 characters of search page', data.slice(15000, 17000));
//   });
  
// }).on("error", (err) => {
//   console.log("Error: " + err.message);
// });


// ///// This is the tag/class we will need to use to sort by year, make, model
// /* <a class="link" href="/listing/6005835?ad_cid=1">
//     2020 Toyota Camry Hybrid SE        
// </a> */

// getListings = (data) => {
//     const listings = document.getElementById('link')
//     for(var listing = 0; listing< listings.length; i++){
//         return(listings[listing]);
//     }
// }

// console.log(getListings(data))

///// Filter/sort by price with this tag/class
/* <div class="listing-detail-line price" data-price="33754">
    MSRP $33,754            
</div> */

///// Filter/sort by mileage
/* <div class="listing-detail-line mileage">
    Mileage: 0        
</div> */


////////
// Example get car page
////////
// https.get('https://cars.ksl.com/listing/5709202', (resp) => {
//   let data = '';

//   // A chunk of data has been recieved.
//   resp.on('data', (chunk) => {
//     data += chunk;
//   });

//   // The whole response has been received. Print out the result.
//   resp.on('end', () => {
//     console.log('len of car page', data.length);
//     console.log('First 1000 characters of car page', data.slice(0, 1000));
//   });

// }).on("error", (err) => {
//   console.log("Error: " + err.message);
// });



// longestWordFinder = (str) => {
//   const strArr = str.split(' ')
//   let longWordLength = 0
//   let longWord = ''
//   for(word in strArr) {
//     if(strArr[word].length > longWordLength){
//       longWord = strArr[word]
//       longWordLength = strArr[word].length
//     }
//   }
//   return longWord
// }


// console.log(longestWordFinder('hello the friends'))




// const string1 = 'this is easy'
// const string2 = 'super easy'

// myTernary = (str1, str2) => {
//   return str1.length > str2.length ? "string1 is longer" : "string2 is longer"
// }

// oldSchoolWay =(str1, str2) => {
//   if(str1.length > str2.length){
//     return "string1 is longer"
//   }else {
//     return "string2 is longer"
//   }
// }

// console.log(myTernary(string1, string2));
// console.log(oldSchoolWay(string1, string2));



// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b.
// array_diff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// array_diff([1,2,2,2,3],[2]) == [1,3]

// removeSame = (arr1,  arr2) => {
  
//   for(num in arr1){
//     for(idx in arr2){
//       console.log(num)
//       if(arr1[num] == arr2[idx]){
//         arr1.splice(num, 1)
//         removeSame(arr1, arr2)
//       }
//     }
//   }

//   return arr1
// }

// console.log(removeSame([1,2,2], [2]))


// removeByIndeces = (arr, indeces) => {
//   idxArr = []
//   for(idx in indeces){
//     idxArr.push(arr[indeces[idx]])
//   }

//   return idxArr
// }

// const removeByIndex = (arr, arr2) => {
//   return arr2.map(element => {
//     return arr[element]
//   })
// }

// console.log(removeByIndeces(['a', 'b', 'c', 'd', 'e', 'f', 'f', 'e', 'f'], [1, 5]))
// console.log(removeByIndex(['a', 'b', 'c', 'd', 'e', 'f', 'f', 'e', 'f'], [1, 5]))


// const arrayPairs = (arr, arr2) => {
//   return arr.map(element => {
//     const newArr = []
//     return arr2.map(el => {
//       return [element, el]
//     })
//   })
// }

// newArrayPairs = (arr1, arr2) => {
//   const newArr= []
//   arr1.forEach(element => {
//     arr2.forEach(element2 => {
//       newArr.push([element, element2])
//     });
//   });

//   return newArr
// }

// console.log(arrayPairs([1, 2], ['a', 'b']))
// console.log(newArrayPairs([1, 2], ['a', 'b']))


// removeByValue = (arr, arr2) => {
//   return arr.filter(i => {
//     return arr2
//   })
// }

// const removeByValue = (arr1, arr2) => {
//   newArr = []
//   arr2.forEach(element => {
//     arr1.forEach(idx => {
//       if(arr1[idx] === arr2[element]){
//         newArr.splice(element, 1)
//         removeByValue(arr1, arr2)
//       }
//     })
//   });

//   return arr1
// }

// removeByValue = (arr1, arr2) => {
//   newArr = []
//   for(element in arr2){
//     for(idx in arr1){
//       if(idx === element){
//         newArr.push(idx)
//         removeByValue(arr1, arr2)
//       }
//     }
//   }

//   return arr1
// }

// function removeByValue(arr, ...valuesToRemove){
//   const pulled = arr.filter(value => {
//     return !valuesToRemove.includes(values)
//   })

//   arr.length = 0
//   pulled.forEach(value => arr.push(value))

//   return pulled
// }


// console.log(removeByValue(['a', 'b', 'c', 'a', 'b', 'c'], ['a', 'c']))


// sumTwoSmallest = arr => {
//     let lowest = arr[0]
//     let second = 0
//     arr.forEach(element => {
//         if(arr[element] < lowest){
//             second = lowest
//             lowest = arr[element]
//         }
//     })

//     return lowest + second
// }

// // sumTwoSmallest = arr => {
// //     arr.sort((a,b) => a-b)
// //     return arr[0] + arr[1]
// // }

// console.log(sumTwoSmallest([10,6,3,5,2,4]))


// function narcissistic(value) {
//   total = 0
  
//   valueString = value.toString()
  
//   valueArray = valueString.split('')
//   digits = valueArray.length

//   valueArray.forEach(number => {
//     total += Math.pow(number, digits)
//     // console.log(number, digits)
//   })
  
//   if(total === value){
//     return true
//   } else {
//     return false
//   }
// }

// console.log(narcissistic(371))

// deleteNth = (arr, n) => {
    
//     for(let i = 0; i < arr.length; i++){
//         count = 0
//         for(let j = 0; j < arr.length; j++){
//             if(arr[i] === arr[j]){
//                 if(count >= n){
//                     arr.splice(j, 1)
//                 }
//                 count++
//                 // console.log("count = " + count + " arr[i] = " + arr[i] + " arr[j] = " + arr[j])
//             }
//         }
//     }

//     return arr
// }

// console.log(deleteNth([32, 32, 25, 44, 32, 26, 32, 25, 44, 25, 26, 26, 32, 26, 25, 25, 25, 25, 26, 32, 26, 26, 44, 44, 16, 50, 16, 50, 48, 6, 16, 16, 50, 25, 50, 48, 44], 1))


// function findUniq(arr) {
//     let first = arr.splice(0, 1)
//     let unique = 0
//     if(arr.includes(first[0])){
//       console.log('includes? ', arr.includes(first[0]))
//       arr.forEach(num => {
//         if(num != first[0]){
//           unique = num
//         }
//       }) 
//       return unique
//     } else {return first[0]}
//   }


// function anagrams(word, words) {
//     let anagrams = []
//     let wordArr = word.split("")
//     let sortedWord = wordArr.sort()

//     words.forEach(arrWord => {
//         let newWordArr = arrWord.split('')
//         let sortedNewWord = newWordArr.sort()

//         if(sortedWord == sortedNewWord){
//             anagrams.push(arrWord)
//         }
//     })
    
//     return anagrams
//   }

//   console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))

// function generateJSON(lines) {
//     let jsonArray = []

//     lines.forEach(arr => {
//         var json_arr = {};
//         json_arr["name1"] = "value1";
//         json_arr["name2"] = "value2";
//         json_arr["name3"] = "value3";

//         var json_string = JSON.stringify(json_arr);
//         jsonArray.push(json_string)
//     })

//     return jsonArray
// }

function generateJSON(lines) {
  let jsonArray = []
  let id = 0
  // let name = ""
  let managerId

  lines.forEach(array => {
      id = array[0]
      let name = array[1]
      managerId = array[2]

      if(managerId){managerId = parseInt(array[2])}
      else{managerId = null}

      jsonArray.push({
        "id": parseInt(id),
        "name": name,
        "manager_id": managerId
    })
  })

  return jsonArray
}

console.log(generateJSON([
    [
      "1",
      "Gregory Gwilliam",
      "2"
    ],
    [
      "2",
      "Brice Martin",
      ""
    ]
  ]))