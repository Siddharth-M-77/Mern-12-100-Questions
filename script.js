//1 . sum of two number❓❓❓❓
// let a = 10
// let b = 20
// let c = a+b
// console.log(c)

//2. Accept two integers from user and print the sum❓❓❓❓
// let num1 = +prompt("Enter first number")
// let num2 = +prompt("Enter Second number")

// let c = num1 + num2
// alert(`the sum of ${num1} and ${num2} is ${c}`)

//3. Accept the User's name, age and print in following manner
// Ex - Hello Shery, you are 12 years old.❓❓❓❓

// let name = prompt("Enter Your name")
// let age = prompt("Enter your age")
// console.log(`Hey ${name} you are ${age} year old`)

//5.- Solve Increment & decrement operator questions on
//  https://javaconceptoftheday.com/quiz-on-increment-and-decrement-operators/  ✅✅

//6 . - Accept two numbers from user and swap their values ❓❓❓❓
//   Part 2 - Swap without using third variable❓❓❓❓

// using third variable
// let m = +prompt("Enter first number");
// let n = +prompt("Enter Seconf number");
// let c = n;
// n = m;
// m = c;
// prompt(`swap of ${m} and ${n} is ${m} and ${n}`);

// using without third variable

// let m = +prompt("Enter first number");
// let n = +prompt("Enter Seconf number");
// alert(`Before swappig swap of ${m} and ${n}`);

// m = m+n //2+3 =>5=m
// n = m-n //5-2 => 2=n
// m = m-n

// alert(`after swapping swap of ${m} and ${n} `);

// 7.  Accept the length and width of a rectangle. Calculate & print the area
// and perimiter

// let l = 10
// let b = 20
// let c = l*b
// let d = 2*(l +b)
// console.log(`Area of rectangle is ${c}`)
// console.log(`Perimeter of a rectangle is ${d}`)

//Recursion Questions  ❓❓❓❓❓❓❓❓

// Accept a decimal number and convert it into binary equivalent. ✅✅✅
// function decimalToBinary(decimal) {
//   if (decimal === 0) return "";
//   return decimalToBinary(Math.floor(decimal / 2)) + (decimal % 2).toString();
// }
// let number = 77;
// let binaryEquivalent = decimalToBinary(number);
// console.log(binaryEquivalent || "0");

// Accept a binary number in String form and convert it into decimal ✅✅✅

// function binaryToDecimal(binaryStr) {
//   let decimal = 0;
//   for (let i = 0; i < binaryStr.length; i++) {
//     let bit = parseInt(binaryStr[i]);
//     decimal = decimal * 2 + bit;
//   }
//   return decimal;
// }
// let binaryNumber = "1010100";
// let decimalEquivalent = binaryToDecimal(binaryNumber);
// console.log(decimalEquivalent || "0");

//Factorial of a number using recursion ✅✅✅

// function factorial(n) {
//   if (n === 0 || n === 1) return 1;
//   return n * factorial(n - 1);
// }
// let n = 5;
// let Fact = factorial(n);
// console.log(Fact)

// Fibonacci number using recursion ✅✅✅

// function fabonacci(n){
//     if(n===0 ) return 0;
//     if(n===1) return 1;

//     return fabonacci(n-1) + fabonacci(n-2)
// }
// let num = 10
// let fact  = fabonacci(num)
// console.log(fact)

//OOPS & DESIGN 42 to 50✅✅✅✅✅
//1.  Program to Store the data of 5 Students in a Student[] and print them✅✅

// Step 1: Define the Student class
// class Student {
//   constructor(name, age, grade) {
//     this.name = name;
//     this.age = age;
//     this.grade = grade;
//   }
//   // Method to display student details
//   displayInfo() {
//     console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
//   }
// }
// // Step 2: Create an array to store students
// let students = [];

// // Step 3: Add 5 students to the array
// students.push(new Student("Sidd", 29, "A"));
// students.push(new Student("Rohan", 29, "A"));
// students.push(new Student("Akash", 29, "A"));
// // Step 4: Print the details of each student
// console.log("Student Details:");
// students.forEach((student) => student.displayInfo());

//STRING Day 33 to 37
//1  Accept a string from user and print its each character on a new line
// let str = "Sidd";

// using forEach loop 1.
// function char(str) {
//   let arr = str.split("");
//   arr.forEach((char) => {
//     console.log(char);
//   });
// }
// console.log(char(str));

//using for of loop 2.
// for (let char of str) {
//     console.log(char);
// }

//2. Accept a string and print it in reverse order

// let str = "Hello";
// let reversed = str.split("").reverse().join('')
// console.log(reversed)

// 3 Check if the string is Pallindromic or not

// let str = "olo";
// function palidrome(str) {
//   let reversedStr = str.split("").reverse().join("");
//   if (reversedStr === str) {
//     console.log("This is Palidrome");
//   } else {
//     console.log("This is not a polidrome");
//   }
// }
// palidrome(str)

//4 . Pallindromic String using method and Two pointer algorithm (hint:
//     Array reverse algo)

// function isPalindrome(str) {
//     let start = 0;
//     let end = str.length -1;
//     while(start<end){
//         if(str[start] !== str[end]){
//             return false;
//         }
//         start++;
//         end--;
//     }
//     return true
// }
// let str = "madam";
// console.log(isPalindrome(str));

// 5 .  Count vowels and consonents in a string

// function countVowelsAndConsonents(str) {
//   let vowels = ["a", "e", "i", "o", "u"];
//   let vowelCount = "";
//   let consonantCount = "";
//   for (let char of str) {
//     if (vowels.includes(char)) {
//       vowelCount++;
//     } else {
//       consonantCount++;
//     }
//   }
//   console.log("Vowels:", vowelCount);
//   console.log("Consonants:", consonantCount);
//   return { vowels: vowelCount, consonants: consonantCount };
// }
// console.log(countVowelsAndConsonents("Siddharth"));

//6.  Toggle each alphabet of String
// In - AcgDfD Output - aCGdFd

// function toggleCase(str){
//     str = str.split("")
//     return str.map((char)=>{
//         if(char === char.toUpperCase()){
//             return char.toLowerCase()
//         }
//         else{
//             return char.toUpperCase()
//         }
//     }).join("")
// }

// let str = 'hElop';
// console.log(toggleCase(str))

//7.  Take an array of strings words and a String Prefix. Print the number of
// strings in words that contain pref as a prefix.

// const words = ["apple", "banana", "apricot", "grape", "apartment"];
// let pre = "ap";
// function countPrefix(words, pre) {
//   return words.filter((elem) => elem.startsWith(pre)).length;
// }
// let prefixLength = countPrefix(words, pre);
// console.log(prefixLength);

//8. Accept a space seperated sentence and split in into words. Print each
// word on a new line with first letter capitalized.

// let sentence = "hello bhai kaisa hai tu kal aa party deta hu";
// let ans = sentence
//   .split(" ")
//   .map((elem) => elem.charAt(0).toUpperCase() + elem.slice(1)).join(" ");
// console.log(ans);

//-9. Extend the prev question and capitalize first & last character of each
// word in the sentence and print the new sentence
//   Ex - Hello bhai Kaise ho a
// HellO BhaI KaisE HO A

//     let sentence = "hello bhai kaisa hai tu kal aa party deta hu";
//     let ans = sentence
//     .split(" ")
//     .map(
//         (elem) =>
//         elem.charAt(0).toUpperCase() +
//         elem.slice(1, elem.length-1)+elem.charAt(elem.length-1).toUpperCase()
//     )
//     .join(" ");
// console.log(ans);

//10. 2114. Maximum Number of Words Found in Sentence
// let num = 1234;
// let maxNum = Math.max(...num.toString().split("").map(Number)); //.map(Number) convert each elemnt in Number
// console.log(maxNum);

//11.Accept a string and print the frequency of each character present in the string

// function printCharFrequency(str) {
//   let frequency = {};
//   for (let char of str) {
//     if (char !== " ") {
//       if (frequency[char]) {
//         frequency[char]++;
//       } else {
//         frequency[char] = 1;
//       }
//     }
//   }
//   for (let char in frequency) {
//     console.log(`Character ${char} occurs ${frequency[char]} times`);
//   }
// }

// let str = "hello bhai kaisa hai";
// printCharFrequency(str);

//12. Check Two Strings are Anagram or Not
// Anagrams words have the same word length & same character count
// Examples of anagram words are arc and car, state and taste, night
// and thing etc.

// let str1 = "arc";
// let str2 = "car";
// function areAnagrams(str1, str2) {
//   if (str1.length !== str2.length) return false;
//   str1 = str1.toLowerCase().split("").sort().join("")
//   str2 = str2.toLowerCase().split("").sort().join("")

//   return str1 === str2
// }
// areAnagrams(str1,str2)
// if(areAnagrams(str1,str2)){
//     console.log("This is Areanagrams")
// }
// else{
//     console.log("not a areAnagrams")
// }
