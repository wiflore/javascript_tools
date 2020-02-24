var x = [10, 20, 30];
var y = [10, 20, "Will", true];

console.log(x[0]);
console.log(y[2]);
console.log(x.length);
console.log(y);
x[2] = 40;
console.log(x[2]);
x.push(50);
console.log(x);
x.push(40, 50);
console.log(x);
x.pop();
console.log(x);

