const para = document.getElementById('para');
const num = Number(prompt('Enter the number!'))
function isPrime(number) {
    if (number < 2) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }

    return true;
  }


if (isPrime(num)) {
    para.innerHTML = 'It is a prime number'
} else {
    para.innerHTML = 'number is not prime'
}