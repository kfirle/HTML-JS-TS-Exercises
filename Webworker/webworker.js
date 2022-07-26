onmessage = function (t) {
    let prime_arr = [];
    for(let i=t.data[0]; i<t.data[1]; i++){
        if(isPrime(i)){
            prime_arr.push(i);
        }
    }
    postMessage(prime_arr);
}
function isPrime(n){
    for(let i=2;i<n;i++){
        if(n % i == 0){
            return false;
        }
    }
    return true;
}