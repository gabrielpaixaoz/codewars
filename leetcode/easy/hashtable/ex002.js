/*Write a function that takes a hash table and a key as input, and returns the value associated with that key.*/

function getValue(hashTable,key){
    return hashTable[key]
}


const students = {gabriel: 20, maria: 19, valdice: 42}

console.log(getValue(students,'gabriel'))


