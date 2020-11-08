var nb = process.argv[2];

 function factor(n) {

    if( n == 0 ) {      
        return 1;
    }

    else {
        return n*factor(n-1);
    }
}

var result = factor(nb);
console.log(result);