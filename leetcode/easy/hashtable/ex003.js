/*Write a function that takes a hash table and a key as input, and returns the value associated with that key.*/

function updateValue(hashTable,key,newValue){
    return hashTable[key] = newValue
}




const students = {gabriel: 20, maria: 19, valdice: 42}

updateValue(students,'gabriel', 21)

console.log(students)


