let number = 1990

function solution(number){
let numbers = [1000,900,500,100,90,50,10,9,5,1]
let separador = []
numbers.forEach(element => {
    let resto = number % element
    debugger
    if(resto != element){
        separador.push(element)
        number == resto
        debugger
    }
    
});
console.log(separador)
}

console.log(solution(number))



