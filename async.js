//sync
function add(a, b){
    return (a+b);
}
console.log(add(3,2));

//async
function add2(a, b, callback){
    callback(a + b);
}

function print(c){
    console.log(c);
}

add2(2, 3, print);

add2(1, 2, function(c){
    console.log(c);
})
var c = 20;
add2(5, 10, (c)=>{
    console.log(c);
})

console.log(c);

var a = 500;

if(true) {
    let a = 100;
    console.log(a);
}
console.log(a);