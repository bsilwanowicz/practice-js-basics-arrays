const randomArray = createRandomArray();
console.log(randomArray);

// nie modyfikuj kodu poniżej!

// funkcję może deklarować poniżej wywołania
// ponieważ w JS występuje mechanizm tzw. hoisting-u

function createRandomArray() {
    const arr = [];
    const len = getRandomInteger(1, 10)
    for(let i=0; i<len; i++) {
        arr.push( getRandomInteger(1, 100) );
    }

    return arr;
}

function getRandomInteger(min, max) {
    return Math.round(Math.random() * (max-min) + min);
}

function showAllElementsLoop(arr) {
    for (let i=0; i<arr.length;i++) {
        console.log(arr[i])
    }
    console.log(arr[arr.length-1])
}
function showAllElements(arr) {
    arr.forEach((element) => console.log(element))
}

showAllElements(randomArray)
showAllElementsLoop(randomArray)