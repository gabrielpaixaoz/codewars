
let n = 10


countBits = n => n.toString(2).split('0').join('').length;



console.log(countBits(n))
/*
var countBits = function(n) {
   let binary = []
    let quotient = Math.floor(n / 2)
    let number_binary = n % 2
    binary.push(number_binary)
    while(quotient != 0){
        number_binary = quotient % 2
        quotient = Math.floor(quotient / 2)
        binary.push(number_binary)
    }
    let count = binary.filter(item => item === 1).length

return count
}; */