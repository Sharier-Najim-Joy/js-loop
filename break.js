// for(let i = 0; i<=50; i++){
//     if(i>10){
//         break;
//     }
//     console.log(i);
// }

// let n = 50;

// while(n < 100){
//     if(n>60){
//         break;
//     }
//     console.log(n);
//     n++;
// }

let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let y of x){
    if(y === 3){
        break;
    }
    console.log(y);
}

// const numbers = [1, 2, 3, 4, 5];

// for (const num of numbers) {
//   if (num === 3) {
//     console.log('Found 3! Exiting loop.');
//     break;
//   }

//   console.log(num);
// }