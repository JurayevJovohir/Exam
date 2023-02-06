//             TASK-1
// function isPalindrome(num) {

//     if (num < 10) {
//         console.log("Palindrome");
//         return;
//     }
//     else if (num % 10 === 0 && num !== 0) {
//         console.log("not Palindrome");
//         return;
//     }

//     const str = String(num);
//     let i = 0, j = str.length - 1;

//     while (i < j) {
//       if (str[i] !== str[j]) {
//         console.log("not Palindrome");
//         return;
//       }
//       i++;
//       j--;  
//     }  
//     console.log("Palindrome");
//   };

// isPalindrome();





//             TASK-2
// function leapYear(year){
//     if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
//         console.log('Leap year');
//     } else {
//         console.log('not Leap year');
//     }
// }

// leapYear();






//             TASK-3
// const array = [-1, 2, -2, -3, -44]

// function roundNumbers(a) {
//     const newArray = []
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] < 0) {
//             newArray.push(a[i])
//         }
//     }
//     console.log(newArray);  
// }   

// roundNumbers(array);
