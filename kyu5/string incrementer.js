let strng = "foobar001"

function incrementString (strng) {
let resultado = strng.match(/\d+/g)
if(resultado === null){
    return strng + "1"
}
else{
    let resultadopop = resultado.pop()
    debugger
    let resultadopop_number = Number(resultadopop) + 1 
    debugger
    let resultadopop_string = resultadopop_number.toString()
    
    let teste = strng.replace(resultadopop,'')
    debugger
    let resultado_final = teste + resultadopop_string
    return resultado_final
}

}

console.log(resultado)
console.log(incrementString(strng))

