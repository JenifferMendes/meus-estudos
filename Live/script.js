function fatorial(num){
    if ( num > 0 && num %  1 === 0 && typeof num === "number"){
        let fat = 1;
        for(let i = 1; i <= num; i++) {
            fat = fat * i;
        }  
        return fat;
    } 
    throw new Error("O número tem que ser positivo e inteiro!!!");
}

console.log(fatorial(10.1));

