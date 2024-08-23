let str = "should return 5 for 'abracadabra'"


function getCount(str) {
    let str_separated = str.split('').map(letter => letter.toLowerCase())
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let counter = 0

    for(let letter of str_separated){
        if(vowels.includes(letter)){
            counter += 1
        }
    }
    return counter
  }

  


  /*
  function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
} */
