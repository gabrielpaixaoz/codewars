let text = "The sunset sets at twelve o' clock."
debugger;

function alphabetPosition(text) {
    let text_separeted = text.split('').map(letter => letter.toUpperCase()).filter((letter) => letter !== ' ' && letter !== "." && letter !== "'") 
    let alphabet = []
    let output = []
    for(let i = 65; i<= 90; i++){
        alphabet.push(String.fromCharCode(i))
    }
    
    for(let letter of text_separeted){
        if(alphabet.includes(letter)){
            output.push(alphabet.indexOf(letter) + 1)
        }
    }
    
    let output_string = output.join(' ');
      return output_string;
    }

    console.log(alphabetPosition(text))