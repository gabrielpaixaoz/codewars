/*Write a function that takes a hash table and a key as input, and returns the value associated with that key.*/

function updateValue(hashTable,key){
    return  hashTable.hasOwnProperty(key)
}




const students = {gabriel: 20, maria: 19, valdice: 42}



console.log(updateValue(students,'gabriel')) // true
console.log(updateValue(students,'dajeodaejd')) // false


/*Write a function that takes a hash table and a key as input, and returns a boolean indicating whether the key exists in the hash table. */

