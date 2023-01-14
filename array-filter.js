let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let filtered

function evenNum(number) {
    return (number % 2 === 0)
}

filtered = numbers.filter(evenNum)

console.log(filtered)