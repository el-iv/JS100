function filter(input) {
   return Array.isArray(input);
}

let arr = [1, 2, 3];
let str = 'Hello';

console.log(filter(arr));
console.log(filter(str));
