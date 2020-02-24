var i = 0;
var limit = 5;

while (i<limit){
    console.log(i);
    i++;
}

i=0;
do {
    console.log(i)
    i++;
}while (i<limit)

for (i=0;i<=limit;i++){
    console.log(i)
}

var arr = [10, 20, true];
arr.forEach(
        function(item){
        console.log(item);
        }
    )

for (var i of arr){
    console.log(i);
}