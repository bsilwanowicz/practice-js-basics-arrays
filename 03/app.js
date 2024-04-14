const n = 24;
const oddNumbers = [];

function addOddNumbers(arr) {
    for(let i=1;i<=n;i++) {
        if(i % 2 != 0) {
            arr.push(i)
        }
    }
    return arr
}

addOddNumbers(oddNumbers)
console.log(oddNumbers)