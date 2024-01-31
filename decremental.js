// for(let i = 10; i>=0; i--){
//     console.log(i);
// }

// // for while

// let x = 20;
// while(x>=0){
//     console.log(x);
//     x--;
// }
let sum = 0;
for (let n = 50; n >= 40; n--) {
    sum += n;
    
    if (sum >= 285) {
        break;
    }
    console.log(sum);
}