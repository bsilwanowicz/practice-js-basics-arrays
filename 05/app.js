const numbers = [1, 2, 3, 4, 5, 6, 7];
const evenNumbers = numbers.filter(getEvenNumbers)
console.log(evenNumbers)
const total = evenNumbers.reduce(sumOfNumbers)
console.log(total)


function getEvenNumbers(number) {
    return number % 2 ===0
}

function sumOfNumbers(total,evenNumber) {
    return total += evenNumber

}




