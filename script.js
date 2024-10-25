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

//Q-8=>Accept the parameters and calculate the Compound Interest & print it
// on STDOUT (Use Math class methods)

// function calculateCompoundInterest(principal, rate, time, n) {
//     rate = rate / 100;

//     // Use the compound interest formula: A = P(1 + r/n)^(nt)
//     let amount = principal * Math.pow((1 + rate / n), (n * time));

//     // Calculate the compound interest
//     let compoundInterest = amount - principal;

//     console.log(`Compound Interest: ${compoundInterest.toFixed(2)}`);
// }

// // Example: P = 10000, R = 5%, T = 2 years, compounded quarterly (n = 4)
// calculateCompoundInterest(10000, 5, 2, 4);

//9- Accept the three sides of triangle and calculate the area using herons

// function calculateTriangleArea(a, b, c) {
//     // Semi-perimeter (s) = (a + b + c) / 2
//     let s = (a + b + c) / 2;

//     // Use Heron's formula: area = √[s(s - a)(s - b)(s - c)]
//     let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

//     console.log(`Area of the triangle: ${area.toFixed(2)}`);
// }

// // Example: sides a = 3, b = 4, c = 5
// calculateTriangleArea(3, 4, 5);

// 10. Find surface area of sphere

// function calculateSphereSurfaceArea(radius) {
//     // Surface area of a sphere: A = 4πr²
//     let surfaceArea = 4 * Math.PI * Math.pow(radius, 2);

//     console.log(`Surface Area of the sphere: ${surfaceArea.toFixed(2)}`);
// }

// // Example: radius = 7
// calculateSphereSurfaceArea(7);

//11 Find circumference and area of circle
// function calculateCircleProperties(radius) {
//     // Circumference of a circle: C = 2πr
//     let circumference = 2 * Math.PI * radius;

//     // Area of a circle: A = πr²
//     let area = Math.PI * Math.pow(radius, 2);

//     console.log(`Circumference of the circle: ${circumference.toFixed(2)}`);
//     console.log(`Area of the circle: ${area.toFixed(2)}`);
// }

// // Example: radius = 5
// calculateCircleProperties(5);

// 12. Accept Two Numbers and Print the Greatest

// function printGreatest(a, b) {
//     if (a > b) {
//         console.log(`${a} is greater`);
//     } else if (b > a) {
//         console.log(`${b} is greater`);
//     } else {
//         console.log(`Both numbers are equal`);
//     }
// }

// // Example: a = 5, b = 8
// printGreatest(5, 8);

// 13. Accept Gender and Print Greeting Message

// function greetUserByGender(gender) {
//     if (gender === 'M' || gender === 'm') {
//         console.log("Good Morning Sir");
//     } else if (gender === 'F' || gender === 'f') {
//         console.log("Good Morning Ma'am");
//     } else {
//         console.log("Wrong Input");
//     }
// }

// // Example: gender = 'M'
// greetUserByGender('M');

// 15. Accept Integer and Check if Even or Odd

// function checkEvenOdd(number) {
//     if (number % 2 === 0) {
//         console.log(`${number} is an even number`);
//     } else {
//         console.log(`${number} is an odd number`);
//     }
// }

// // Example: number = 7
// checkEvenOdd(7);

// 16. Accept Name and Age to Check Voter Eligibility

// function checkVoterEligibility(name, age) {
//     if (age >= 18) {
//         console.log(`Hello ${name}, You are a valid voter.`);
//     } else {
//         console.log(`Sorry ${name}, you can't cast the vote.`);
//         console.log(`You will be eligible to vote in ${18 - age} years.`);
//     }
// }

// // Example: name = 'Shery', age = 17
// checkVoterEligibility('Shery', 17);

//17. Accept Day Number (1-7) and Print Corresponding Day Name

// function getDayName(daysNumber){
//     const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"];
//     if(daysNumber>=1 && daysNumber<=7){
//         console.log(`Day is ${days[daysNumber- 1]} `)
//     }
//     else{
//         console.log("Inavlid Day")
//     }
// }
// // Example: dayNumber = 3
// getDayName(3);

// 18. Accept Three Numbers and Print the Greatest Among Them
// function findGreatestAmongThree(a, b, c) {
//     if (a > b && a > c) {
//         console.log(`${a} is the greatest`);
//     } else if (b > a && b > c) {
//         console.log(`${b} is the greatest`);
//     } else {
//         console.log(`${c} is the greatest`);
//     }
// }

// // Example: a = 3, b = 7, c = 5
// findGreatestAmongThree(3, 7, 5);

//19. Check if a Year is a Leap Year

// function checkLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//         console.log(`${year} is a leap year`);
//     } else {
//         console.log(`${year} is not a leap year`);
//     }
// }

// // Example: year = 2024
// checkLeapYear(2024);

// 20. Shop Discount Logic
// function calculateDiscount(billAmount) {
//     let discount;

//     if (billAmount >= 500) {
//         discount = billAmount * 0.1; // 10% discount
//     } else if (billAmount >= 200) {
//         discount = billAmount * 0.05; // 5% discount
//     } else {
//         discount = 0; // No discount
//     }

//     console.log(`Discount: ${discount}`);
//     console.log(`Total after discount: ${billAmount - discount}`);
// }

// // Example: billAmount = 600
// calculateDiscount(600);

// 21. Bijli Bill Calculation

// function calculateBijliBill(units) {
//     let cost;
//     if (units <= 100) {
//         cost = units * 1.5;
//     } else if (units <= 200) {
//         cost = 100 * 1.5 + (units - 100) * 2.5;
//     } else {
//         cost = 100 * 1.5 + 100 * 2.5 + (units - 200) * 3.5;
//     }

//     console.log(`Total Bijli Bill: ₹${cost}`);
// }

// // Example: units = 250
// calculateBijliBill(250);

//22. Check if an Alphabet is a Consonant or a Vowel
// function checkVowelOrConsonant(letter) {
//     letter = letter.toLowerCase();

//     if (['a', 'e', 'i', 'o', 'u'].includes(letter)) {
//         console.log(`${letter} is a vowel`);
//     } else if (/[a-z]/.test(letter)) {
//         console.log(`${letter} is a consonant`);
//     } else {
//         console.log("Invalid input");
//     }
// }

// // Example: letter = 'A'
// checkVowelOrConsonant('A');

//23. Print "Hello World" N Times
// function printHelloWorld(n) {
//     for (let i = 0; i < n; i++) {
//         console.log("Hello World");
//     }
// }

// // Example: n = 5
// printHelloWorld(2);

//24. Print Natural Numbers up to N

// function printNaturalNumbers(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log(i);
//     }
// }

// // Example: n = 10
// printNaturalNumbers(10);

//25. Reverse For Loop - Print N to 1
// function printReverse(n){
//     for(let i = n; i>=1; i--){
//         console.log(i)
//     }
// }
// printReverse(5);

//26. Print Multiplication Table up to 10 Terms
// function Multiplication(num){
//     for(i = 1; i<=10; i++){

//         console.log(`${num} * ${i} = ${num*i}`)
//     }
// }
// Multiplication(2)

//27. Sum up to N Terms
// function sumUpToN(n){
//     let sum =0;
//     for(i=1; i<=n; i++){
//         sum+=i
//     }
// console.log(`Sum up to ${n} is ${sum}`);
// }
// sumUpToN(10)

//28. Factorial of a Number
// function factorial(num) {
//     let fact = 1;
//     for(i=1; i<=num; i++){
//         fact*=i
//     }
//     console.log(`Factorial of ${num} is ${fact}`);
// }

// // Example: num = 5
// factorial(5);

// 29. Sum of All Even & Odd Numbers in a Range Separately
// function sumEvenOddInRange(n) {
//     let sumEven = 0, sumOdd = 0;
//     for (let i = 1; i <= n; i++) {
//         if (i % 2 === 0) {
//             sumEven += i;
//         } else {
//             sumOdd += i;
//         }
//     }
//     console.log(`Sum of Even numbers: ${sumEven}`);
//     console.log(`Sum of Odd numbers: ${sumOdd}`);
// }

// // Example: n = 10
// sumEvenOddInRange(10);

//30 Print All Factors of a Number
// function printFactors(num) {
//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) {
//             console.log(i);
//         }
//     }
// }

// // Example: num = 12
// printFactors(50);

// 31. Sum of All Factors of a Number
// function printFactors(num) {
//     let sum = 0;
//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) {
//             sum+=i
//         }
//     }
//     console.log("sum:",sum)
// }

// // Example: num = 12
// printFactors(10);

//32. Check if the Number is Prime
// function isPrime(num) {

//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// // Example: num = 29
// console.log(isPrime(29) ? `${29} is a prime number` : `${29} is not a prime number`);

//33. Find a Raised to the Power of b

// let a =2;
// let b = 5
// let power = Math.pow(a,b)
// console.log(`1${a}^${b} is ${power}`)

//34. Separate Each Digit of a Number

// function separateDigits(num) {
//     let digits = num.toString().split('').reverse();
//     digits.forEach(digit => console.log(digit));
// }

// // Example: num = 123
// separateDigits(123);

// 35. Sum of Digits of a Number

// function sumOfDigits(num){
//     let sum = 0;
//     while(num>0){
//         sum +=num%10;
//         num = Math.floor(num/10);

//     }
//     console.log(`Sum of digits is ${sum}`)
// }

// // Example: num = 936
// sumOfDigits(936);

//36. Print the Reverse of a Number
// function reverseNumber(num) {
//   let arr = num.toString().split("").slice().reverse();
//   for (let n of arr) {
//     console.log(n);

//   }
//   z;
// }
// reverseNumber(234);

//37. Check if Number is Palindrome

// function isPalindrome(num) {
//   let reversedNum = Number(num.toString().split("").slice().reverse().join(""));
//   console.log(reversedNum);
//   if (num === reversedNum) {
//     console.log(`${num} is Palindrome`);
//   } else {
//     console.log(`${num} is not Palindrome`);
//   }
// }
// isPalindrome(121);

//38. Check if the Number is Strong Number (Sum of Factorials of Each Digit)

// function factorial(n) {
//     if (n === 0 || n === 1) return 1;
//     return n * factorial(n - 1);
// }

// function isStrongNumber(num) {
//     let sum = 0;
//     let temp = num;
//     while (temp > 0) {
//         sum += factorial(temp % 10);
//         temp = Math.floor(temp / 10);
//     }
//     console.log(sum === num ? `${num} is a strong number` : `${num} is not a strong number`);
// }

// // Example: num = 145
// isStrongNumber(145);

//39. Check if the Number is Automorphic

//automorphic=> Automorphic number wo number hota hai jo apne square ke last digits ke equal hota hai

// function automorphic(num){
//     square = num * num;
//     strnum = num.toString();
//     strSquare = square.toString()
//     console.log(strSquare.endsWith(strnum)?`${num} is Automorphic`:`${num} is not Automorphic`)
// }
// automorphic(5)

// 40. Print hello until user gives wrong input using do-while
// let input;
// do {
//   input = prompt("Enter 'hello' to continue or anything else to stop: ");
//   console.log("Hello!");
// } while (input !== "hello");
// console.log("You entered a wrong input, exiting...");

//41. Make a choice-based calculator using do-while
// let choice;
// do {
//     const num1 = +prompt("Enter first number: ");
//     const num2 = +prompt("Enter second number: ");
//     choice = prompt("Enter operation (+, -, *, /) or 'exit' to quit: ");

//     switch (choice) {
//         case "+":
//             console.log(`Result: ${num1 + num2}`);
//             break;
//         case "-":
//             console.log(`Result: ${num1 - num2}`);
//             break;
//         case "*":
//             console.log(`Result: ${num1 * num2}`);
//             break;
//         case "/":
//             if (num2 !== 0) {
//                 console.log(`Result: ${num1 / num2}`);
//             } else {
//                 console.log("Error: Division by zero is not allowed.");
//             }
//             break;
//         case "exit":
//             console.log("Exiting calculator...");
//             break;
//         default:
//             console.log("Invalid operation!");
//     }
// } while (choice !== "exit");

//42- Print Weekday using Switch

// let num = +prompt("Enter number");
// switch (num) {
//   case 1: {
//     console.log("Today is Sunday");
//     break;
//   }
//   case 2: {
//     console.log("Today is Monday");
//     break;
//   }
//   case 3: {
//     console.log("Today is Tuesday");
//     break;
//   }
//   case 4: {
//     console.log("Today is Wednessday");
//     break;
//   }
//   case 5: {
//     console.log("Today is Thrusday");
//     break;
//   }
//   case 6: {
//     console.log("Today is Friday");
//     break;
//   }
//   case 7: {
//     console.log("Today is Saturday");
//     break;
//   }
//   default: {
//     console.log("Invalid day");
//     break;
//   }
// }

//- Accept an english alphabet from user and check if it is a consonent or
// a vowel;

// let alphabet = prompt("Enter your alphabet")
// switch(alphabet){
//     case "a":{
//         console.log("This is vowels");
//         break;
//     }
//     case "e":{
//         console.log("This is vowels");
//         break;
//     }
//     case "i":{
//         console.log("This is vowels");
//         break;
//     }
//     case "o":{
//         console.log("This is vowels");
//         break;
//     }
//     case "u":{
//         console.log("This is vowels");
//         break;
//     }
//     default:{
//         console.log("This is consonents")
//     }

// }

//- Project - Guess Game
//  Write a program that generates a random number and asks the
// user to guess what the number is.
// If the user's guess is higher than the random number, the program
// should display "Too high, try again."
// If the user's guess is lower than the random number, the program
// should display "Too low, try again."
//The program should use a loop that repeats until the user correctly
// guesses the random number

// function guessGame() {
//   // Generate a random number between 1 and 100
//   const randomNumber = Math.floor(Math.random() * 10);
//   console.log(randomNumber)
//   let userGuess = 0;

//   // Keep looping until the user guesses correctly
//   while (userGuess !== randomNumber) {
//     // Get user input
//     userGuess = parseInt(prompt("Guess the number between 1 and 100: "), 10);

//     // Check if the guess is too high, too low, or correct
//     if (userGuess > randomNumber) {
//       alert("Too high, try again.");
//     } else if (userGuess < randomNumber) {
//       alert("Too low, try again.");
//     } else {
//       alert("Congratulations! You guessed the correct number.");
//     }
//   }
// }

// // Start the game
// guessGame();

//45- Project Restuarent v 1.0  using swicth

// function restaurantMenu() {
//     let mainChoice = null;
//     let itemChoice = null;

//     // Loop for the main menu
//     while (mainChoice !== 3) {
//       // Display main categories to the user
//       alert(`
//         Welcome to Restaurant v1.0
//         Please choose a category:
//         1. Main Course
//         2. Drinks
//         3. Exit
//       `);

//       mainChoice = parseInt(prompt("Enter the number of your choice (1-3):"), 10);

//       switch (mainChoice) {
//         case 1: // Main Course Menu
//           alert(`
//             Main Course Menu:
//             1. Pizza - $10
//             2. Burger - $7
//             3. Pasta - $8
//             4. Go Back to Main Menu
//           `);
//           itemChoice = parseInt(prompt("Choose an item from Main Course (1-4):"), 10);

//           switch (itemChoice) {
//             case 1:
//               alert("You selected Pizza. Price: $10");
//               break;
//             case 2:
//               alert("You selected Burger. Price: $7");
//               break;
//             case 3:
//               alert("You selected Pasta. Price: $8");
//               break;
//             case 4:
//               alert("Returning to Main Menu...");
//               break;
//             default:
//               alert("Invalid choice. Please choose between 1 and 4.");
//               break;
//           }
//           break;

//         case 2: // Drinks Menu
//           alert(`
//             Drinks Menu:
//             1. Soda - $3
//             2. Coffee - $4
//             3. Juice - $5
//             4. Go Back to Main Menu
//           `);
//           itemChoice = parseInt(prompt("Choose an item from Drinks (1-4):"), 10);

//           switch (itemChoice) {
//             case 1:
//               alert("You selected Soda. Price: $3");
//               break;
//             case 2:
//               alert("You selected Coffee. Price: $4");
//               break;
//             case 3:
//               alert("You selected Juice. Price: $5");
//               break;
//             case 4:
//               alert("Returning to Main Menu...");
//               break;
//             default:
//               alert("Invalid choice. Please choose between 1 and 4.");
//               break;
//           }
//           break;

//         case 3: // Exit
//           alert("Thank you for visiting! Exiting the menu.");
//           break;

//         default:
//           alert("Invalid choice. Please enter a number between 1 and 3.");
//           break;
//       }
//     }
//   }

// Start the restaurant menu system
//   restaurantMenu();

// 46 Right angle Trangle
//   function rightTriangleStar(rows) {
//     // Outer loop for the number of rows
//     for (let i = 1; i <= rows; i++) {
//       let stars = "";

//       // Inner loop for printing stars in each row
//       for (let j = 1; j <= i; j++) {
//         stars += "*";
//       }

//       // Print the stars for the current row
//       console.log(stars);
//     }
//   }

//   rightTriangleStar(5);

//47 - Right Triangle - Number

// function rightTriangleNumber(rows){

//     for(let i = 1; i<=rows; i++){

//         let pattern = ''
//         for(let j = 1; j<=i; j++){
//             pattern+=j +" "
//         }
//         console.log(pattern)

//     }
// }
// rightTriangleNumber(5)

//48 =>Right Triangle - Alphabet

// function rightTriangleAlphabet(rows) {
//   // Loop for the number of rows
//   for (let i = 1; i <= rows; i++) {
//     let pattern = "";
//     for (let j = 65; j < 65 + i; j++) {
//       pattern += String.fromCharCode(j) + " "; // Convert ASCII to character
//     }

//     console.log(pattern);
//   }
// }

// rightTriangleAlphabet(5);

//49 inverted Right Triangle

// function invertedRightTriangleStar(rows) {
//     for (let i = rows; i >= 1; i--) {
//       let pattern = '';

//       for (let j = 1; j <= i; j++) {
//         pattern += '*';
//       }

//       console.log(pattern);
//     }
//   }

//   invertedRightTriangleStar(5);

//50 Mirrored Right Triangle

// function mirroredRightTriangleStar(rows) {
//   // Outer loop for the number of rows
//   for (let i = 1; i <= rows; i++) {
//     let pattern = "";

//     for (let j = 1; j <= rows - i; j++) {
//       pattern += " "; // Add spaces
//     }

//     for (let j = 1; j <= i; j++) {
//       pattern += "*"; // Add stars
//     }

//     console.log(pattern);
//   }
// }

// mirroredRightTriangleStar(5);

//51- Triangle
// function equilateralTriangleStar(rows) {
//   for (let i = 1; i <= rows; i++) {
//     let pattern = "";

//     for (let j = 1; j <= rows - i; j++) {
//       pattern += " ";
//     }

//     for (let j = 1; j <= 2 * i - 1; j++) {
//       pattern += "*"; // Add stars
//     }

//     console.log(pattern);
//   }
// }

// equilateralTriangleStar(5);

// Q-52 vShapeStar :

// function vShapeStar(rows) {
//   if (rows < 3) {
//     console.log("Minimum height of the V shape should be 3.");
//     return;
//   }

//   for (let i = 0; i < rows; i++) {
//     let pattern = "";

//     // Left side space
//     for (let j = 0; j < i; j++) {
//       pattern += " ";
//     }

//     // Left star
//     pattern += "*";

//     // Middle space between two stars
//     for (let j = 0; j < (2 * (rows - i - 1)) - 1; j++) {
//       pattern += " ";
//     }

//     // Right star (only if it's not the last row)
//     if (i < rows - 1) {
//       pattern += "*";
//     }

//     console.log(pattern);
//   }
// }

// vShapeStar(5);

//Q-53
// function xShapeStar(rows) {
//   // Minimum 3 rows chahiye aur odd number hona chahiye
//   if (rows < 3 || rows % 2 === 0) {
//     console.log("X shape ke liye minimum height 3 aur odd number of rows chahiye.");
//     return;
//   }

//   for (let i = 0; i < rows; i++) { // Har row ke liye
//     let pattern = ""; // Row ka pattern shuru karte hain

//     for (let j = 0; j < rows; j++) { // Har column ke liye
//       // Agar yeh star ka position hai
//       if (j === i || j === rows - i - 1) {
//         pattern += "*"; // Star daal do
//       } else {
//         pattern += " "; // Baki jagah par space daal do
//       }
//     }

//     console.log(pattern); // Pattern ko print karo
//   }
// }

// xShapeStar(5); // 5 rows ka X shape print karo

//ARRAY Day 22 to 29
//54- Accept size n from user and create a n size array then take n inputs
// into the and finally Print the sum & Avg of all elements

// let arr = [];
// let n = 5;

// alert("Enter 5 numbers");
// let sum = 0;
// for (let i = 0; i < n; i++) {
//   let num = +prompt("Enter number ", i + 1);
//   arr.push(num);
// }
// arr.map((val) => {
//   return (sum += val);
// });
// let avg = sum / n;
// console.log(avg);

// console.log(arr);

//55- Find the greatest element  {2, 96, 69, 77, 145, 20} => Max element = >145 found at 4 index

// let element =  [2, 96, 69, 77, 145, 20]

// let maxElement = element[0]
// let maxIndex = 0;

// for(let i = 0; i<element.length; i++){
//   if(element[i]>maxElement){
//     maxElement = element[i]
//     maxIndex = i
//   }
// }
// console.log(maxElement)
// console.log(maxIndex)

//56- Find the second greatest element {2, 96, 69, 77, 145, 20} = Second greatest element = 96

//1st way✅✅✅
// let element = [2, 96, 69, 77, 145, 20];

// let maxElement = Math.max(...element);

// let secondGreatest = Math.max(...element.filter(num => num !== maxElement));

// console.log("Second greatest element:", secondGreatest);

//2nd way✅✅✅

// let arr = [2, 96, 69, 77, 145, 20];

// let maxElement = arr[0];
// let secondGreatest = -Infinity;

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > maxElement) {
//     secondGreatest = maxElement;
//     maxElement = arr[i];
//   }
//   else if(arr[i]>secondGreatest && arr[i]!==maxElement){
//     secondGreatest = arr[i]
//   }
// }
// console.log(secondGreatest)

//57:- Check if array is sorted in increasing order or not.

// let array1 = [2, 5, 10, 15, 20];
// let array2 = [3, 8, 7, 12, 14];

// function isSorted(arr){

//   for(let i = 0; i<arr.length -1; i++){
//     if(arr[i]>arr[i + 1]){
//     return false
//   }

// }
// return true
// }
// console.log(isSorted(array1))
// console.log(isSorted(array2))

//58- Take n integer inputs from user and store them in an array.  Now, copy all the elements in an another array but in reverse order

// let arr = [];
// let reverseArray = [];
// let userInput;
// function takeInputAndReverse(n) {
//   for (let i = 0; i < n; i++) {
//     userInput = +prompt(`Enter Number ${i + 1}`);
//     arr.push(userInput);
//   }

//   //1st way to reverse
//   // for (let i = arr.length - 1; i >= 0; i--) {
//   //   reverseArray.push(arr[i]);
//   // }

//   //2nd way to reverse

//   reverseArray = [...arr].reverse()
//   console.log(arr);
//   console.log(reverseArray);
// }

// takeInputAndReverse(5);

//59- Array left Rotation by 1

// function leftRotateByOne(){
//   let firstElement  = arr.shift()
//   arr.push(firstElement)
//   return arr

// }

// let arr = [1, 2, 3, 4, 5];
// console.log("Original Array:", arr);

// let rotatedArray = leftRotateByOne(arr);
// console.log("Array after Left Rotation by 1:", rotatedArray);

//59- Array right Rotation by 1

// function rightRotateByOne(arr){
//   let lastElement  = arr.pop()
//   arr.unshift(lastElement)
//   return arr

// }

// let arr = [1, 2, 3, 4, 5];
// console.log("Original Array:", arr);

// let rotatedArray = rightRotateByOne(arr);
// console.log("Array after Left Rotation by 1:", rotatedArray);

//60- Array left rotation by K element

// function leftRotateByK(arr, K) {
//   // K ko array ke length ke mod se adjust karenge (extra rotations remove karne ke liye)
//   K = K % arr.length;

//   let rotatedPart = arr.splice(0, K);

//   arr.push(...rotatedPart);

//   return arr;
// }

// let arr = [1, 2, 3, 4, 5];
// let K = 4;
// console.log("Original Array:", arr);

// let rotatedArray = leftRotateByK(arr, K);
// console.log(`Array after Left Rotation by ${K} elements:`, rotatedArray);

//1- Array Reverse Without Using Extra space

// function reverseArrayInPlace(arr){
//   let start =0;
//   let end = arr.length -1
//   console.log(end)
//   while(start<end){
//     let temp = arr[start];
//     arr[start] = arr[end]
//     arr[end] = temp
//     start++;
//     end--
//   }
//  return arr
// }

// let arr = [1, 2, 3, 4, 5];
// console.log("Original Array:", arr);

// let reversedArray = reverseArrayInPlace(arr);
// console.log("Reversed Array:", reversedArray);

//62- Linear Search an array - If element found print the index else -1

// function linearSearch(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       return i;
//     } else {
//       return -1;
//     }
//   }
// }

// let arr = [10, 25, 30, 47, 55];
// let target = 100;

//  console.log(linearSearch(arr, target))

// 63- Binary Search. If element found print the index else -1
// function binarySearch(arr, target) {
//   let start = 0;
//   let end = arr.length - 1;
//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);
//     if (arr[mid] === target) {
//       return mid;
//     } else if (arr[mid] < target) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//   }
//   return -1;
// }

// let arr = [10, 20, 30, 40, 50, 60];
// let target = 40;

// let index = binarySearch(arr, target);
// if (index !== -1) {
//   console.log(`Element found at index: ${index}`);
// } else {
//   console.log(`Element not found, returned: ${index}`);
// }

//64 Buble short

// function bubbleSort(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j <= n - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr
// }

// let arr = [64, 34, 25, 12, 22, 11, 90];
// console.log("Unsorted array:", arr);

// let sortedArray = bubbleSort(arr);
// console.log("Sorted array:", sortedArray);

//65  Move all the negative elements on left side and positive elements on
// right side O(n).
// function rearrange(arr) {
//   left = 0;
//   right = arr.length - 1;
//   while (left <= right) {
//     if (arr[left] < 0) {
//       left++;
//     } else if (arr[right] >= 0) {
//       right--;
//     } else {
//       //modern way to swap two number using destructing without any third variable🚀
//       [arr[left], arr[right]] = [arr[right], arr[left]];

//       //old way to solve😔
//       // let temp = arr[left]; // Step 1: temp = 1
//       // arr[left] = arr[right]; // Step 2: arr[0] = 4
//       // arr[right] = temp; // Step 3: arr[3] = temp (1)

//       left++;
//       right--;
//     }
//   }
//   return arr;
// }

// let arr = [-12, 11, 13, -5, 6, -7, 5, 3, -6];
// console.log(rearrange(arr)); // Output: [-12, -6, -13, -5, -7, -3, 5, 6, 11]

//66- Print the count of subarrays whose sum is equal to the target.
// Ex - {1,2,3,7,5}, T = 12    O/P - 2 - [ {2,3,7}, {7,5} ] - Both the subarrays
// has sum 12

// let arr = [1, 2, 3, 7, 5];
// let target = 12;

// function subArray(arr, target) {
//   let count = 0;
//   let result = [];

//   // Outer loop to set the starting point
//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     let tempArray = [];

//     // Inner loop to find subarrays starting from i
//     for (let j = i; j < arr.length; j++) {
//       sum += arr[j];
//       tempArray.push(arr[j]);

//       // Check if the current subarray sum matches the target
//       if (sum === target) {
//         count++;
//         result.push([...tempArray]);  // Push the current subarray to result
//       }
//     }
//   }

//   console.log(`Count of subarrays: ${count}`);
//   console.log("Subarrays with sum equal to target:", result);
//   return count;
// }

// subArray(arr, target);

//67  Strong number using methods

// function factorial(num){

//   let fact = 1;
//   for(let i = 1;i<=num;i++){
//     fact *=i
//   }
//   return fact;
// }
// console.log(factorial(5))

// function isStrongNumber(num){
//   let sum  = 0;
//   let temp = num;
//   //calculate the sum of the each number

//   while(temp>0)
//     {
//       let digit = temp%10;
//       sum+=factorial(digit)
//       temp = Math.floor(temp/10)
//     }
//     return sum===num

//   }
//   console.log(isStrongNumber(145))

//68 Special number using method

//1st we have to make a function that calculate factorial of given number after that we have to cheak given number is Strong or Not
// let num = 146;
// function factorial(n){
//   let fact = 1;
//   for(let i = 1; i<=n; i++){
//     fact *=i
//   }
//   return fact;
// }

// function isSpecialNumner(num) {
//   let temp = num;
//   let sum = 0;

//   while (temp > 0) {
//     let digit = temp % 10;
//     sum += factorial(digit);
//     temp = Math.floor(temp / 10);
//   }
//   return sum === num;
// }
// console.log(isSpecialNumner(num));

//69- Leetcode 1929 - Concatenation of array

//1st way to solve this questions🌷🌷
// let nums = [1, 2, 3, 4, 5];
// function Concatenation(arr) {
//   let n = arr.length;
//   let ans = new Array(2 * n);//creating a new blank array with size of double
//   for (let i = 0; i < n; i++) {
//     ans[i] = nums[i];
//     ans[i + n] = nums[i];
//   }
//   return ans;
// }

//2nd way to solve this questions ✅✅
// function Concatenation(arr) {
//   return [...arr, ...arr];
// }

// console.log(Concatenation(nums));

//70 - Leetcode 1920 - Build Array from Permutation
// function buildArray(nums) {
//   return nums.map((num) => nums[num]);
// }

// let nums = [0, 2, 1, 5, 3, 4];
// console.log(buildArray(nums));

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

//STRING Day 33 to 37✅✅✅✅✅
//71  Accept a string from user and print its each character on a new line
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

//72. Accept a string and print it in reverse order

// let str = "Hello";
// let reversed = str.split("").reverse().join('')
// console.log(reversed)

// 73 Check if the string is Pallindromic or not

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

//74 . Pallindromic String using method and Two pointer algorithm (hint:
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

// 75 .  Count vowels and consonents in a string

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

//76.  Toggle each alphabet of String
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

//77.  Take an array of strings words and a String Prefix. Print the number of
// strings in words that contain pref as a prefix.

// const words = ["apple", "banana", "apricot", "grape", "apartment"];
// let pre = "ap";
// function countPrefix(words, pre) {
//   return words.filter((elem) => elem.startsWith(pre)).length;
// }
// let prefixLength = countPrefix(words, pre);
// console.log(prefixLength);

//78. Accept a space seperated sentence and split in into words. Print each
// word on a new line with first letter capitalized.

// let sentence = "hello bhai kaisa hai tu kal aa party deta hu";
// let ans = sentence
//   .split(" ")
//   .map((elem) => elem.charAt(0).toUpperCase() + elem.slice(1)).join(" ");
// console.log(ans);

//-79. Extend the prev question and capitalize first & last character of each
// word in the sentence and print the new sentence
//   Ex - Hello bhai Kaise ho a
// HellO BhaI KaisE HO A

//     let sentence = "hello bhai kaisa hai tu kal aa party deta hu";
//     let ans = sentence
//     .split(" ")
//     .map(
//         (elem) =>
//         elem.charAt(0).toUpperCase() +
//         elem.slice(1,-1)+elem.slice(elem.length -1).toUpperCase()
//     )
//     .join(" ");
// console.log(ans);

//80. 2114. Maximum Number of Words Found in Sentence
// let num = "1234"; //if u give string then no need to convert it to string otherwise u give number then convert it into string
// let maxNum = Math.max(...num.split("").map(Number)); //.map(Number) convert each elemnt in Number
// console.log(maxNum);

//81.Accept a string and print the frequency of each character present in the string

// function printCharFrequency(str) {
//   let frequency = {};
//   for(let char of str){
//     if(char!==" "){
//       if(frequency[char]){
//         frequency[char]++
//       }
//       else{
//         frequency[char] =1
//       }
//     }
//   }
//   for(let char in frequency){
//     console.log(`frequency ${char} is ${frequency[char]} times`)
//   }
// }

// let str = "hello bhai kaisa hai";
// printCharFrequency(str);

//82. Check Two Strings are Anagram or Not
// Anagrams words have the same word length & same character count
// Examples of anagram words are arc and car, state and taste, night
// and thing etc.

// let str1 = "arc";
// let str2 = "car";
// function areAnagrams(str1, str2) {
//   if (str1.length !== str2.length) return false;
//   str1 = str1.toLowerCase().split("").sort().join("");
//   str2 = str2.toLowerCase().split("").sort().join("");

//   return str1 === str2;
// }
// areAnagrams(str1, str2);
// if (areAnagrams(str1, str2)) {
//   console.log(`${str1} and ${str2} are anagrams.`);
// } else {
//   console.log(`${str1} and ${str2} are not anagrams.`);
// }

//83 sort the words of an sentence
// let sentence = "hello bhai kaisa hai tu kal aa party deta hu";
// let sorted = sentence.split(" ").sort().join(" ")
// console.log(sorted)

// Hasing day 40 ✅✅✅✅✅✅

//84. - Print the unique elements in an array
// let array = [1, 2, 3, 4, 2, 3, 5, 1, 6];
// let unique = [...new Set(array)];
// console.log(unique);

//85.  Find the freqency of elements in an integer array

// let intArr = [1, 2, 3, 4, 5, 6, 7, 8,6,5,4,32,1,];
// function freqencyOfNumber(intArr) {
//   let freqency = {};
//   for (let num of intArr) {
//     if (freqency[num]) {
//       freqency[num]++;
//     } else {
//       freqency[num] = 1;
//     }
//   }
//   for (let num in freqency) {
//     console.log(`this ${num} is ${freqency[num]} times`);
//   }
// }
// freqencyOfNumber(intArr)

//86 function numJewelsInStones(J, S) {
//   let jweller = new Set(J);
//   let count = 0;
//   for (let stone of S) {
//     if (jweller.has(stone)) count++;
//   }
//   return count;
// }
// let J = "aA"; // Jewels
// let S = "aAAbbbb"; // Stones
// console.log(numJewelsInStones(J, S));

//87. Check if the Sentence Is Pangram
//Pangram=>. Pangram ka matlab hota hai ek aisi sentence jisme English alphabet ke sabhi 26 letters kam se kam ek baar use huye hoon.

let sentence = "thequickbrwnfxjumpsvertheloazydg";
function Pangram(sentence) {
  let unique = new Set();
  for (let char of sentence) {
    unique.add(char);
  }
  return unique.size === 26;
}
console.log(Pangram(sentence));

//88 2351. First Letter to Appear Twice

// function firstRepeatedCharacter(s) {
//   let seen = new Set();
//   for (let char of s) {
//     if (seen.has(char)) {
//       return char;
//     } else {
//       seen.add(char);
//     }
//   }
// }

// let s = "abccbaacz";
// console.log(firstRepeatedCharacter(s));

// : Exactly 2 baar appear hone wale characters ko count kro with that char

let s = "abccbaaczcc";

function countCharsAppearingTwice(s) {
  const charCount = {}; 

  // Step 1: Har character ka frequency count kare
  for (const char of s) {
    charCount[char] ??= 0; // agar character pehle se nahi hai toh 0 set karega
    //??= ek nullish coalescing assignment operator hai jo sirf tabhi assign karega jab charCount[char] undefined ho
    charCount[char]++; 
  }

  /
  let twiceChars = []; 
  for (const char in charCount) {
    if (charCount[char] === 2) {
      twiceChars.push(char); // character ko twiceChars array me add karte hain
    }
  }

  return {
    count: twiceChars.length,
    characters: twiceChars,
  };
}

console.log(countCharsAppearingTwice(s));
