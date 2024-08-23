let title = 'THE WIND IN THE WILLOWS'

let minorWords = 'The In'

function titleCase(title, minorWords){
    title = title.toLowerCase()
    minorWords = minorWords.toLowerCase()
    
    let newminorWords = minorWords.split(' ')
    
    let newtitle = title.split(' ').map((word, index) =>{
    
        if(index === 0){
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        }
        else if(newminorWords.includes(word) === true){
            return word
        }else{
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()}
        }
    ).join(' ')
    
    return newtitle
}

console.log(titleCase('a clash of KINGS','a an the of'))




