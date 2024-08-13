let value = 7

function narcissistic(value) {
    let value_separeted = value.toString().split('')
    let value_separeted_potency = value_separeted.map(item => parseInt(item ** value_separeted.length))
    let soma = value_separeted_potency.reduce((accumulator, valor) =>{
        return accumulator + valor;
    }, 0);
    let bool
    if(soma === value){
        bool = true
    }
    else{
        bool = false
    }
    
    return bool
  }

  console.log(narcissistic(value))



/*function narcissistic( value ) {
  return ('' + value).split('').reduce(function(p, c){
    return p + Math.pow(c, ('' + value).length)
    }, 0) == value;
}*/
  
  

