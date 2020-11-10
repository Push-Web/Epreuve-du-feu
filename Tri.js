cd
clear

s = process.argv[2];
var tablNombre = [...nombres].sort()
function compare (a,b){

    return a - b;
}
var result = tablNombre.reverse();

console.log(result.join(" "));