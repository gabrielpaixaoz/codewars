let strng = "fo99obar99"

function incrementString (strng) {
let resultado = strng.match(/\d+/g)
console.log(resultado)
if(resultado === null){
    return strng + "1"
}
else{
    let resultadopop = resultado.pop()
    console.log(resultadopop)
    
    let resultadopop_number = (parseInt(resultadopop,10) + 1).toString().padStart(resultadopop.length, "0")
    console.log(resultadopop_number)
    let resultadopop_string = resultadopop_number.toString()
    let regex = new RegExp(resultadopop + "(?=$)")
    console.log(regex)

    let teste = strng.replace(regex, "")
    console.log(teste)
    let resultado_final = teste + resultadopop_string
    return resultado_final
}

}


console.log(incrementString(strng))

