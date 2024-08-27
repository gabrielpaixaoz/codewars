
let a = [1,2,2,2,3]
let b = [2]
//return [1,3]
function arrayDiff(a, b) {
    return a.filter(item => !b.includes(item))  
}



console.log(b)

console.log(arrayDiff(a,b))