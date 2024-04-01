function primes(number) {
    if (number <= 1) {
        return false;
    }
    if (number === 2) {
        return true;
    }
   // for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;



console.log(primes(5)); 
console.log(primes(6)); 
console.log(primes(13)); 
console.log(primes(1)); 