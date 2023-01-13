/*
{
    var x = 1 // global, const also
    let y = 1 // local
}
*/
// var is never used
// const and let - scope var
// undefined should never come
// === checks for type also 
/*
console.log(2 === 2)
console.log(2 == '2')
console.log(2 === '2')
*/
// use === always

// wap - take input: check if prime or armstrong number
/*
function isPrime() {
    let num = prompt("Enter a positive number: ")
    num = parseInt(num)
    let isPrime = true
    if(num == 2)
        isPrime = true
    else if(num == 1)
        console.log('Neither prime nor composite')
    else {
        for(let i = 2; i <= (num-1); i++) {
            if(num % i == 0)
                isPrime = false
        }
    }

    if(isPrime)
        console.log('Prime number')
    else
        console.log('Composite number')
} 
*/
/*
function isArmstrong() {
    let sum = 0
    let num = prompt('Enter a three-digit positive integer: ')
    let temp = num
    while (temp > 0) {
        let rem = temp % 10
        sum += rem * rem * rem
        temp = parseInt(temp / 10)
    }

    if (sum == num) {
        console.log('Armstrong!')
    }
    else {
        console.log(`Not Armstrong`)
    }
}
*/

// const isPrime = () => true;



const isArmstrong = (num) => {
    let sum = 0
    let temp = num

    while(temp > 0) {
        let rem = temp % 10
        sum += rem * rem * rem
        temp = parseInt(temp/10)
    }

    if (sum == num) {
        console.log('Armstrong')
    }
    else {
        console.log('Not Armstrong')
    }
}

const isPrime = (num) => {
    num = parseInt(num)
    let isPrime = true
    if(num == 2)
        isPrime = true
    else if(num == 1)
        console.log('Neither prime nor composite')
    else {
        for(let i = 2; i <= (num-1); i++) {
            if(num % i == 0)
                isPrime = false
        }
    }

    if(isPrime)
        console.log('Prime number')
    else
        console.log('Composite number') 
}

