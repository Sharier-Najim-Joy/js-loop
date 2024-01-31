let num = 1;
let total = 0;
while (num <= 10){
    console.log(num);
    total = total + num;
    console.log('total:', total);
    num++;
}
// sum even number
let even = 206;
let sum = 0;
while (even <= 311){
    console.log(even);
    if (even % 2 === 0){
        sum += even;
        console.log('total', sum);
    }
    even++;
}
// let number = 206;
// let sum = 0;

// while (number <= 311) {
//     if (number % 2 === 0) {
//         sum += number;
//     }
//     number++;
// }

// console.log("Sum of even numbers from 206 to 311:", sum);


// sum odd number

let odd = 81;
let sumTwo = 0;

while(odd <= 131){
    if(odd % 2 !== 0){
        sumTwo += odd;
        console.log(sumTwo);
    }
    odd++;
}
