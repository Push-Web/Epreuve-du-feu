const[nd,sc,ar1]=process.argv;

var espace, hash,esc;
var i = 1;

function escalier(x){
    for(x=>i;i++;){
        espace = x-i;
        hash = i;
        esc = (" ".repeat(espace) + "#".repeat(hash));
        console.log(esc);
    }
}
escalier(ar1);