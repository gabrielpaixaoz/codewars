let array1 = ["arp","strong"]

let array2 = ["lively", "alive", "harp", "sharp", "armstrong"]

function inArray(array1,array2){
    return array1.filter(a1 => array2.find(a2 => a2.match(a1))).sort()

}

console.log(inArray(array1,array2))



/*const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

const foundFruit = fruits.find(fruit => fruit.match('nana'));
console.log(foundFruit); // Output: "banana" */