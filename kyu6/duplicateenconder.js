let word = "Success"

let word_separeted = word.toUpperCase().split('')
let duplicates = word_separeted.filter((item,index) => word_separeted.indexOf(item) !== index)
let output_false_true = word_separeted.map(item => duplicates.includes(item))
let output = ""

for(let i = 0 ; i <= output_false_true.length - 1; i++){
    if(output_false_true[i] === false){
        output += "("
    }
    else{
        output += ")"
    }
}

console.log(output)
