var phrase = process.argv[2];
var modif;
var etape = 0;

for(var i = 0 ; i <= phrase.length; i++){
    etape ++;

    if ( i == 0){

        modif = phrase.charAt(i).toUpperCase();
    }
    if ( phrase.charAt(i) === " "){
        etape--;
    }
    if (phrase.charAt(i) === "'"){
        etape--;
    }
    if (i !== 0){

        if(etape % 2 == 1){

            modif += phrase.charAt(i).toLowerCase();
        }
        else {modif += phrase.charAt(i).toUpperCase();
        }
    }
};
console.log(modif);

